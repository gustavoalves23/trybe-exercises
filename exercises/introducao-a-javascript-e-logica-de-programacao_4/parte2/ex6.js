function sum (number){
    let soma = 0;

    for (let index = number; index > 0; index -= 1){
        soma = soma + index;
    }

    return(soma);
}

console.log(sum(5));