import { useState } from 'react'
import { usePosts } from '../context/PostContext'
import PostCard from './PostCard'

function PostList() {
  const { posts } = usePosts()
  const [order, setOrder] = useState('date')
  const [search, setSearch] = useState('')

  const filtered = posts.filter(post =>
    post.text.toLowerCase().includes(search.toLowerCase())
  )

  const sorted = [...filtered].sort((a, b) => {
    if (order === 'likes') return b.likes - a.likes
    return b.id - a.id
  })

  return (
    <div>
      <div className="search-bar">
        <input
          type="text"
          placeholder="🔍 Buscar posts..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      <div className="sort-bar">
        <button
          className={order === 'date' ? 'sort-btn active' : 'sort-btn'}
          onClick={() => setOrder('date')}
        >
          🕐 Recientes
        </button>
        <button
          className={order === 'likes' ? 'sort-btn active' : 'sort-btn'}
          onClick={() => setOrder('likes')}
        >
          ❤️ Populares
        </button>
      </div>

      {sorted.length === 0 ? (
        <p className="empty">
          {search ? `No hay posts con "${search}"` : 'No hay posts todavía. ¡Sé el primero!'}
        </p>
      ) : (
        <div className="post-list">
          {sorted.map(post => (
            <PostCard key={post.id} post={post} />
          ))}
        </div>
      )}
    </div>
  )
}

export default PostList