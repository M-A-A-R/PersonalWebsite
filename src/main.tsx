// Entry point — mounts the React app into the #root div in index.html
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'   // Global styles + Tailwind directives
import App from './App'

// createRoot is the modern React 18 API for mounting apps
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
