// Desafio 10
function techList(tech, name) {
  let techArray = [];
  if (tech.length > 0) {
    for (let index = 0; index < tech.length; index += 1) {
      techArray.push({ tech: tech.sort()[index], name });
    }
    return (techArray);
  }
  return ('Vazio!');
}

// Desafio 11

function checkSame(index, numbers) {
  let repetitionTimes = 0;
  for (let index2 of numbers) {
    if (index === index2) {
      repetitionTimes += 1;
    }
    if (repetitionTimes > 2) {
      return (false);
    }
  }
  repetitionTimes = 0;
}

function repitedInteger(numbers) {
  for (let index of numbers) {
    if (checkSame(index, numbers) === false) {
      return (false);
    }
  }
  return (true);
}

function sizeChecker(digits) {
  if (digits.length !== 11) {
    return (false);
  }
}

function possibilityCheck(digits) {
  for (let index in digits) {
    if (digits[index] < 0 || digits[index] > 9 || repitedInteger(digits) === false) {
      return (false);
    }
  }
  return (true);
}

function viabilityTest(digits) {
  if (sizeChecker(digits) === false) {
    return ('falseSize');
  }
  if (possibilityCheck(digits) === false) {
    return ('falseImpossible');
  }
}

function makingNumber(digits) {
  let separatedDigits = digits;
  let completeNumber = [];
  completeNumber.push('(');
  for (let index = 0; index < 2; index += 1) {
    completeNumber.push(separatedDigits[index]);
  }
  completeNumber.push(') ');
  for (let index = 2; index < 7; index += 1) {
    completeNumber.push(separatedDigits[index]);
  }
  completeNumber.push('-');
  for (let index = 7; index < separatedDigits.length; index += 1) {
    completeNumber.push(separatedDigits[index]);
  }
  return (completeNumber).join('');
}

function generatePhoneNumber(digits) {
  if (viabilityTest(digits) === 'falseSize') {
    return ('Array com tamanho incorreto.');
  }
  if (viabilityTest(digits) === 'falseImpossible') {
    return ('não é possível gerar um número de telefone com esses valores');
  }

  return (makingNumber(digits));
}

// Desafio 12
function lCheck(value1, value2, value3) {
  if (value1 < value2 + value3 && value1 > Math.abs(value2 - value3)) {
    return (true);
  }
  return (false);
}

function triangleCheck(LineA, LineB, LineC) {
  let a = LineA;
  let b = LineB;
  let c = LineC;
  if (lCheck(a, b, c) === lCheck(b, a, c) === lCheck(c, a, b)) {
    return true;
  }
  return false;
}

// Desafio 13
function hydrate(frase) {
  let numberCounter = /\d+/g;
  let sum = 0;
  for (let cups of frase.match(numberCounter)) {
    sum += parseInt(cups, 10);
  }
  if (sum === 1) {
    return ('1 copo de água');
  }
  return (`${sum} copos de água`);
}

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};