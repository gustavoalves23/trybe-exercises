//Crie uma função que receba um array de nomes e retorne o nome com a maior quantidade de caracteres

function biggerNameFuncion (names){
    let biggerName = names[0];
    for (let index in names){
        if (names[index].length > biggerName.length){
            biggerName = names[index];
        }
    }
    return(biggerName);
}

console.log(biggerNameFuncion(['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana']));