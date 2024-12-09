import '../index.css'
import { Link } from 'react-router-dom';
import { useSelector } from "react-redux";
import { RootState } from "../store/store";

const Navbar: React.FC = () => {

// Sélectionne l'utilisateur actuellement connecté
const currentUser = useSelector((state: RootState) =>
  state.usersredux.users.find((user) => user.isLoggedIn)
);

  return (
<nav className="bg-green-500 text-white font-bold p-4 flex items-center">
  <div className="container mx-auto flex  flex-wrap items-center justify-between gap-5">
    
    {/* Logo (Image) */}
    
    <div className="flex-shrink-0 p-2">
      <img 
        src="/src/assets/logo.webp" 
        alt="Logo" 
        className="w-24 h-auto transition-transform duration-1000 hover:scale-150" 
      />
    </div>
    
    {/* Navigation Links */}
    <div className="flex justify-center gap-6 px-2 whitespace-nowrap">
    <div className="flex flex-wrap items-center justify-start gap-6 text whitespace-nowrap">
        <Link to="/" className="hover:text-blue-300 hover:italic hover:underline">
          Accueil
        </Link>
        <Link to="/about" className="hover:text-blue-300 hover:italic hover:underline">
          Mieux nous connaître
        </Link>
        <Link to="/fonctionnement" className="hover:text-blue-300 hover:italic hover:underline">
          Fonctionnement du cabinet
        </Link>
        <Link to="/rendezvous" className="hover:text-blue-300 hover:italic hover:underline">
          Prendre rendez-vous
        </Link>
        <Link to="/contact" className="hover:text-blue-300 hover:italic hover:underline">
          Nous contacter
        </Link>
    </div>

    {/* Sign-in & Sign-up buttons */}
    
    <div className="flex items-center gap-4 flex-shrink-0">
        <div className="flex flex-col items-center">
          <Link to="/signup" className="text-sm bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition-colors">
            SignUp
          </Link>
        </div>

        {currentUser ? (
          // Si connecté, afficher "Sign Out"
        <div className="flex items-center gap-2">
        <Link to="/signout" className="text-sm bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition-colors"
          state={currentUser.email}>
          SignOut
        </Link>
        <p className="flex text-sm text-gray-700 mt-1 text-center"> Bonjour, {currentUser.name}</p>
        </div>
        ) : (
        <div className="flex flex-col items-center">
          <Link to="/signin" className="text-sm bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition-colors">
            SignIn
          </Link>
        </div>
        )}
    </div>
    </div> 

  </div>
</nav>

  );
};

export default Navbar;

