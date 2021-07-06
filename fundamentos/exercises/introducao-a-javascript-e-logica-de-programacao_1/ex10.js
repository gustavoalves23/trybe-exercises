let custo = 10;
let venda = 20;

if (custo <= 0 || venda <= 0){
    console.log("ERRO");
} else {
    console.log("O lucro é de:")
    console.log(((venda*0.8) - custo)*1000);
    
}