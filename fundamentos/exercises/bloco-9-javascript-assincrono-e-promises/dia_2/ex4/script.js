const randomArray = () => {
  const array = [];
  for (let index = 0; index < 10; index += 1) {
    array.push(Math.floor(Math.random() * 50)**2);
  }
  return array;
}

const promiseTest = () => {

  return new Promise((resolve, reject) => {
    const number = randomArray().reduce((acc, act) => acc + act, 0);
    const divisors = [1,2,4,5,10]
    if (number < 8000) {
      resolve (divisors.map((divisor) => number/divisor));
    } else {
      reject ();
    }
  })
  .then((resolve) => resolve)
  .then(array => {
    console.log(array);
    return array.reduce((number, acc) => number + acc, 0);
  })
  .catch(() => console.log("É mais de oito mil! Essa promise deve estar quebrada!"))
}
