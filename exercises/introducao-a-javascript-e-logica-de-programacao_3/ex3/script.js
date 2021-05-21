let n = 8;
let linha = "";
for (let lineIndex = 1; lineIndex <= n; lineIndex += 1){
    for (let spacesIndex = n - lineIndex; spacesIndex > 0; spacesIndex -= 1){
        linha = linha + " ";
    }
    for (let asteriskIndex = 0; asteriskIndex < lineIndex; asteriskIndex += 1){
        linha = linha + "*";
    }
    console.log(linha);
    linha = "";
}
