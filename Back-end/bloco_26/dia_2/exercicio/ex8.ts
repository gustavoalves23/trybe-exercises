function myFilter<T>(array: T[], func:(value: T, item?: number, array?:T[]) => boolean):T[] {
  const baseArray:T[] = [];
  for (let item = 0; item < array.length; item += 1) {
    if (func(array[item], item, array)) baseArray.push(array[item]);
  }
  return baseArray;
}

const values:number[] = [1,2,3,4,5,6,7,8,9,10];

const testFunc = (item:number) => item % 2 === 0;

const test = myFilter(values, testFunc);

console.log(test);
