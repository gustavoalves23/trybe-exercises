const readsync = require('readline-sync');

const distancia = readsync.questionFloat('Distancia: ');
const Tempo = readsync.questionFloat('Tempo: ');

console.log(`Velocidade: ${distancia / Tempo} m/s`);