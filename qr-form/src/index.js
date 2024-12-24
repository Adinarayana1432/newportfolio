import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom'; // Import BrowserRouter
import App from './App'; // or your main component (Home.js if that's your root component)

ReactDOM.render(
  <BrowserRouter> {/* Wrap your entire app with BrowserRouter */}
    <App />
  </BrowserRouter>,
  document.getElementById('root')
);
