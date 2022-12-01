import "./info_producto.css";
import { useParams } from "react-router-dom"
import Header from '../header_todos';
import { useState, useEffect } from "react";
import { RUTA_BACKEND } from '../../conf';

const InfoProducto = () => 
{
    const token = localStorage.getItem("TOKEN")
    const [listadoProductos, setListadoProductos] = useState([])
    const [listadoUsuarios, setListadoUsuarios] = useState([]);
    const [carro, setCarro] = useState([])
    const { productId } = useParams()
    const id = productId;
    

    const httpObtenerProductos = async () => {
        const resp = await fetch(`${RUTA_BACKEND}/Producto`)
        const data = await resp.json()
        console.log(data)
        setListadoProductos(data)
    }

    const httpObtenerCarrito = async () => {
        const resp = await fetch(`${RUTA_BACKEND}/Orden_producto`)
        const data = await resp.json()
        console.log(data)
        setCarro(data)
    }

    const httpObtenerUsuarios = async (usuarioCorreo) => {
        const ruta = `${RUTA_BACKEND}/Usuario?Correo=${usuarioCorreo}`
        const resp = await fetch(ruta)
        const data = await resp.json()
        console.log(data)
        setListadoUsuarios(data)
    }

    
    useEffect(() => {
        httpObtenerProductos();
        httpObtenerCarrito();
        httpObtenerUsuarios(token);
    }, [])

    const [producto] = listadoProductos.filter(producto => producto.Producto_ID == id)
    const httpCrearOrden = async (token) => {
        console.log(listadoUsuarios[0])
        const data = {
            Usuario_ID : listadoUsuarios[0].Usuario_ID
        }
        
        const resp = await fetch(
            `${RUTA_BACKEND}/Orden`,
            {
                method : "POST",
                body : JSON.stringify(data),
                headers : {
                    "Content-Type" : "application/json",
                    "Acces-Control-Allow-Origin" : "*"
                }
            }
        )
        const dataResp = await resp.json()

        if (dataResp.error !== "") {
            // Hubo un error
            console.error(dataResp.error)
        }
        console.log("Orden creararara add");
        console.log(dataResp);
        return dataResp;
    }
    const httpAddCarrito = async (producto_id) => {
        let ordenIDs;
        try
        {
            ordenIDs = await httpCrearOrden(token);
        }
        catch(e)
        {
            console.log(e);
        }
        
        console.log(ordenIDs[0]);
        const data = {
            Orden_ID: ordenIDs[0].Orden_ID,
            Producto_ID : producto_id,
        }

        const resp = await fetch(
            `${RUTA_BACKEND}/Carrito`,
            {
                method : "POST",
                body : JSON.stringify(data),
                headers : {
                    "Content-Type" : "application/json",
                    "Acces-Control-Allow-Origin" : "*"
                }
            }
        )
        const dataResp = await resp.json()

        if (dataResp.error !== "") {
            // Hubo un error
            console.error(dataResp.error)
        }
        console.log("Carro add");
        console.log(data);
        httpObtenerCarrito(producto_id)

    }

    
    return (
        <div>
            <Header/>
            {producto ? <div className="container">
                <div id="data" className="d-flex justify-content-around flex-md-row flex-column">
                    <div id="fond_inv" className="col rounded row mt-5">
                        <div>
                            <img id="inv" className="rounded img-fluid" src={producto.URL} alt="" />
                        </div>
                        <span id="sp-bot">
                            <button type="button" id="addCart" className="btn m-3" onClick={() => 
                                {
                                    console.log("Add car car " + producto.Producto_ID);
                                    httpAddCarrito(producto.Producto_ID)
                                    alert("Se ha añadido el producto a tu carrito de compras");
                                }}>
                                Add to the cart
                            </button>
                        </span>
                    </div>
                    <div id="gato" className="col mt-5 rounded">
                        <h1 className="text-white">{producto.Nombre}</h1>
                        <b className="text-white">${producto.Precio}</b>
                        <p className="text-white"> <span className="text-success">Shipping</span> calculated at checkout</p>
                        <table id="func" className="table table-bordered">
                            <tbody>
                                <tr>
                                    <th scope="row"> Descripcion </th>
                                    <td>{producto.Descripcion}</td>
                                </tr>
                                <tr>
                                    <th scope="row"> Marca </th>
                                    <td>{producto.Marca}</td>
                                </tr>
                                <tr>
                                    <th scope="row"> Categoria </th>
                                    <td>{producto.Categoria}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>: <div>No hay producto</div>}
        </div> 
        
    )
}

export default InfoProducto;    