// AppointmentList.tsx
import React from 'react';
import { Appointment } from './types';

interface AppointmentListProps {
  appointments: Appointment[];
  onDeleteAppointment: (id: string) => void;
}

const AppointmentList: React.FC<AppointmentListProps> = ({ appointments, onDeleteAppointment }) => {
  return (
    <ul>
      {appointments.map((appointment) => (
        <li key={appointment.id}>
          <p>Patient: {appointment.patient_name}</p>
          <p>Praticien: {appointment.doctor_name}</p>
          <p>Date: {appointment.date}</p>
          <p>Heure: {appointment.time}</p>
          <button onClick={() => onDeleteAppointment(appointment.id)}>Supprimer</button>
        </li>
      ))}
    </ul>
  );
};

export default AppointmentList;
