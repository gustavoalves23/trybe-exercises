import './App.css';
import Pokedex from './Components/Pokedex';
import pokemons from './Components/Data'

function App() {
  return (<Pokedex pokemons = { pokemons }/>);
}

export default App;
