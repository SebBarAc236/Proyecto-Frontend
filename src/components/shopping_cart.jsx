import "./shopping_cart.css"
import Header from './header_todos';
import { Link } from "react-router-dom"
import { RUTA_BACKEND } from '../conf';
import { useState, useEffect } from "react";

const Cart = () => 
{
    const token = localStorage.getItem("TOKEN")
    const [carro, setCarro] = useState([])
    const [orden, setOrden] = useState([])
    const [listadoUsuarios, setListadoUsuarios] = useState([]);

    
    const httpObtenerOrden = async () => {
        console.log("orden orden!");
        let usuario;
        try{
            usuario = await httpObtenerUsuarios(token);
        }
        catch(e)
        {
            console.log(e)
        }
        console.log(usuario)
        const resp = await fetch(`${RUTA_BACKEND}/Orden?Usuario_ID=${usuario[0].Usuario_ID}`)
        const data = await resp.json()
        console.log("Ordenoirdenasdasd carrito");
        console.log(data)
        return data;
    }

    const httpObtenerUsuarios = async (usuarioCorreo) => {
        const ruta = `${RUTA_BACKEND}/Usuario?Correo=${usuarioCorreo}`
        const resp = await fetch(ruta)
        const data = await resp.json()
        console.log(data)
        return data;
    }

    const httpObtenerCarrito = async () => {
        let ordi;
        ordi = await httpObtenerOrden();
        console.log(ordi);
        const resp = await fetch(`${RUTA_BACKEND}/Orden_producto?Orden_ID=${ordi[0].Orden_ID}`)
        const data = await resp.json()
        console.log("Carrito carrito");
        console.log(data)
        setCarro(data)
    }

    useEffect(() => {
        httpObtenerCarrito();
    }, [])

    return <div> 
        <Header/>
        <div id="all">
        <div className="container row">
            <p className="col-1"></p>
            <h3 className="col-5 inline">Shopping cart items</h3>
            <p className="col-2"></p>
            
           <button className="bott text-white  btn col-2 d-flex align-items-center justify-content-center inline">
                <svg className="inline-block" style={{height: 20, width: 20}} viewBox="0 0 24 24">
                    <path fill="currentColor" d="M17,18C15.89,18 15,18.89 15,20A2,2 0 0,0 17,22A2,2 0 0,0 19,20C19,18.89 18.1,18 17,18M1,2V4H3L6.6,11.59L5.24,14.04C5.09,14.32 5,14.65 5,15A2,2 0 0,0 7,17H19V15H7.42A0.25,0.25 0 0,1 7.17,14.75C7.17,14.7 7.18,14.66 7.2,14.63L8.1,13H15.55C16.3,13 16.96,12.58 17.3,11.97L20.88,5.5C20.95,5.34 21,5.17 21,5A1,1 0 0,0 20,4H5.21L4.27,2M7,18C5.89,18 5,18.89 5,20A2,2 0 0,0 7,22A2,2 0 0,0 9,20C9,18.89 8.1,18 7,18Z" />
                </svg>
                <Link to={"/Pantallacompra"} className="inline-block ms-1 text-white" ><span className="tx-white" style={{ textDecoration: 'none' }}>Checkout</span></Link>
            </button>
        </div>

        {carro.map((producto) => 
            <div className="items bg-white rounded p-2 my-3 w-50" key={producto.Orden_Producto_ID}>
            <div className="d-flex align-items-center align-middle">
                <img className="ima me-3" src={producto.Producto.URL} alt="Keyboard"/>
                <p className="btext clearfix desc p-2">{producto.Producto.Nombre}</p>
                <p className="btext price p-2 ms-5 me-2" >${producto.Producto.Precio}</p>
                <button className="btn ms-5 mb-2 d-flex align-items-center justify-content-center inline">
                    <svg className="inline-block" style={{height: 24, width: 24}} viewBox="0 0 24 24">
                        <path fill="currentColor" d="M19,4H15.5L14.5,3H9.5L8.5,4H5V6H19M6,19A2,2 0 0,0 8,21H16A2,2 0 0,0 18,19V7H6V19Z" />
                    </svg>
                </button>
            </div>                
        </div>
        )}               
        </div>
    </div>
}

export default Cart;

