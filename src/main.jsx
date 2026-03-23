import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { PostProvider } from './context/PostContext'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <PostProvider>
        <App />
      </PostProvider>
    </BrowserRouter>
  </StrictMode>
)