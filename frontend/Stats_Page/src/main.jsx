import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Stats from './Stats.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
    <Stats />
  </React.StrictMode>,
)
