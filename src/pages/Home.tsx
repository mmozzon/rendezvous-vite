import React from 'react';
import { Link } from 'react-router-dom';

const Home: React.FC = () => (
  <div>
    <nav>
      <h1>Bienvenue à la clinique privée du Docteur Kamel</h1>
      <h4><Link to="/create">Prise de rendez-vous</Link></h4>
      <h4><Link to="/appointments">Liste des rendez-vous</Link></h4>
      <h4><Link to="/logs">Accès aux logs</Link></h4>
    </nav>
  </div>
);

export default Home;

//<h1>Bienvenue à la clinique privée du Docteur Kamel</h1>
