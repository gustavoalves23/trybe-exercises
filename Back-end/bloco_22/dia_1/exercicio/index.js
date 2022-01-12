const readsync = require('readline-sync');

const scripts = [
  'imc',
  'velocidade',
  'sorteio'
]

console.log('Escolha um script');

scripts.forEach((script, index) => {
  console.log(`${index} - ${script}`);
})

const script = readsync.questionInt('script: ');

switch (script) {
  case (0):
    require('./imc')
    break;
  case(1):
    require('./velocidade')
    break;
  case(2):
  require('./sorteio')
  break;
  default:
    console.log("Invalido");
} 