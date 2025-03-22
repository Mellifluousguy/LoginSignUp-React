import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { UserProvider } from './Components/dataContext.jsx'
import './index.css'
import App from './App.jsx'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <UserProvider>
      <App />
    </UserProvider>
  </StrictMode>,
)
