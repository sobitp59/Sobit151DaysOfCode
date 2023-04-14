import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router } from 'react-router-dom'
import App from './App'
import { CartContexProvidrer } from './contexts/CartContext'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>

    <Router>
      <CartContexProvidrer >  
        <App />
      </CartContexProvidrer>
    </Router>
    </React.StrictMode>,
)
