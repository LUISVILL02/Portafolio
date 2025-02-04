import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import RouterProvider from './routes/RouterProvider.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
      <RouterProvider/>
  </StrictMode>,
)
