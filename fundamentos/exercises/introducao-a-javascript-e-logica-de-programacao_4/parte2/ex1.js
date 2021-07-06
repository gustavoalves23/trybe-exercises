function palindromo(palavra){
    let palavraAoContrario = [];
    let contagemDeLetras = 0;
        for (let index = palavra.length -1; index >= 0; index -= 1){
            palavraAoContrario.push(palavra[index]);
            
        }
    for (let index = 0; index <= palavra.length - 1; index += 1){
        if (palavra[index] === palavraAoContrario[index]){
            contagemDeLetras = contagemDeLetras + 1;
        }
    }
    return(contagemDeLetras === palavra.length);
    
}

console.log(palindromo("arara"));
