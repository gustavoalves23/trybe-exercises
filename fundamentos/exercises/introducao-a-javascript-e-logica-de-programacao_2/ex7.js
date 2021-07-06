let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let menorNumero = numbers[0];
for (number = 0; number < numbers.length; number += 1){
    if (numbers[number] < menorNumero){
        menorNumero = numbers[number];
    }
}
console.log(menorNumero);
