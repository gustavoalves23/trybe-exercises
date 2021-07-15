const fetch = require('node-fetch');
const dogPictureRequest = () => {
  return new Promise((resolve, reject) => {
    fetch('https://dog.ceo/api/breeds/image/random')
    .then((respond) => respond.json())
    .then((object) => resolve(object))
  })
}

const teste = async () => {
const test = await dogPictureRequest();
console.log(test);
}

teste()


module.exports = {
  dogPictureRequest,
}