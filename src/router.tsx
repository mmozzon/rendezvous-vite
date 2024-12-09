import { createBrowserRouter } from 'react-router-dom';
import App from './App'; 
import Home from './pages/Home'; 
import AboutUs from './pages/AboutUs'; 
import RendezVous from './pages/RendezVous'; 
import Calendar from './pages/Calender'; 
import SignUp from './pages/SignUp'; 
import SignIn from './pages/SignIn'; 
import SignOut from './pages/SignOut'; 
import Fonctionnement from './pages/Fonctionnement';
import ContactUs from './pages/ContactUs'; // Composant pour la page "Nous contacter"

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />, // Composant principal qui contient un <Outlet />
    children: [
      {
        path: "/",
        element: <Home /> 
      },
      {
        path: "/about",
        element: <AboutUs /> 
      },
      {
        path: "/fonctionnement", 
        element: <Fonctionnement /> 
      },
      {
        path: "/rendezvous", 
        element: <RendezVous /> 
      },
      {
        path: "/contact", 
        element: <ContactUs /> 
      },
      {
        path: "/politique", 
        element: <Home /> 
      },
      {
        path: "/credits", 
        element: <Home /> 
      },
      {
        path: "/calendar", 
        element: <Calendar /> 
      },
      {
        path: "/signup", 
        element: <SignUp /> 
      },
      {
        path: "/signin", 
        element: <SignIn /> 
      },
      {
        path: "/signout", 
        element: <SignOut /> 
      }
    ]
  }
]);
