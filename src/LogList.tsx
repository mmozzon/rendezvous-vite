// LogList.tsx
import React from 'react';
import { Log } from './types';

interface LogListProps {
  logs: Log[];
}

const LogList: React.FC<LogListProps> = ({ logs }) => {
  const exportLogsToFile = () => {
    const logContent = logs
      .map(log => `${log.timestamp} - ${log.message}`)
      .join('\n');
    const blob = new Blob([logContent], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);

    // Créer un lien de téléchargement
    const link = document.createElement('a');
    link.href = url;
    link.download = `logs_${new Date().toISOString()}.txt`;
    link.click();

    // Libérer l'URL après le téléchargement
    URL.revokeObjectURL(url);
  };

  return (
    <div>
      <h2>Logs</h2>
      <ul>
        {logs.map((log) => (
          <li key={log.id}>
            <p>{log.timestamp} - {log.message}</p>
          </li>
        ))}
      </ul>
      {logs.length > 0 && (
        <button onClick={exportLogsToFile}>Exporter les logs</button>
      )}
    </div>
  );
};

export default LogList;
