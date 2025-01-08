import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  // React Strict Mode da imamo checkove za potencijalne probleme, legacy code itd
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
