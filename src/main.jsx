import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App.jsx'
import { SiteProvider } from './context/SiteContext.jsx'
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* basename: na GitHub Pages sajt živi u podfolderu (/norizlatara/), lokalno na / */}
    <BrowserRouter basename={import.meta.env.BASE_URL.replace(/\/$/, '') || '/'}>
      <SiteProvider>
        <App />
      </SiteProvider>
    </BrowserRouter>
  </StrictMode>,
)
