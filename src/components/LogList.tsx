import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../store/store';
import { Link } from 'react-router-dom';

const LogList: React.FC = () => {
  // Récupérer les logs depuis Redux
  const logs = useSelector((state: RootState) => state.logs.logs);

  return (
    <div>
      <h2>Historique des logs</h2>
      
      <ul>
        {logs.length > 0 ? (
          logs.map((log) => (
            <li key={log.id}>
              <strong>{log.timestamp}</strong>: {log.message}
            </li>
          ))
        ) : (
          <li>Aucun log disponible.</li>
        )}
      </ul>
      <h4><Link to="/">Page d'accueil</Link></h4>
    </div>
  );
};

export default LogList;
