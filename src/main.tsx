import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { ThemeProvider } from '@mui/material'
import { themeOptions } from './config/theme.ts'
import './index.css'
import RouterProvider from './routes/RouterProvider.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider theme={themeOptions} >
      <RouterProvider/>
    </ThemeProvider>
  </StrictMode>,
)
