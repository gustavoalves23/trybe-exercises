const lesson1 = {
  materia: 'Matemática',
  numeroEstudantes: 20,
  professor: 'Maria Clara',
  turno: 'manhã',
};

const lesson2 = {
  materia: 'História',
  numeroEstudantes: 20,
  professor: 'Carlos',
};

const lesson3 = {
  materia: 'Matemática',
  numeroEstudantes: 10,
  professor: 'Maria Clara',
  turno: 'noite',
};

function adicionarTurno(lesson, chave, valor) {
  lesson[chave] = valor;
}

adicionarTurno(lesson2,'turno', 'manhã');

const listKeys = lesson => {
  return(Object.keys(lesson));
}

const lessonSize = (lesson) => {
  return(Object.entries(lesson).length);
}

const listValues = lesson => {
  return(Object.values(lesson));
}

let allLessons = {
  lesson1: {

  },
  lesson2: {

  },
  lesson3: {

  }
}

Object.assign(allLessons.lesson1,lesson1);
Object.assign(allLessons.lesson2,lesson2);
Object.assign(allLessons.lesson3,lesson3);

function allStudents() {
  return (allLessons.lesson1.numeroEstudantes + allLessons.lesson2.numeroEstudantes + allLessons.lesson3.numeroEstudantes);
}

function getValueByNumber (lesson, position) {
  return (Object.values(lesson)[position]);
}

function verifyPair (lesson, key, value) {
  if (lesson[key] === value){
    return true
  }
  return false
}

// BONUS

function mathCounter(allLessons) {
  let lessons = [allLessons.lesson1, allLessons.lesson2, allLessons.lesson3];
  let sum = 0;
  for (let lesson of lessons) {
    if (lesson.materia === 'Matemática'){
      sum += lesson.numeroEstudantes;
    }
  }
  return (sum);
}

function createReport(allLessons, name) {
  let lessons = [allLessons.lesson1, allLessons.lesson2, allLessons.lesson3];
  let returnObj = {
    professor: name,
    aulas: [],
    estudantes: 0
  }
  for (let lesson of lessons) {
    if (lesson.professor === name){
      returnObj.aulas.push(lesson.materia);
      returnObj.estudantes += lesson.numeroEstudantes;
    }
  }
  return(returnObj);
}
