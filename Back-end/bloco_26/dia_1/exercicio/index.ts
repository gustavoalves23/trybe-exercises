import readline from 'readline-sync';

const availableScripts:string[] = ['area', 'capacity', 'characters', 'length','mass' ]; 

console.log('Scripts disponiveis:');

availableScripts.forEach((value, index) => console.log(`${index} - ${value}`));

const script = availableScripts[readline.questionInt('Selectione o script: ')];

require(`./${script}`);