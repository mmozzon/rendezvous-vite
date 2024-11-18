import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addAppointment } from '../store/appointmentsSlice';
import { useNavigate } from 'react-router-dom';
import { addLog } from '../store/logsSlice'
import { Link } from 'react-router-dom';

const CreateAppointment: React.FC = () => {
    
  const [patient_name, setPatientName] = useState('');
  const [doctor_name, setDoctorName] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // Création d'un objet newAppointment
  const newAppointment = {
    id: Date.now().toString(), // Génère un identifiant unique
    patient_name,
    doctor_name,
    date,
    time,
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    dispatch(addAppointment(newAppointment));
    dispatch(addLog(`Rendez-vous ajouté : ${newAppointment.patient_name} le ${newAppointment.date} à ${newAppointment.time} chez docteur ${newAppointment.doctor_name}`));
    navigate('/appointments');
  };

  return (
    <form onSubmit={handleSubmit}>
      <h1>Gestion de prise de rendez-vous</h1>
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
      <h4><Link to="/">Page d'accueil</Link></h4>
    </form>
    
  );
};

export default CreateAppointment;
