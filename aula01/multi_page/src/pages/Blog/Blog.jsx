import React, { useState, useEffect } from 'react'
import Card from '../../components/ui/atoms/Card.jsx'

export function Blog() {
  const [posts, setPosts] = useState([])

  useEffect(() => {
    fetch('http://localhost:3000/posts')
      .then(res => res.json())
      .then(data => {
        setPosts(data)
        console.log(data)
      })
  }, [])

  return (
    <>

      <div className='flex gap-2'>
        {
          posts && posts.map(post => (
            <div key={post.id} className='card'>
              <img src={post.image} alt="imagem" />
              <h1 className='titulo'>{post.title}</h1>
              <p className='views'>{post.views}</p>
            </div>
          ))
        }
      </div>

    </>


  )
}

export default Blog