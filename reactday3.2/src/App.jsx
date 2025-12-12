import { Routes, Route, Link } from 'react-router-dom'
import './App.css'
import Home from './Home'
import About from './About'
import Gallery from './Gallery'
import PostPage from './PostPage'
import Post from './Post'

function App() {
  return (
    <>
      <nav className="navbar">
        <ul className="nav-list">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/gallary">Gallary</Link></li>
          <li><Link to="/postpage">PostPage</Link></li>
        </ul>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/gallary" element={<Gallery />} />
        <Route path="/postpage" element={<PostPage />} />
        <Route path="/postpage/:id" element={<Post />} />
      </Routes>
    </>
  )
}

export default App