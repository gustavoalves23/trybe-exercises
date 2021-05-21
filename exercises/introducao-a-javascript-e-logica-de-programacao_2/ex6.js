let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let impares = [];

for (number = 0; number < numbers.length; number += 1){
    if ((numbers[number]%2) ==! 0){
        impares.push(numbers[number]);
    }
}

console.log(impares.length);