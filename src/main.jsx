import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css';
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import Header from './Components/Header/Header.jsx'
import Footer from './Components/Footer/Footer.jsx'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  <StrictMode>
    <div style={{ background: 'radial-gradient(37.83% 99.42% at 50% 50%, #003B67 0%, #001A33 100%)', minHeight: '100vh', width: '100vw' }}>
      <Header />
      <App />
      <Footer />
    </div>
  </StrictMode>
  </BrowserRouter>
)