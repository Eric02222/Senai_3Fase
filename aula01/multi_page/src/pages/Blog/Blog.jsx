import React, { useState, useEffect } from 'react'
import Card from '../../components/ui/atoms/Card'

export function Blog() {
  const [post, setPost] = useState([])

  useEffect(() => {
    fetch('http://localhost:3000/posts')
      .then(res => res.json())
      .then(data => {
        setPost(data)
      })
    console.log(post)
  }, [])

  return (
    <div>
      <h1>Pagina Blog</h1>

      {post.map((post) => {
        <Card titulo="post.title" views="post.views"/>
      })}
      
    </div>


  )
}

export default Blog