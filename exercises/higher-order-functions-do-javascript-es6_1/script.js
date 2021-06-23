let emailMaker = (name) => {
    return {nome:name, email: `${name.split(' ').join('_').toLowerCase()}@trybe.com` }
}

const newEmployees = () => {
    const employees = {
      id1: emailMaker('Pedro Guerra'), // Nome: Pedro Guerra -> Chame sua função passando o nome Pedro Guerra como parâmetro, substituindo as aspas
      id2: emailMaker('Luiza Drumond'), // Nome: Luiza Drumond -> Chame sua função passando o nome Luiza Drumond como parâmetro, substituindo as aspas
      id3: emailMaker('Carla Paiva'), // Nome: Carla Paiva -> Chame sua função passando o nome Carla Paiva como parâmetro, substituindo as aspas
    }
    return employees;
  };
/////////////////////////////////////////////////////////////////////////////////////
const numberTest = (betNumber, rightNumber) => betNumber === rightNumber;

const betReturn = (number, testFunction) => {
    let randomNumber = Math.ceil(5 * Math.random());
    if  (testFunction(number, randomNumber)) {
        return `Parabéns você ganhou random: ${randomNumber} myNumber: ${number}`;
    }
    return `Tente novamente random: ${randomNumber} myNumber: ${number}`;
}

/////////////////////////////////////////////////////////////////////////////////////
const rightAnswers = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const studentAnswers = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];

const evaluateExam = (respostasCertas, respostasDoAluno) => {
    let score = 0;
    for (let index = 0; index < respostasCertas.length; index += 1) {
        if (respostasCertas[index] === respostasDoAluno[index] && respostasDoAluno[index]!== 'N.A') {
            score += 1;
        }
        if (respostasCertas[index] !== respostasDoAluno[index] && respostasDoAluno[index]!== 'N.A') {
            score -= 0.5;
        }
    }
    return score;
}

const examChecker = (respostasCertas, respostasDoAluno, calculadora) => calculadora(respostasCertas,respostasDoAluno);

console.log(examChecker(rightAnswers, studentAnswers, evaluateExam));