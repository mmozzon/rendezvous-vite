import { configureStore } from '@reduxjs/toolkit';
import persistedReducer from "./persistedReducer";
import { persistStore } from "redux-persist";
//import storage from "redux-persist/lib/storage"; // Utilise localStorage

// Configuration de redux-persist
/**
 * const persistConfig = {
  key: "root", // Clé de stockage dans localStorage
  storage,
};
**/

//const persistedReducer = persistReducer(persistConfig, eventsReducer);


  export const store = configureStore({
    reducer: persistedReducer,
  });

export const persistor = persistStore(store);
//persistor.purge();  

  // Types pour TypeScript
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
