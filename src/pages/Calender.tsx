import React, { useState } from "react";
import { Calendar, dateFnsLocalizer } from "react-big-calendar";
import "react-big-calendar/lib/css/react-big-calendar.css";
import { format, parse, startOfWeek, getDay } from "date-fns";
import { fr } from "date-fns/locale/fr";
import { useLocation } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import { addEvent, deleteEvent } from "../store/eventsSlice";
import { RootState } from "../store/store";

// Configuration du localizer
const locales = { fr };
const localizer = dateFnsLocalizer({
  format,
  parse,
  startOfWeek: () => startOfWeek(new Date(), { weekStartsOn: 1 }),
  getDay,
  locales,
});

// Interface pour un événement
interface Event {
  title: string;
  doctor: string;
  start: Date;
  end: Date;
}

const MyCalendar: React.FC = () => {
  const location = useLocation();
  const doctorDetails = location.state.doctor as { id: number; name: string } ;
  const patientDetails = location.state.patient as { id: number; name: string };
  const navigate = useNavigate(); 
  const dispatch = useDispatch();

  // État temporaire pour le titre de l'événement
  const [inputTitle, setInputTitle] = useState(patientDetails.name);

 //const events = useSelector((state: RootState) => state.events);

  // Gestion des événements depuis Redux

    const events = useSelector((state: RootState) =>
    state.eventsredux.events.map((event) => ({
      ...event,
      start: event.start instanceof Date ? event.start : new Date(event.start), // Si déjà Date, pas besoin de convertir
      end: event.end instanceof Date ? event.end : new Date(event.end), // Idem pour end
    }))
  );
 
  /** 
 console.log("list events");
  events.forEach((event) => {
    console.log("un event start:" , event.start);
  });
  **/

  const [newEvent, setNewEvent] = useState<Event>({
    title: patientDetails?.name || "",
    doctor: doctorDetails?.name || "",
    start: new Date(),
    end: new Date(new Date().getTime() + 30 * 60 * 1000),
  });

 // Fonction de gestion du changement de l'input
 const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  setInputTitle(e.target.value); // Mise à jour de l'état temporaire
};
 
  const handleDeleteEvent = (eventToDelete: Event) => {
    //console.log("Event to delete:", eventToDelete.start);
    //console.log("Current events in Redux:", events);
    dispatch(deleteEvent(eventToDelete));
  };
  
  /** 
  const handleDeleteEvent = (eventToDelete: Event) => {
    setEvents(function (prevEvents) {
      return prevEvents.filter(function (event) {
        return event !== eventToDelete;
        return event !== eventToDelete;
      });
    });

    //  Forme condensée
    //const handleDeleteEvent = (eventToDelete: Event) => {
    //  setEvents((prevEvents) => prevEvents.filter((event) => event !== eventToDelete));
    // };  
    
  }; **/

  // Fonction pour arrondir à la demi-heure
  const roundTo30Minutes = (date: Date) => {
    const minutes = date.getMinutes();
    const roundedMinutes = Math.floor(minutes / 30) * 30;
    return new Date(date.setMinutes(roundedMinutes, 0, 0));
  };

  // Ajouter un nouvel événement
  const handleAddEvent = (event: Event) => {

    event.title= inputTitle;

    if (!event.title) {
      alert("Veuillez ajouter un nom d'un patient pour l'événement.");
      return;
    }
    if (!event.doctor) {
      alert("Veuillez choisir un praticien");
      navigate('/rendezvous');
      return;
    }

    for (let forevent of events) {
      if (forevent.start.getTime() === event.start.getTime()) {
        alert("Plage horaire non disponible, veuillez en sélectionner une autre");
        return;
      }
    }

    //setEvents((prevEvents) => [...prevEvents, event]);
    dispatch(addEvent(event));

    setNewEvent({
      title:  patientDetails.name,
      doctor: doctorDetails.name,
      start: new Date(),
      end: new Date(new Date().getTime() + 30 * 60 * 1000)
    });

    setInputTitle(patientDetails.name); 
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Calendrier</h1>

      {/* Formulaire pour ajouter un événement */}
      <div className="mb-4">
        <h2 className="font-semibold mb-2">
          Ajouter un Rendez-vous avec {doctorDetails.name} :
        </h2>
        <input
          type="text"
          placeholder="Patient"
          className="border p-2 mb-2 w-full"
          value={inputTitle} // L'input est contrôlé par inputTitle
          onChange={handleInputChange}
        />

        <div className="flex gap-4 mb-2">
          <input
            type="datetime-local"
            step="1800"
            className="border p-2 flex-1"
            value={newEvent.start.toLocaleString("sv-SE").replace(" ", "T").slice(0, 16)}
            onChange={(e) => {
              const startDate = roundTo30Minutes(new Date(e.target.value));
              let endDate = new Date(startDate.getTime() + 30 * 60 * 1000);
              // Vérifier si l'heure de fin dépasse 23:59 et l'ajuster
              const endOfDay = new Date(startDate);
              endOfDay.setHours(23, 59, 59, 999); // 23:59:59.999
                // Si l'heure de fin dépasse 23:59, ajustez-la pour ne pas aller au-delà
              if (endDate > endOfDay) {
                endDate = endOfDay;
              }
              setNewEvent({ ...newEvent, start: startDate, end: endDate });
            }}
          />
        </div>

        <button
          onClick={() => handleAddEvent(newEvent)}
          /*
          onClick={handleAddEvent(newEvent)}  --->  pas comme ceci
          L'attribut onClick attend une fonction (de type MouseEventHandler<HTMLButtonElement> 
          ou undefined) qui sera appelée lorsque l'utilisateur cliquera sur le bouton. 
          En appelant directement handleAddEvent(newEvent) dans onClick, vous passez le 
          résultat de la fonction, qui est de type void, et cela n'est pas compatible avec 
          le type attendu.
          Dans ce cas, handleAddEvent est exécuté avant que l'utilisateur ne clique sur le bouton.
          */
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Ajouter un événement
        </button>
      </div>

      {/* Calendrier */}
      <Calendar
        localizer={localizer}
        startAccessor="start"
        endAccessor="end"
        style={{ height: 500 }}
        step={30}
        timeslots={1}
        //min={new Date(0, 0, 0, 6, 0, 0)} // Heure minimale (8:00)
        //max={new Date(0, 0, 0, 21, 0, 0)} // Heure maximale (20:00)
        events={events} 
        components={{
          event: ({ event }) => (
            <div>
              <span>{`${event.title} - ${event.doctor}`}</span>
              <button
                onClick={(e) => {
                  e.stopPropagation(); // Empêche la propagation du clic à la sélection de l'événement
                  handleDeleteEvent(event);
                }}
                className="ml-2 text-red-500 hover:underline"
              >
                Supprimer
              </button>
            </div>
          ),
        }}
        selectable
        onSelectSlot={(slotInfo) => {
          const start = roundTo30Minutes(slotInfo.start);
          let end = new Date(start.getTime() + 30 * 60 * 1000);
 
          const endOfDay = new Date(slotInfo.start);
          endOfDay.setHours(23, 59, 59, 999); // 23:59:59.999
          // Si l'heure de fin dépasse 23:59, ajustez-la pour ne pas aller au-delà
          if (end > endOfDay) {
            end = endOfDay;
          }
            
          const updatedEvent = { ...newEvent, start, end };

          // Ajout immédiat de l'événement après sélection
          handleAddEvent(updatedEvent);
        }}
        onSelectEvent={(event) => alert(`Événement : ${event.title} - ${event.doctor}`)}
      />
    </div>
  );
};

export default MyCalendar;
