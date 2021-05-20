let salarioBruto = 3000;
let aliquotaINSS;
let aliquotaIR;
let parcelaIR;
let salarioBase;
let salarioLiquido;

if (salarioBruto < 1556.94){
    aliquotaINSS = 0.08;
}
else if (salarioBruto < 2594.92){
    aliquotaINSS = 0.09;
}
else if (salarioBruto < 5189.82){
    aliquotaINSS = 0.11;
}
else {
    aliquotaINSS = "max";
}

if(aliquotaINSS == "MAX"){
    salarioBase = salarioBruto - 570.88;
} else {
    salarioBase = salarioBruto - salarioBruto*aliquotaINSS;
}
console.log("Salário Base:");
console.log(salarioBase);

if (salarioBase < 1903.98 ){
    aliquotaIR = 0;
    parcelaIR = 0;
} else if (salarioBase < 2826.65 ){
    aliquotaIR = 0.075;
    parcelaIR = 142.8;
} else if (salarioBase < 3751.05){
    aliquotaIR = 0.15;
    parcelaIR = 354.8;
} else if (salarioBase < 4664.68){
    aliquotaIR = 0.225;
    parcelaIR = 636.13;
} else {
    aliquotaIR = 0.275;
    parcelaIR = 869.36;
}

salarioLiquido = salarioBase - ((aliquotaIR*salarioBase) - parcelaIR);
console.log("Salário Líquido:");
console.log(salarioLiquido);