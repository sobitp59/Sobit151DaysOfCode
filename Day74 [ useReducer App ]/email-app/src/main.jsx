import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App.jsx'
import EmailContextProvider from './contexts/EmailContext.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <EmailContextProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
    </EmailContextProvider>
  </React.StrictMode>,
)
