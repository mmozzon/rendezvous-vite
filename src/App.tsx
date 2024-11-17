//import { useState } from 'react'
//import reactLogo from './assets/react.svg'
//import viteLogo from '/vite.svg'
import './App.css'
import React, { useState } from 'react'
import AppointmentForm from './AppointmentForm'
import AppointmentList from './AppointmentList'
import LogList from './LogList'
import { Appointment, Log } from './types'

const App: React.FC = () => {
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
    <div>
      <h1>Gestion des Prises de Rendez-vous</h1>
      <AppointmentForm onAddAppointment={addAppointment} />
      <AppointmentList appointments={appointments} onDeleteAppointment={deleteAppointment} />
      <LogList logs={logs} />
    </div>
  );
};

export default App;
