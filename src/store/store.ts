import { configureStore } from '@reduxjs/toolkit';
import eventsReducer from "./eventsSlice";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; // Utilise localStorage

// Configuration de redux-persist
const persistConfig = {
  key: "root", // Clé de stockage dans localStorage
  storage,
};

const persistedReducer = persistReducer(persistConfig, eventsReducer);

export const store = configureStore({
    reducer: {
        //appointments: appointmentReducer,
        //logs: logsReducer, 
        events: persistedReducer, // Remplace par le reducer persisté
    },
  });

export const persistor = persistStore(store);
persistor.purge();  

  // Types pour TypeScript
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
