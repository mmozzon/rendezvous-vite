import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Appointments from './pages/Appointments';
import LogList from './components/LogList';

import CreateAppointment from './pages/CreateAppointment';

const App: React.FC = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/appointments" element={<Appointments />} />
      <Route path="/create" element={<CreateAppointment />} />
      <Route path="/logs" element={<LogList />} /> 
      <Route path="*" element={<div>Page non trouvée</div>} />
    </Routes>
  </BrowserRouter>
);

export default App;
