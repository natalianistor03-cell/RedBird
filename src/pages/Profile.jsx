import { usePosts } from '../context/PostContext'

const USUARIO = 'Natalia Nistor'

function Profile() {
  const { posts } = usePosts()
  const totalLikes = posts.reduce((acc, post) => acc + post.likes, 0)
  const totalReplies = posts.reduce((acc, post) => acc + (post.replies?.length || 0), 0)

  return (
    <div className="profile">
      <div className="profile-header">
        <div className="profile-avatar">
          {USUARIO.charAt(0).toUpperCase()}
        </div>
        <div>
          <h2>{USUARIO}</h2>
          <p className="profile-handle">@{USUARIO.toLowerCase().replace(' ', '')}</p>
        </div>
      </div>

      <div className="profile-stats">
        <div className="stat">
          <span className="stat-number">{posts.length}</span>
          <span className="stat-label">Posts</span>
        </div>
        <div className="stat">
          <span className="stat-number">{totalLikes}</span>
          <span className="stat-label">Likes recibidos</span>
        </div>
        <div className="stat">
          <span className="stat-number">{totalReplies}</span>
          <span className="stat-label">Respuestas</span>
        </div>
      </div>
    </div>
  )
}

export default Profile