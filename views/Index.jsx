import React from 'react'


const pokemonStyle = {
    color: '#25C0C0',
    fontSize: '2em',


}

function Index({ pokemons }) {
    return (
        <div>
            <h1>See all the Pokemon!</h1>

            {pokemons.map((pokemon, i) => {
                
                const capitalFirst = pokemon.name.charAt(0).toUpperCase() + pokemon.name.substring(1);
                return (
                    <ul>
                        <li style={pokemonStyle} key={i}>{capitalFirst}</li>
                    </ul>

                )
            })

            }
        </div>
    )
}

module.exports = Index