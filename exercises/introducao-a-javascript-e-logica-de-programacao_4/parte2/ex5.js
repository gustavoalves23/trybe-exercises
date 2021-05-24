//Crie uma função que receba um array de inteiros e retorne o inteiro que mais se repete.
function repitedInteger (numbers){
    let higherNumber = numbers[0];
    let repetitionTimes = 0;
    let repetitionTimesHigher = 0;

    for (let index in numbers){
        let number = numbers[index];
        for (let index2 in numbers){
            if (number === numbers[index2]){
                repetitionTimes += 1;
        }
        if (repetitionTimes > repetitionTimesHigher){
            repetitionTimesHigher = repetitionTimes;
            higherNumber = number;
        }   
    }
    repetitionTimes = 0;
    }
    return(higherNumber);
}

console.log(repitedInteger([2, 3, 2, 5, 8, 2, 3]));