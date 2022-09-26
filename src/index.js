import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Home from './components/header_todos';
import Header from './components/header_todos';
import reportWebVitals from './reportWebVitals';
import InfoProducto from './components/compras/info_producto';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Header/>
    <InfoProducto/>
  </React.StrictMode>
);

/*
<Home />
    <Header/>
 */


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
