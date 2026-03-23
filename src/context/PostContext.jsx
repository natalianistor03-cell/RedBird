import { createContext, useContext, useState, useEffect } from 'react'

const PostContext = createContext()

export function PostProvider({ children }) {
  const [posts, setPosts] = useState(() => {
    const saved = localStorage.getItem('posts')
    return saved ? JSON.parse(saved) : []
  })

  useEffect(() => {
    localStorage.setItem('posts', JSON.stringify(posts))
  }, [posts])

  const addPost = (text) => {
    const newPost = {
      id: Date.now(),
      text,
      likes: 0,
      date: new Date().toLocaleDateString(),
      replies: []
    }
    setPosts([newPost, ...posts])
  }

  const deletePost = (id) => {
    setPosts(posts.filter(post => post.id !== id))
  }

  const likePost = (id) => {
    setPosts(posts.map(post =>
      post.id === id ? { ...post, likes: post.likes + 1 } : post
    ))
  }

  const editPost = (id, newText) => {
    setPosts(posts.map(post =>
      post.id === id ? { ...post, text: newText } : post
    ))
  }

  const addReply = (postId, text) => {
    const reply = {
      id: Date.now(),
      text,
      date: new Date().toLocaleDateString()
    }
    setPosts(posts.map(post =>
      post.id === postId
        ? { ...post, replies: [...(post.replies || []), reply] }
        : post
    ))
  }

  return (
    <PostContext.Provider value={{ posts, addPost, deletePost, likePost, editPost, addReply }}>
      {children}
    </PostContext.Provider>
  )
}

export function usePosts() {
  return useContext(PostContext)
}