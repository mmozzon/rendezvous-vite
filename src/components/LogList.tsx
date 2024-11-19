import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../store/store';
import { useDispatch } from 'react-redux';
import { clearLogs } from '../store/logsSlice';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

const LogList: React.FC = () => {
  // Récupérer les logs depuis Redux
const logs = useSelector((state: RootState) => state.logs.logs);
const navigate = useNavigate();
const dispatch = useDispatch();

const handleClearLogs = () => {
  dispatch(clearLogs()); // Déclenche l'action pour vider les logs
  navigate('/logs');
};

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
      <button onClick={handleClearLogs} type="submit">Supprimer les logs</button>
      <h4><Link to="/">Page d'accueil</Link></h4>
    </div>
  );
};

export default LogList;
