import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';

import { BrowserRouter as Router } from 'react-router-dom';
import EmailContextProvider from './contexts-and-reducers/EmailContext.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <EmailContextProvider>
      <Router>
        <App />
      </Router>
    </EmailContextProvider>
  </React.StrictMode>,
)
