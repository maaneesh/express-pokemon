import React from 'react'
import pokemon from '../models/pokemon'



function Show({ pokemon }) {

  const capitalName = pokemon.name.charAt(0).toUpperCase() + pokemon.name.substring(1);
  const imageUrl = pokemon.img + '.jpg';


  return (
    <div>
      <h1>Gotta Catch 'Em All</h1>
      <h2> {capitalName}</h2>
      <img src={imageUrl} />
      <br/>
      <a href='/pokemon'>Back</a>
    </div>
  )

}

module.exports = Show