import React from 'react'
import { Link } from 'react-router-dom'

const PostPage = () => {
  return (
    <div className="page">
      <h1>Posts</h1>
      <ol>
        <li><Link to="/postpage/1">Post 1</Link></li>
        <li><Link to="/postpage/2">Post 2</Link></li>
        <li><Link to="/postpage/3">Post 3</Link></li>
        <li><Link to="/postpage/4">Post 4</Link></li>
      </ol>
    </div>
  )
}

export default PostPage