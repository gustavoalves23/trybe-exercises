"use strict";
function myFilter(array, func) {
    const baseArray = [];
    for (let item = 0; item < array.length; item += 1) {
        if (func(array[item], item, array))
            baseArray.push(array[item]);
    }
    return baseArray;
}
const values = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const testFunc = (item) => item % 2 === 0;
const test = myFilter(values, testFunc);
console.log(test);
