import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './pages/Home';
import Appointments from './pages/Appointments';
import LogList from './components/LogList';
import CreateAppointment from './pages/CreateAppointment';

import './index.css'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/appointments',
    element: <Appointments />,
  },
  {
    path: '/create',
    element: <CreateAppointment />,
  },
  {
    path: '/logs',
    element: <LogList />,
  },
  {
    path: '*',
    element: <div>Page non trouvée</div>,
  },
]);

const App: React.FC = () => <RouterProvider router={router} />;

export default App;

