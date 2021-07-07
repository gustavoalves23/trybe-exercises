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
    if (number < 8000) {
      resolve ();
    } else {
      reject ();
    }
  })
  .then(() => console.log('Promise resolvida'))
  .catch(() => console.log('Promise rejeitada'));
}

window.onload = () => promiseTest();