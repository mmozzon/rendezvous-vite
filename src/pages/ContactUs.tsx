import React, { useState } from "react";
import { Calendar, dateFnsLocalizer } from "react-big-calendar";
import "react-big-calendar/lib/css/react-big-calendar.css";
import { format, parse, startOfWeek, getDay } from "date-fns";
import  { enUS } from "date-fns/locale/en-US";

const locales = { "en-US": enUS };

const localizer = dateFnsLocalizer({
  format,
  parse,
  startOfWeek: () => startOfWeek(new Date(), { weekStartsOn: 1 }), // Lundi comme premier jour de la semaine
  getDay,
  locales,
});

interface Event {
  title: string;
  start: Date;
  end: Date;
}

const MyCalendar: React.FC = () => {
  const [events, setEvents] = useState<Event[]>([]); // Liste des événements
  const [newEvent, setNewEvent] = useState<Event>({ title: "", start: new Date(), end: new Date() });

  // Fonction pour ajouter un événement
  const handleAddEvent = () => {
    if (!newEvent.title) {
      alert("Veuillez ajouter un titre pour l'événement.");
      return;
    }
    setEvents([...events, newEvent]);
    setNewEvent({ title: "", start: new Date(), end: new Date() });
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Calendrier</h1>

      {/* Formulaire pour ajouter un événement */}
      <div className="mb-4">
        <h2 className="font-semibold mb-2">Ajouter un Rendez-vous :</h2>
        <input
          type="text"
          placeholder="Titre"
          className="border p-2 mb-2 w-full"
          value={newEvent.title}
          onChange={(e) => setNewEvent({ ...newEvent, title: e.target.value })}
        />
        <div className="flex gap-4 mb-2">
          <input
            type="datetime-local"
            className="border p-2 flex-1"
            onChange={(e) => setNewEvent({ ...newEvent, start: new Date(e.target.value) })}
          />
          <input
            type="datetime-local"
            className="border p-2 flex-1"
            onChange={(e) => setNewEvent({ ...newEvent, end: new Date(e.target.value) })}
          />
        </div>
        <button
          onClick={handleAddEvent}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
          Ajouter un événement
        </button>
      </div>

      {/* Calendrier */}
      <Calendar
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
        style={{ height: 500 }}
        selectable
        onSelectSlot={(slotInfo) =>
          setNewEvent({ ...newEvent, start: slotInfo.start, end: slotInfo.end })
        }
        onSelectEvent={(event) => alert(`Événement : ${event.title}`)}
      />
    </div>
  );
};

export default MyCalendar;
