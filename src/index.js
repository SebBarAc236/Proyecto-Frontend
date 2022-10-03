import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Home from './components/homepage';
import Header from './components/header_todos';
import reportWebVitals from './reportWebVitals';
import InfoProducto from './components/compras/info_producto';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Cart from './components/shopping_cart';
import Login from './components/INICIO/login';
import Register from './components/INICIO/register';
import Perfil from './components/Perfil/perfil';
import Avanzado from './components/avanzando';
import Olvidada from './components/INICIO/contraolvidada';
import OrderHistory from './components/Perfil/orderhistory';
import Principiante from './components/PRINCIPIANTE/principiante';
import Pantallacompra from './components/PANTALLA-COMPRA/pantallacompra';
import Reseñas from './components/RESEÑASYT/RESEÑAS';
import Reviews from './components/USER-REVIEWS/reviews';
import Ranking from './components/ranking';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
        <Routes>
          <Route path="/Ranking" element={ <Ranking/> } />
          <Route path="/Principiante" element={ <Principiante/> } />
          <Route path="/Reseñas" element={ <Reseñas/> } />
          <Route path="/Reviews" element={ <Reviews/> } />
          <Route path="/Pantallacompra" element={ <Pantallacompra/> } />
          <Route path="/orderHistory" element={ <OrderHistory/> } />
          <Route path="/Olvidada" element={ <Olvidada/> } />
          <Route path="/Avanzado" element={ <Avanzado/> } />
          <Route path="/Perfil" element={ <Perfil/> } />
          <Route path="/Register" element={ <Register/> } />
          <Route path="/Login" element={ <Login/> } />
          <Route path="/" element={ <Home/> } /> 
          <Route path="/Producto" element={ <InfoProducto/> } /> 
          <Route path="/Cart" element={ <Cart/> } /> 
        </Routes>
    </BrowserRouter>
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
