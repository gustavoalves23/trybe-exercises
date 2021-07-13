// Desafio 1
function compareTrue(value1, value2) {
  return (value1 === true && value2 === true);
}

// Desafio 2
function calcArea(base, height) {
  return ((base * height) / 2);
}

// Desafio 3
function splitSentence(frase) {
  return (frase.split(' '));
}

// Desafio 4
function concatName(stringsArray) {
  let fullString = `${stringsArray[stringsArray.length - 1]}, ${stringsArray[0]}`;
  return (fullString);
}

// Desafio 5
function footballPoints(wins, ties) {
  return (wins * 3 + ties);
}

// Desafio 6
function repetitionCounter(numbers, higherValue) {
  let repetitionTimes = 0;
  for (let indice in numbers) {
    if (numbers[indice] === higherValue) {
      repetitionTimes += 1;
    }
  }
  return (repetitionTimes);
}

function highestCount(numbers) {
  let higherValue = numbers[0];
  for (let indice in numbers) {
    if (higherValue < numbers[indice]) {
      higherValue = numbers[indice];
    }
  }
  return (repetitionCounter(numbers, higherValue));
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let distCat1Mouse = (cat1 - mouse);
  let distCat2Mouse = (cat2 - mouse);
  let ans;
  if (Math.abs(distCat1Mouse) > Math.abs(distCat2Mouse)) {
    ans = 'cat2';
  } else if (Math.abs(distCat1Mouse) < Math.abs(distCat2Mouse)) {
    ans = 'cat1';
  } else {
    ans = 'os gatos trombam e o rato foge';
  }
  return (ans);
}

// Desafio 8

function checker(number) {
  if (number % 3 === 0 && number % 5 === 0) {
    return ('fizzBuzz');
  }
  if (number % 3 === 0) {
    return ('fizz');
  }
  if (number % 5 === 0) {
    return ('buzz');
  }
  return ('bug!');
}
function fizzBuzz(numbersArray) {
  let resultsArray = [];
  for (let index of numbersArray) {
    resultsArray.push(checker(index));
  }
  return (resultsArray);
}

// Desafio 9
function encode(phrase) {
  for (let letter = 0; letter < phrase.length; letter += 1) {
    phrase = phrase.replace('a', '1');
    phrase = phrase.replace('e', '2');
    phrase = phrase.replace('i', '3');
    phrase = phrase.replace('o', '4');
    phrase = phrase.replace('u', '5');
  }
  return (phrase);
}

function decode(phrase) {
  for (let letter = 0; letter < phrase.length; letter += 1) {
    phrase = phrase.replace('1', 'a');
    phrase = phrase.replace('2', 'e');
    phrase = phrase.replace('3', 'i');
    phrase = phrase.replace('4', 'o');
    phrase = phrase.replace('5', 'u');
  }
  return (phrase);
}

module.exports = {
  calcArea,
  catAndMouse,
  compareTrue,
  concatName,
  decode,
  encode,
  fizzBuzz,
  footballPoints,
  highestCount,
  splitSentence,
};