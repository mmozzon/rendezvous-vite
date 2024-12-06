import '../index.css'
import { Link } from 'react-router-dom';

interface Doctor {
    id: number;
    name: string;
  }

interface Patient {
        id: number;
    name: string;
}

let patient: Patient = {id: 111 , name: "Michel Mozzon"};

const doctors: Doctor[] = [
    { id: 1, name: "Dr. Jean Bison" },
    { id: 2, name: "Dr. Marie Dauphin" },
    { id: 3, name: "Dr. Pierre Héron" },
    { id: 4, name: "Dr. Sophie Faucon" },
  ];

  const DoctorsList: React.FC = () => {
    return (
      <div className="bg-gray-50 min-h-screen p-6">

        <div className="flex">   
             
          {/* Titre aligné à gauche avec un espacement cohérent */}
          <h1 className="text-xl font-bold text-left ml-20 mb-6 text-gray-800">
            Prendre rendez-vous avec:
          </h1>          
          {/* Bouton "Choisir" aligné à droite */}
          <Link to="/calendar"
                 className="ml-auto text-blue-500 hover:text-blue-700 underline transition-all"
                 state={{ doctor: { id: 0, name: "" }, patient: { id: 0, name: "" } }}
          > 
                Consulter l'agenda
          </Link>
        </div>

        {/* Conteneur pour les cartes de médecins, centré avec un espacement entre les éléments */}
        <div className="max-w-6xl ml-20 flex flex-col gap-6">
          {doctors.map((doctor) => (
            <div
              key={doctor.id}
              className="flex items-center bg-white shadow-md rounded-lg p-4 hover:shadow-lg transition-shadow hover:bg-gray-200 transition-colors"
            >
              {/* Nom du médecin à gauche */}
              <h2 className="text-xl font-semibold text-blue-600">{doctor.name}</h2>
  
              {/* Bouton "Choisir" aligné à droite */}
              <Link to="/calendar"
                    className="ml-auto bg-blue-500 text-white px-4 py-2 rounded-full hover:text-red-300 hover:italic hover:underline hover:bg-blue-600 transition-colors text-center"
                    state={{doctor, patient} }
              > 
                    Choisir
              </Link>
            </div>
          ))}
        </div>
      </div>
    );
  };
  
  
export default DoctorsList;