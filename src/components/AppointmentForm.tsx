import React, { useState } from 'react';
import { Appointment } from '../types';

interface AppointmentFormProps {
  onAddAppointment: (appointment: Appointment) => void;
}

const AppointmentForm: React.FC<AppointmentFormProps> = ({ onAddAppointment }) => {
  const [patient_name, setPatientName] = useState('');
  const [doctor_name, setDoctorName] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (patient_name && doctor_name && date && time) {
      const newAppointment: Appointment = {
        id: Date.now().toString(),
        patient_name,
        doctor_name,
        date,
        time
      };
      onAddAppointment(newAppointment);
      setPatientName('');
      setDoctorName('');
      setDate('');
      setTime('');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Nom du patient"
        value={patient_name}
        onChange={(e) => setPatientName(e.target.value)}
        required
      />
      <input
        type="text"
        placeholder="Nom du praticien"
        value={doctor_name}
        onChange={(e) => setDoctorName(e.target.value)}
        required
      />
      <input
        type="date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
        required
      />
      <input
        type="time"
        value={time}
        onChange={(e) => setTime(e.target.value)}
        required
      />
      <button type="submit">Prendre Rendez-vous</button>
    </form>
  );
};

export default AppointmentForm;