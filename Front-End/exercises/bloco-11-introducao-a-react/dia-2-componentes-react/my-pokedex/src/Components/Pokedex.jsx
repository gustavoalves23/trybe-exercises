import React from 'react';
import Pokemon from './Pokemon';

class Pokedex extends React.Component {
    render() {
        return ( 
            <div className = 'page'>
                <h1>Pokedex</h1>
                <div className = 'pokedex'>
                {this.props.pokemons.map((pokemon) => <Pokemon key = {pokemon.id} data = {pokemon} />)}
                </div>
            </div>
        )
    }
}

export default Pokedex;