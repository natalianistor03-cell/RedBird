import { Routes, Route, NavLink } from 'react-router-dom'
import { usePosts } from './context/PostContext'
import Home from './pages/Home'
import Profile from './pages/Profile'
import PostDetail from './pages/PostDetail'
import Footer from './components/Footer'

function App() {
  const { posts } = usePosts()

  return (
    <div className="app">
      <header className="header">
        <h1>🐦 RedBird</h1>
        <span className="post-count">{posts.length} posts</span>
      </header>

      <nav className="navbar">
        <NavLink to="/" end className={({ isActive }) => isActive ? 'nav-btn active' : 'nav-btn'}>
          🏠 Inicio
        </NavLink>
        <NavLink to="/perfil" className={({ isActive }) => isActive ? 'nav-btn active' : 'nav-btn'}>
          👤 Perfil
        </NavLink>
      </nav>

      <main className="main">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/perfil" element={<Profile />} />
          <Route path="/post/:id" element={<PostDetail />} />
        </Routes>
      </main>

      <Footer />
    </div>
  )
}

export default App