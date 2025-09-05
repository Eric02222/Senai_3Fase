import React from 'react'

function Card(key, titulo, views, descricao) {
  return (
    <div key={key}>
        <h1>{titulo}</h1>
        <p>{views}</p>
    </div>
  )
}

export default Card