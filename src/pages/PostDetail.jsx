import { useParams, useNavigate } from 'react-router-dom'
import { usePosts } from '../context/PostContext'
import ReplySection from '../components/ReplySection'

function PostDetail() {
  const { id } = useParams()
  const { posts, likePost, deletePost } = usePosts()
  const navigate = useNavigate()

  const post = posts.find(p => p.id === Number(id))

  if (!post) {
    return (
      <div className="empty">
        <p>Post no encontrado</p>
        <button className="save-btn" onClick={() => navigate('/')}>
          Volver al inicio
        </button>
      </div>
    )
  }

  return (
    <div className="post-detail">
      <button className="back-btn" onClick={() => navigate(-1)}>
        ← Volver
      </button>

      <div className="detail-card">
        <p className="detail-text">{post.text}</p>
        <span className="post-date">{post.date}</span>

        <div className="post-actions">
          <button className="like-btn" onClick={() => likePost(post.id)}>
            ❤️ {post.likes}
          </button>
          <button className="delete-btn" onClick={() => {
            deletePost(post.id)
            navigate('/')
          }}>
            🗑️
          </button>
        </div>

        <ReplySection postId={post.id} replies={post.replies} />
      </div>
    </div>
  )
}

export default PostDetail