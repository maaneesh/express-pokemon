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

            return (
                <div>
                    <div style={pokemonStyle}>{pokemon.name}</div>
                </div>
            )
        })

        }
        </div>
    )
}

module.exports = Index