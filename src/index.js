import { HashRouter, Routes, Route } from 'react-router-dom';
import './index.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import Home from './components/homepage';
import reportWebVitals from './reportWebVitals';
import InfoProducto from './components/compras/info_producto';
import Cart from './components/shopping_cart';
import Login from './components/INICIO/login';
import Register from './components/INICIO/register';
import Perfil from './components/Perfil/perfil';
import Avanzado from './components/avanzado/avanzando';
import Olvidada from './components/INICIO/contraolvidada';
import OrderHistory from './components/Perfil/orderhistory';
import Principiante from './components/PRINCIPIANTE/principiante';
import Pantallacompra from './components/PANTALLA-COMPRA/pantallacompra';
import Reseñas from './components/RESEÑASYT/RESEÑAS';
import Reviews from './components/USER-REVIEWS/reviews';
import Ranking from './components/ranking';
import Soporte from './components/soporte';
import Respuesta from './components/Respuesta';
import Recomendado from './components/Recomendado';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <HashRouter>
        <Routes>
          <Route path="/Recomendado" element={ <Recomendado/> } />
          <Route path="/Respuesta" element={ <Respuesta/> } />
          <Route path="/Soporte" element={ <Soporte/> } />
          <Route path="/Ranking" element={ <Ranking/> } />
          <Route path="/Principiante" element={ <Principiante/> } />
          <Route path="/Resenas" element={ <Reseñas/> } />
          <Route path="/Reviews" element={ <Reviews/> } />
          <Route path="/Pantallacompra" element={ <Pantallacompra/> } />
          <Route path="/orderHistory" element={ <OrderHistory/> } />
          <Route path="/Olvidada" element={ <Olvidada/> } />
          <Route path="/Avanzado" element={ <Avanzado/> } />
          <Route path="/Perfil" element={ <Perfil/> } />
          <Route path="/Register" element={ <Register/> } />
          <Route path="/Login" element={ <Login/> } />
          <Route path="/" element={ <Home/> } /> 
          <Route path="/Producto/:productId" element={ <InfoProducto/> } /> 
          <Route path="/Cart" element={ <Cart/> } /> 
        </Routes>
    </HashRouter>
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
