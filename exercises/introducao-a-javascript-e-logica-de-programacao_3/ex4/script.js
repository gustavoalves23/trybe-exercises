let n = 10;
let linha = "";
for (let lineIndex = 1; lineIndex <= n; lineIndex += 1){
    for (let spacesIndex = (n - lineIndex)/2; spacesIndex> 0; spacesIndex -= 1){
        linha = linha + " ";
    }
    for (let asteriskIndex = 0; asteriskIndex < lineIndex; asteriskIndex += 1){
        linha = linha + "*";
        }
    if(lineIndex % 2 ==! 0){  
        console.log(linha);
    }
    linha = "";
}
