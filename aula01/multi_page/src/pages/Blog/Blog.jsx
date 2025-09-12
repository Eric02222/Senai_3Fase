import React, { useState, useEffect } from 'react'
import { Link } from 'react-router'


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

      <div className='flex gap-5 flex-wrap justify-center'>
        {
          posts && posts.map(post => (
            <div key={post.id} className='card'>
              <img src={post.image} alt="imagem" />
              <h1 className='titulo'>{post.title}</h1>
              <p className='views'>{post.views}</p>
              <Link to={`/post/${post.id}`}
              className='text-blue-500 underline'
              >Leia mais</Link>
            </div>
          ))
        }
      </div>

    </>


  )
}

export default Blog