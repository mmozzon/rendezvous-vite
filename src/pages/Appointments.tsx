import React from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { RootState } from '../store/store';
import { removeAppointment } from '../store/appointmentsSlice';
import { Link } from 'react-router-dom';
import { addLog } from '../store/logsSlice'
import { Appointment } from '../types';

const Appointments: React.FC = () => {
  const appointments = useSelector((state: RootState) => state.appointments.appointments);
  const dispatch = useDispatch();

  const handleRemove = (id: string, appointment: Appointment) => {
    dispatch(removeAppointment(id)); 
    dispatch(addLog(`Rendez-vous supprimé : ${appointment.patient_name} le ${appointment.date} à ${appointment.time} chez docteur ${appointment.doctor_name}`));// Envoi de l'action pour supprimer le rendez-vous
  };

  return (
    <div>
      <h1>Vos rendez-vous</h1>
      {appointments.length === 0 ? (
        <p>Aucun rendez-vous</p>
      ) : (
        <ul>
          {appointments.map((appointment) => (
            <li key={appointment.id}>
              {appointment.patient_name} le {appointment.date} à {appointment.time} chez {appointment.doctor_name}
              <button onClick={() => handleRemove(appointment.id, appointment)}>Supprimer</button>
            </li>
          ))}
        </ul>
      )}
      <h4><Link to="/">Page d'accueil</Link></h4>
    </div>
  );
};

export default Appointments;