import { useState } from 'react'
import { usePosts } from '../context/PostContext'

function ReplySection({ postId, replies = [] }) {
  const { addReply } = usePosts()
  const [text, setText] = useState('')
  const [open, setOpen] = useState(false)

  const handleReply = () => {
    if (text.trim() === '') return
    addReply(postId, text)
    setText('')
  }

  return (
    <div className="reply-section">
      <button className="toggle-replies" onClick={() => setOpen(!open)}>
        💬 {replies.length} {replies.length === 1 ? 'respuesta' : 'respuestas'}
      </button>

      {open && (
        <div className="replies">
          {replies.length > 0 && (
            <div className="reply-list">
              {replies.map(reply => (
                <div key={reply.id} className="reply">
                  <span className="reply-text">{reply.text}</span>
                  <span className="reply-date">{reply.date}</span>
                </div>
              ))}
            </div>
          )}

          <div className="reply-form">
            <input
              type="text"
              placeholder="Escribe una respuesta..."
              value={text}
              onChange={(e) => setText(e.target.value)}
              maxLength={280}
            />
            <button onClick={handleReply} disabled={text.trim() === ''}>
              Responder
            </button>
          </div>
        </div>
      )}
    </div>
  )
}

export default ReplySection