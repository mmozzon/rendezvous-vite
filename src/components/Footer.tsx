import '../index.css'
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
    return (
      <footer className="bg-gray-800 text-white py-3">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-start">

          {/* Section 1 : Logo et description */}
          
          <div>
            <h2 className="text-xs font-bold mb-4">Animal centre</h2>
            <p className="text-xs text-gray-400">
              Clinique vétérinaire Elise Mozzon
            </p>
            <img 
                src="/src/assets/logo.webp" 
                alt="Logo" 
                className="w-10 h-auto bg-blue-500" 
            /> 
          </div>
  
          {/* Section 3 : Réseaux sociaux */}
          <div className="ml-auto">
            <h3 className="text-xs font-bold mb-4">Suivez-nous</h3>
            <div className="flex space-x-4">
              <a
                href="https://facebook.com"
                className="text-gray-400 hover:text-blue-500 transition"
                aria-label="Facebook"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  className="w-4 h-4"
                >
                  <path d="M22 12a10 10 0 1 0-11.45 9.95V15.7H8.1v-3.7h2.45v-2.8c0-2.42 1.44-3.75 3.65-3.75 1.06 0 2.17.18 2.17.18v2.4h-1.22c-1.2 0-1.57.75-1.57 1.5v1.88h2.67l-.43 3.7h-2.24v6.25A10 10 0 0 0 22 12z" />
                </svg>
              </a>
              <a 
                href="https://x.com" 
                className="text-gray-400 hover:text-blue-700 transition"
                aria-label="Suivre sur X"
              >
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  fill="currentColor"
                  viewBox="0 0 512 512"
                  className="w-4 h-4"
              >
                  <path d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z"/>
                </svg>
              </a>
              <a
                href="https://linkedin.com"
                className="text-gray-400 hover:text-blue-700 transition"
                aria-label="LinkedIn"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  className="w-4 h-4"
                >
                  <path d="M4.98 3.5a2.49 2.49 0 1 1 0 4.98 2.49 2.49 0 0 1 0-4.98zM2 8.98h5.96v12H2v-12zm7.46 0H15v1.66h.09c.6-1.12 2.08-2.3 4.27-2.3 4.57 0 5.41 3.01 5.41 6.92v7.72h-5.96v-6.85c0-1.63-.03-3.72-2.27-3.72-2.28 0-2.63 1.78-2.63 3.6v6.97H9.45v-12z" />
                </svg>
              </a>
              <a 
                href="https://www.youtube.com" 
                className="text-gray-400 hover:text-blue-700 transition" 
                aria-label="YouTube"
                >
                <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    fill="currentColor" 
                    viewBox="0 0 24 24" 
                    className="w-4 h-4"
                >
                    <path d="M23.5 6.2c-.3-1.2-1.2-2.2-2.4-2.5-2.2-.6-4.5-.9-6.8-.9s-4.6.3-6.8.9c-1.2.3-2.1 1.3-2.4 2.5-.6 2.2-.9 4.5-.9 6.8s.3 4.6.9 6.8c.3 1.2 1.2 2.2 2.4 2.5 2.2.6 4.5.9 6.8.9s4.6-.3 6.8-.9c1.2-.3 2.1-1.3 2.4-2.5.6-2.2.9-4.5.9-6.8s-.3-4.6-.9-6.8zm-13 9.2V7.6l6 3.4-6 3.4z"/>
                </svg>
              </a>
              <a 
                href="https://www.instagram.com" 
                className="text-gray-400 hover:text-blue-500 transition" 
                aria-label="Instagram"
                >
                <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    fill="currentColor" 
                    viewBox="0 0 24 24" 
                    className="w-4 h-4"
                >
                    <path d="M12 2.1c3.6 0 4.1 0 5.5.1 1.3 0 2.3.5 3.1 1.3.8.8 1.3 1.8 1.3 3.1.1 1.4.1 1.9.1 5.5s0 4.1-.1 5.5c0 1.3-.5 2.3-1.3 3.1-.8.8-1.8 1.3-3.1 1.3-1.4.1-1.9.1-5.5.1s-4.1 0-5.5-.1c-1.3 0-2.3-.5-3.1-1.3-.8-.8-1.3-1.8-1.3-3.1-.1-1.4-.1-1.9-.1-5.5s0-4.1.1-5.5c0-1.3.5-2.3 1.3-3.1.8-.8 1.8-1.3 3.1-1.3 1.4 0 1.9-.1 5.5-.1zm0 3.6c-2.2 0-4.1.9-5.5 2.3-1.4 1.4-2.3 3.3-2.3 5.5s.9 4.1 2.3 5.5c1.4 1.4 3.3 2.3 5.5 2.3s4.1-.9 5.5-2.3c1.4-1.4 2.3-3.3 2.3-5.5s-.9-4.1-2.3-5.5c-1.4-1.4-3.3-2.3-5.5-2.3zm6.2-3.5c-.5 0-.9.2-1.2.5s-.5.7-.5 1.2c0 .5.2.9.5 1.2s.7.5 1.2.5c.5 0 .9-.2 1.2-.5s.5-.7.5-1.2c0-.5-.2-.9-.5-1.2s-.7-.5-1.2-.5z"/>
                </svg>
                </a>

            </div>
          </div>
        
        </div>

        {/* Navigation Links */}
        <div className="text-center text-xs space-x-4 flex justify-center">
                <Link to="/politique" className="hover:text-blue-400 transition">
                  Politique de confidentialité
                </Link>
                <Link to="/credits" className="hover:text-blue-400 transition">
                  Crédits
                </Link>
                <Link to="/about" className="hover:text-blue-400 transition">
                  A propos de nous
                </Link>
                <Link to="/contact" className="hover:text-blue-400 transition">
                  Contact
                </Link>
        </div>

        {/* Section finale : Crédits */}
        {/*
        <div className="mt-8 text-center text-gray-500 text-sm">
          © 2024 MonEntreprise. Tous droits réservés.
        </div>
        */}

      </footer>
    );
  };
  
  export default Footer;
  