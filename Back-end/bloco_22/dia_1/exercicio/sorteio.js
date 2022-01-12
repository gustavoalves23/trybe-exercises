const readsync = require('readline-sync');

const playGame = () => {
  const randomNumber = Math.round(Math.random() * 10);
  
  const playerNumber = readsync.questionInt('Digite um numero: ');

  console.log(
    randomNumber === playerNumber ? "Parabéns, número correto!" : `Opa, não foi dessa vez. O número era ${randomNumber}`
  );

  const playAgain = readsync.question('Deseja jogar novamente? ');

  if (playAgain.toLocaleLowerCase() === 'sim') {
    playGame();
  } else {
    console.log('Tchau');
  }
}

playGame();