//import React from 'react';

import { useState } from 'react'
import AppointmentForm  from '../components/AppointmentForm';
import AppointmentList  from '../components/AppointmentList';
import LogList from '../LogList'
import { Appointment, Log} from '../types'

const Home: React.FC = () => {

  const [appointments, setAppointments] = useState<Appointment[]>([]);
  const [logs, setLogs] = useState<Log[]>([]);

  const addLog = (message: string) => {
    const newLog: Log = {
      id: Date.now().toString(),
      message,
      timestamp: new Date().toLocaleString(),
    };
    setLogs((prevLogs) => [...prevLogs, newLog]);
  };
  
  const addAppointment = (appointment: Appointment) => {
    setAppointments((prev) => [...prev, appointment]);
    addLog(`Rendez-vous ajouté : ${appointment.patient_name} le ${appointment.date} à ${appointment.time} chez docteur: ${appointment.doctor_name}`);
  };

  const deleteAppointment = (id: string) => {
    const appointment = appointments.find((app) => app.id === id);
    if (appointment) {
      setAppointments((prev) => prev.filter((app) => app.id !== id));
      addLog(`Rendez-vous supprimé : ${appointment.patient_name} le ${appointment.date} à ${appointment.time} chez docteur: ${appointment.doctor_name}`);
    }

}; 

  return (
    <>
        <h1>Gestion des Prises de Rendez-vous</h1>
        <AppointmentForm onAddAppointment={addAppointment} />
        <AppointmentList appointments={appointments} onDeleteAppointment={deleteAppointment} />
        <LogList logs={logs} />
    </>
  );
};

export default Home;