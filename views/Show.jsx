import React from 'react'
import pokemon from '../models/pokemon'



function Show({ Pokemon }) {

  const capitalName = Pokemon.name.charAt(0).toUpperCase() + Pokemon.name.substring(1);
  const imageUrl = Pokemon.img + '.jpg';


  return (
    <div>
      <h1>Gotta Catch 'Em All</h1>
      <h2> {capitalName}</h2>
      <img src={imageUrl} />
      <br/>
      <a href='/pokemon'>Back</a> <br/>
      <a href='/pokemon/new'>Add New</a>
    </div>
  )

}

module.exports = Show