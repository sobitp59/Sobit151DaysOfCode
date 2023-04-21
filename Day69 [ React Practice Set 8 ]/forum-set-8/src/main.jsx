import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App.jsx';
import { ForumContextProvider } from './forumContext.jsx';
import './index.css';
  
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ForumContextProvider>

    <Router>
      <App />
    </Router>
    </ForumContextProvider>
  </React.StrictMode>,
)
