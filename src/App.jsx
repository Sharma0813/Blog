import { Routes, Route, NavLink } from 'react-router-dom'
import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import Post from './pages/Post.jsx'
import Create from './pages/Create.jsx'

// import Instagram icon
import { FaInstagram } from 'react-icons/fa'

export default function App(){
  return (
    <div>
      <nav className='nav'>
        <div className='nav-inner container'>
          <div className='brand'>
            <NavLink to='/'><span>Animal</span>Blog</NavLink>
          </div>
          <div style={{display:'flex', gap:8, marginLeft:'auto'}}>
            <NavLink to='/' className={({isActive}) => isActive ? 'active' : undefined}>Home</NavLink>
            <NavLink to='/create' className={({isActive}) => isActive ? 'active' : undefined}>Create</NavLink>
            <NavLink to='/about' className={({isActive}) => isActive ? 'active' : undefined}>About</NavLink>
          </div>
        </div>
      </nav>

      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/post/:slug' element={<Post/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/create' element={<Create/>} />
      </Routes>

      <footer className="footer">
        <p>
          🐾 <strong>AnimalBlog — Sharing stories, facts, and love for animals around the world.</strong>
          <br />
          Built with ❤️ by Aman Sharma.
        </p>
        <p>
          <a href="https://www.instagram.com/_sharma._/" target="_blank" rel="noopener noreferrer">
            <FaInstagram size={20} style={{marginRight:"6px", verticalAlign:"middle"}} />
            Follow Us On Instagram
          </a>
        </p>
      </footer>
    </div>
  )
}
