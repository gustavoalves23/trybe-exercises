let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let maiorNumero = numbers[0];

for (number = 0; number < numbers.length; number += 1){
    if (numbers[number] > maiorNumero){
        maiorNumero = numbers[number];
    }
}
console.log(maiorNumero);