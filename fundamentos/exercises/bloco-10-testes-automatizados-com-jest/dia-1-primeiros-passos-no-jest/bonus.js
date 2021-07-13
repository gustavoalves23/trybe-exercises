const professionalBoard = [
  {
    id: '8579-6',
    firstName: 'Ana',
    lastName: 'Gates',
    specialities: ['UX', 'Design'],
  },
  {
    id: '5569-4',
    firstName: 'George',
    lastName: 'Jobs',
    specialities: ['Frontend', 'Redux', 'React', 'CSS'],
  },
  {
    id: '4456-4',
    firstName: 'Leila',
    lastName: 'Zuckerberg',
    specialities: ['Context API', 'RTL', 'Bootstrap'],
  },
  {
    id: '1256-4',
    firstName: 'Linda',
    lastName: 'Bezos',
    specialities: ['Hooks', 'Context API', 'Tailwind CSS'],
  },
  {
    id: '9852-2-2',
    firstName: 'Jeff',
    lastName: 'Cook',
    specialities: ['Ruby', 'SQL'],
  },
  {
    id: '4678-2',
    firstName: 'Paul',
    lastName: 'Dodds',
    specialities: ['Backend'],
  },
];

// Pesquisa
const searchEmployee = (id, detail) => {
  const renames = {
    firstName: 'Primeiro nome',
    lastName: 'Ultimo nome',
    specialities: 'especialidades'
  }
  const professionalIDs = professionalBoard.map((professional) => professional.id);
  if (!professionalIDs.includes(id)) {
    return 'ID não identificada';
  }

  if (!Object.keys(renames).includes(detail)) {
    return "Informação indisponível";
  }
  return `O funcionário de id ${id} tem como ${renames[detail]} ${professionalBoard.find((person) => person.id === id)[detail]}`;
};

module.exports = {
  searchEmployee,
}