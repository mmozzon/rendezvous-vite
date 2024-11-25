import '../index.css'

const Navbar = () => {
  return (
    <nav className="bg-green-500 text-white font-bold p-4 h-18">
      <div className="container mx-auto flex justify-between items-center h-16">
      
        {/* Logo (Image) */}
        <div>
              <img src="/src/assets/logo.jfif" className="h-14 w-auto transition-transform duration-1000 hover:scale-150" />
        </div>

        {/* Navigation Links */}
        <ul className="flex space-x-14 text-xl">
          <li>
            <a href="#home" className="hover:text-blue-300 hover:italic hover:underline">
              Accueil
            </a>
          </li>
          <li>
            <a href="#home" className="hover:text-blue-300 hover:italic hover:underline">
              Mieux nous connaitre
            </a>
          </li>
          <li>
            <a href="#about" className="hover:text-blue-300 hover:italic hover:underline">
              Fonctionnement du cabinet
            </a>
          </li>
          <li>
            <a href="#services" className="hover:text-blue-300 hover:italic hover:underline">
              Prendre rendez-vous
            </a>
          </li>
          <li>
            <a href="#contact" className="hover:text-blue-300 hover:italic hover:underline">
              Nous contacter
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;

/** 
      <div className="container flex w-full h-[80px] border-x-4 border-y-4 border-red-400 mx-auto">
        <div className="container max-w-[1480px] h-[40px] border border-green-400 flex mx-auto items-center justify-center">
            <h1>Bienvenue à la clinique privée du Docteur Kamel</h1>
        </div>
      </div>)

}; **/

