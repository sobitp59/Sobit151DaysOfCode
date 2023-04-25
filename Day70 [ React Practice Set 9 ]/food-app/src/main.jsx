import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App.jsx';
import { FoodContextProvider } from './contexts/FoodContext.jsx';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <FoodContextProvider>
    <Router>
      <App />
    </Router>
    </FoodContextProvider>
  </React.StrictMode>,
)
