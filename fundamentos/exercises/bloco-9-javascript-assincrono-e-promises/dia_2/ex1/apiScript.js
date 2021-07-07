// apiScript.js
const API_URL = 'https://icanhazdadjoke.com/';


const fetchJoke = () => {
  const myObject = {
    method: 'GET',
    headers: { 'Accept': 'application/json' }
  };

  fetch(API_URL, myObject)
  .then((responde) => responde.json())
  .then((object) => {
    const joke = document.getElementById('jokeContainer');
    joke.innerText = object.joke;
  });

};

window.onload = () => fetchJoke();