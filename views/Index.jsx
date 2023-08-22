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
                        <li><a href={`pokemon/${i}`} style={pokemonStyle} key={i}>{capitalFirst}</a>

                        </li>
                    </ul>

                )
            })
            }

            <a href="/pokemon">Back</a> <br/>
            <a href='/pokemon/new'>Add New</a>

        </div>
    )
}

module.exports = Index