import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Log } from '../types';

interface LogState {
  logs: Log[];
}

const initialState: LogState = {
  logs: [],
};

const logsSlice = createSlice({
  name: 'logs',
  initialState,
  reducers: {
    addLog: (state, action: PayloadAction<string>) => {
      const newLog: Log = {
        id: Date.now().toString(),
        message: action.payload,
        timestamp: new Date().toLocaleString(),
      };
      console.log("log ajouté");
      state.logs.push(newLog);
    },
    clearLogs: (state) => {
      state.logs = [];
      console.log("log supprimé");
    },
  },
});

export const { addLog } = logsSlice.actions;
export const { clearLogs } = logsSlice.actions;
export default logsSlice.reducer;
