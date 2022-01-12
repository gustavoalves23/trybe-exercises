const fs = require('fs').promises;

//desafio1

const logCharacters = () => {
    fs.readFile('./simpsons.json', {encoding: 'ascii' })
    .then(file => JSON.parse(file))
    .then((array) => array.forEach((character) => {
        console.log(`${character.id} - ${character.name}`);
    }))
}

// logCharacters();


//desafio 2

const returnChar = (id) => {
    return new Promise((resolve, reject) => {
        fs.readFile('./simpsons.json', {encoding: 'ascii' })
        .then(file => JSON.parse(file))
        .then((array) => array.some((item) => Number(item.id) === id) ? resolve(array.find((item) => Number(item.id) === id)): reject("id não encontrado"))

    })
}


// returnChar(12).then(value => console.log(value)).catch(error => console.log(error));

//desafio 3

const remove6and10 = () => {
    fs.readFile('./simpsons.json', {encoding: 'ascii' })
    .then(file => JSON.parse(file))
    .then((array) => array.filter(person => person.id !== '6' && person.id !== '10'))
    .then(filteredArray => fs.writeFile('./simpsons.json', JSON.stringify(filteredArray), {encoding: 'ascii'}) )
}

// remove6and10()

//desafio 4

const create1to4 = () => {
    fs.readFile('./simpsons.json', {encoding: 'ascii' })
    .then(file => JSON.parse(file))
    .then((array) => array.filter(person => Number(person.id) < 5))
    .then(filteredArray => fs.writeFile('./simpsonFamily.json', JSON.stringify(filteredArray), {encoding: 'ascii'}) )
}

//desafio 5

// create1to4()

const addNelson = () => {
    fs.readFile('./simpsons.json', {encoding: 'ascii' })
    .then(file => JSON.parse(file))
    .then(array => [...array.filter(person => Number(person.id) < 5),{id: '5', name: 'Nelson Muntz'} ])
    .then(filteredArray => fs.writeFile('./simpsonFamily.json', JSON.stringify(filteredArray), {encoding: 'ascii'}) )
}

// addNelson();

//desafio 6

const replaceNelson = () => {
    fs.readFile('./simpsonFamily.json', {encoding: 'ascii' })
    .then(file => JSON.parse(file))
    .then((array) => {
        console.log(array);
        const newArray = [...array];
        newArray[4].name = 'Maggie Simpson'
        return newArray;
    })
    .then(filteredArray => fs.writeFile('./simpsonFamily.json', JSON.stringify(filteredArray), {encoding: 'ascii'}) )
}

// replaceNelson();