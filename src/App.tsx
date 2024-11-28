//import React from 'react';
import Navbar from './components/Navbar'; // Composant Navbar
import Footer from './components/Footer'; // Composant Footer
import { Outlet } from 'react-router-dom'; // Outlet pour le contenu dynamique des sous-routes

const App = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />  {/* Composant Navbar visible sur toutes les pages */}
      <Outlet />  {/* Rendu des sous-routes ici */}
      <Footer />  {/* Composant Footer visible sur toutes les pages */}
    </div>
  );
};

export default App;
