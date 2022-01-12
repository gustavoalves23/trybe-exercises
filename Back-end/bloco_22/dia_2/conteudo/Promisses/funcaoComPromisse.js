const calcularDivisao = (num1, num2) => {
    const promise = new Promise((resolve, reject) => {
        if (num2 === 0) reject(new Error('Não pode ser feito uma divisão por zero'));
        resolve(num1 / num2);
    })

    return promise;
}

calcularDivisao(2,0).then(value => console.log(value)).catch(e => console.log(`Erro: ${e.message}`))