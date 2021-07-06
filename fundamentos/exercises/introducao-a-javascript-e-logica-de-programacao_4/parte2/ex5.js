//Crie uma função que receba um array de inteiros e retorne o inteiro que mais se repete.
function repitedInteger (numbers){
    let repetitionTimes = 0;

    for (let index in numbers){
        let number = numbers[index];
        for (let index2 in numbers){
            if (number === numbers[index2]){
                repetitionTimes += 1;
        }
        if (repetitionTimes >= 3){
            return("Não pode");
        }
    }
    repetitionTimes = 0;
    }
}

console.log(repitedInteger([1, 2, 3, 4, 5, 6, 7, 8, 9,9,9]));