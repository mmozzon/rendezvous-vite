import '../index.css'
import { Link } from 'react-router-dom';

const Navbar: React.FC = () => {
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
    <div className="flex flex-wrap items-center justify-center gap-6 text-lg whitespace-nowrap">
        <Link to="/" className="hover:text-blue-300 hover:italic hover:underline">
          Accueil
        </Link>
        <Link to="/about" className="hover:text-blue-300 hover:italic hover:underline">
          Mieux nous connaître
        </Link>
        <Link to="/about" className="hover:text-blue-300 hover:italic hover:underline">
          Fonctionnement du cabinet
        </Link>
        <Link to="/about" className="hover:text-blue-300 hover:italic hover:underline">
          Prendre rendez-vous
        </Link>
        <Link to="/about" className="hover:text-blue-300 hover:italic hover:underline">
          Nous contacter
        </Link>
    </div>

    {/* Sign-in & Sign-up buttons */}
    
    <div className="flex flex-wrap items-center gap-4 flex-shrink-0">
      <a 
        href="in" 
        className="text-sm bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition-colors">
        Sign In
      </a>
      <a 
        href="out" 
        className="text-sm bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition-colors">
        Sign Up
      </a>
    </div> 

  </div>
</nav>

  );
};

export default Navbar;

