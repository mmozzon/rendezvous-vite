import { createBrowserRouter } from 'react-router-dom';
import App from './App'; 
import Main from './pages/Main'; 
import AboutUs from './pages/AboutUs'; 
//import Contact from './pages/Contact'; // Composant pour la page "Nous contacter"

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />, // Composant principal qui contient un <Outlet />
    children: [
      {
        path: "/", // Sous-route pour la page d'accueil
        element: <Main /> // Affiché dans <Outlet /> quand l'URL est "/"
      },
      {
        path: "/about", // Sous-route pour la page "Mieux nous connaître"
        element: <AboutUs /> // Affiché dans <Outlet /> quand l'URL est "/about"
      }
    ]
  }
]);
