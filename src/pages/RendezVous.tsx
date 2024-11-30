import '../index.css'

interface Doctor {
    id: number;
    name: string;
  }
  
const doctors: Doctor[] = [
    { id: 1, name: "Dr. Jean Bison" },
    { id: 2, name: "Dr. Marie Dauphin" },
    { id: 3, name: "Dr. Pierre Héron" },
    { id: 4, name: "Dr. Sophie Faucon" },
  ];

  const DoctorsList: React.FC = () => {
    return (
      <div className="bg-gray-50 min-h-screen p-6">
        {/* Titre aligné à gauche avec un espacement cohérent */}
        <h1 className="text-xl font-bold text-left ml-20 mb-6 text-gray-800">
          Prendre rendez-vous avec:
        </h1>

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
              <button className="ml-auto bg-blue-500 text-white px-4 py-2 rounded-full hover:bg-blue-600 transition-colors">
                Choisir
              </button>
            </div>
          ))}
        </div>
      </div>
    );
  };
  
  
export default DoctorsList;

{/*
const RendezVous: React.FC = () => {
    return (
     <h1 className="flex-grow">
        Ceci est la page de prise de rendez-vous
     </h1>
    )
};

export default RendezVous; */}
