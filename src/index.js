import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import CartContext from './store/Context';
import CartContextProvider from './store/Context';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
  <CartContextProvider>
    <App />
    </CartContextProvider>
  </BrowserRouter>
);
