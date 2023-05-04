import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App.jsx';
import './index.css';
import ProductContextProvider from './userreducer_usecontext/ProductContext.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ProductContextProvider>
    <BrowserRouter>
     <App />
    </BrowserRouter>
    </ProductContextProvider>
  </React.StrictMode>,
)
