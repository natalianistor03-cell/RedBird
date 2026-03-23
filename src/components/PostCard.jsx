import { useState } from 'react'
import { usePosts } from '../context/PostContext'
import ReplySection from './ReplySection'
import { useNavigate } from 'react-router-dom'

const USUARIO = 'Natalia Nistor'

function Avatar({ name }) {
  const inicial = name.charAt(0).toUpperCase()
  return <div className="avatar">{inicial}</div>
}

function PostCard({ post }) {
  const { likePost, deletePost, editPost } = usePosts()
  const [editing, setEditing] = useState(false)
  const [editText, setEditText] = useState(post.text)

  const handleSave = () => {
    if (editText.trim() === '') return
    editPost(post.id, editText)
    setEditing(false)
  }

  const handleCancel = () => {
    setEditText(post.text)
    setEditing(false)
  }

  const navigate = useNavigate()

  return (
    <div className="post-card">
      <Avatar name={USUARIO} />
      <div className="post-content">
        <div className="post-header">
          <span className="post-username">{USUARIO}</span>
          <span className="post-date">{post.date}</span>
        </div>

        {editing ? (
          <div className="edit-box">
            <textarea
              value={editText}
              onChange={(e) => setEditText(e.target.value)}
              maxLength={280}
            />
            <div className="edit-actions">
              <button className="cancel-btn" onClick={handleCancel}>Cancelar</button>
              <button className="save-btn" onClick={handleSave}>Guardar</button>
            </div>
          </div>
        ) : (
          <p>{post.text}</p>
        )}

        <div className="post-actions">
          <button className="like-btn" onClick={() => likePost(post.id)}>
            ❤️ {post.likes}
          </button>
          {!editing && (
            <button className="edit-btn" onClick={() => setEditing(true)}>
              ✏️
            </button>
          )}
          <button className="delete-btn" onClick={() => deletePost(post.id)}>
            🗑️
          </button>
          <button className="detail-btn" onClick={() => navigate(`/post/${post.id}`)}>
            🔗
          </button>
        </div>

        <ReplySection postId={post.id} replies={post.replies} />
      </div>
    </div>
  )
}

export default PostCard