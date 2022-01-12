const calcularDivisao = (num1, num2) => {
    if (num2 === 0 ) throw Error ('Não pode ser feito uma divisão por zero');

    return num1/num2;
}

try {
    const resultado = calcularDivisao(2, 1);
    console.log(`Resultado: ${resultado}`);
} catch(e) {
    console.log(`Erro: ${e.message}`);
}