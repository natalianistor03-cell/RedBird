import { useState } from 'react'
import { usePosts } from '../context/PostContext'

function NewPostForm() {
  const [text, setText] = useState('')
  const { addPost } = usePosts()

  const handleSubmit = () => {
    if (text.trim() === '') return
    addPost(text)
    setText('')
  }

  const remaining = 280 - text.length

  return (
    <div className="new-post">
      <textarea
        placeholder="¿Qué está pasando?"
        value={text}
        onChange={(e) => setText(e.target.value)}
        maxLength={280}
      />
      <div className="new-post-footer">
        <span className={remaining < 20 ? 'counter danger' : 'counter'}>
          {remaining}
        </span>
        <button onClick={handleSubmit} disabled={text.trim() === ''}>
          Postear
        </button>
      </div>
    </div>
  )
}

export default NewPostForm