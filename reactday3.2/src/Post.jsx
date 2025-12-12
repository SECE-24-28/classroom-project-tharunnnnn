import React from 'react'
import { useParams, Link } from 'react-router-dom'

const Post = () => {
  const { id } = useParams()
  
  return (
    <div className="page">
      <Link to="/postpage" style={{ color: '#667eea', textDecoration: 'none' }}>← Back to Posts</Link>
      <h1>Post {id}</h1>
      <p>This is the content of post {id}.</p>
    </div>
  )
}

export default Post