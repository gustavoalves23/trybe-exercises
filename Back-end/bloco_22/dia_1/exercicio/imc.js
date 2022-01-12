const readline = require('readline-sync');

const peso = readline.questionFloat('Digite seu peso: ');
const altura = readline.questionFloat('Digite sua altura: ');

const imc = peso / altura ** 2;

let categoria;

if (imc < 18.5) {
  categoria = 'Abaixo do peso'
} else if (imc < 24.9) {
  categoria = 'Peso Normal'
} else if (imc < 29.9) {
  categoria = 'Acima do peso'
} else if (imc < 34.9) {
  categoria = 'Obesidade Grau 1'
} else if (imc < 39.9) {
  categoria = 'Obesidade Grau 2'
} else {
  categoria = 'Obesidade Grau 3'
}

console.log(`Seu IMC: ${imc}. Sua categoria: ${categoria}`);