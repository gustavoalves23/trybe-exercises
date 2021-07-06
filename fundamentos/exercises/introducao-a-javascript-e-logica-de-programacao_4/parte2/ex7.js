function endingChecker (word,ending){
    let countingMatchs = 0;
    for (let index = 1; index <= ending.length; index += 1){
        if (word[word.length - index] === ending[ending.length-index]){
            countingMatchs += 1;
        } 
    }
    return(countingMatchs === ending.length);
}

console.log(endingChecker('trybe', 'be'));