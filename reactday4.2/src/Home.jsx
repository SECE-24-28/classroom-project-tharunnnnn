import React from 'react'

const Home = ({searchRes}) => {
  return (
    <div>

        {
      searchRes.map((post) => 
        (
        <div key={post.id}>
          <h3>{post.title}</h3>
          <p>{post.datetime}</p>
          <p>{post.body}</p>
          <hr/>

        </div>
      ))
      }
    </div>
  )
}
export default Home
