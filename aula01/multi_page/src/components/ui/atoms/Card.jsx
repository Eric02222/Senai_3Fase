import React from 'react'

function Card(titulo, views) {


  return (
    <div>
        <h1>{titulo}</h1>
        <p>{views}</p>
    </div>
  )
}

export default Card