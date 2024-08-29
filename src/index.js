import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import HeaderLeft from './components/header';
import Cards from './components/cards';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Cards />
    <HeaderLeft />
    
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

