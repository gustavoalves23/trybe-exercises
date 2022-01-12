const fs = require('fs').promises;

fs.writeFile('./meu-arquivo.txt', 'Meu novo texto')
    .then(() => {
        console.log('Sucesso');
    })
    .catch((e) => {
        console.log(e.message);
    } )