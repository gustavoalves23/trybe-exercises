let a = 13;
let b = 13;
let c = 13;

console.log("O maior número é:")

if (a > b && a > c){
    console.log(a);
} else if (b > a && b > c){
    console.log(b);
} else if (c > a && c > b){
    console.log(c);
} else {
    console.log("São iguais");
}