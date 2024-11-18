import { configureStore } from '@reduxjs/toolkit';
import appointmentReducer from './appointmentsSlice';
import logsReducer from './logsSlice';

export const store = configureStore({
    reducer: {
        appointments: appointmentReducer,
        logs: logsReducer, 
    },
  });

  // Types pour TypeScript
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;