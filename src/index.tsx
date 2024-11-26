import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from './store/store';
//import App from './App';
import Navbar from './components/Navbar';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
      <Navbar />
     { /*<App />  */}
    </Provider>
  </React.StrictMode>
);