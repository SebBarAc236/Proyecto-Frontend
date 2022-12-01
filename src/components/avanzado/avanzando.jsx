import Header from '../header_todos';
import { Link, Navigate, useNavigate } from "react-router-dom"
import './avanzado.css'
import nvidialogo from '../imagenes_logos/nvidialogo.png'
import ryzenlogo from '../imagenes_logos/ryzenlogo.jpg'
import gigabytelogo from '../imagenes_logos/gigabytelogo.png'
import aoruslogo from '../imagenes_logos/aoruslogo.png'
import corsairlogo from '../imagenes_logos/corsairlogo.png'
import pcgamer from '../imagenes_logos/pcgamer.png'
import intellogo from '../imagenes_logos/intellogo.png'
import msilogo from '../imagenes_logos/msilogo.png'
import kingstonlogo from '../imagenes_logos/kingston.jpg'
import windowslogo from '../imagenes_logos/windows.png'
import { useState } from 'react';
import { useEffect } from 'react';
import { RUTA_BACKEND } from '../../conf';

const Avanzado = () => {

    const [listadoComponentes, setListadoComponentes] = useState([])
    const [listadoPrecios, setlistadoPrecios] = useState([])
    const [listadoAvanzado, setListadoAvanzado] = useState([])
    const [listadoUsuarios, setListadoUsuarios] = useState([])
    const [listadoOrdenes, setListadoOrdenes] = useState([])

    const usuarioID = localStorage.getItem("USUARIO_ID")
    const token = localStorage.getItem("TOKEN")
    let monto = 0
    const navigate = useNavigate()

    async function httpObtenerComponente(componenteTipo = null) {
        const ruta = componenteTipo == null ?
            `${RUTA_BACKEND}/Producto?Categoria=Grafica` :
            `${RUTA_BACKEND}/Producto?Categoria=${componenteTipo}`;
        const resp = await fetch(ruta);
        const data = await resp.json();
        setListadoComponentes(data);
    }
    const httpObtenerOrden = async (usuarioID) => {
        const ruta = `${RUTA_BACKEND}/Orden?Usuario_ID=${usuarioID}`
        const resp = await fetch(ruta)
        const data = await resp.json()
        setListadoOrdenes(data)
    }
    const httpObtenerUsuarios = async (usuarioCorreo) => {
        const ruta = `${RUTA_BACKEND}/Usuario?Correo=${usuarioCorreo}`
        const resp = await fetch(ruta)
        const data = await resp.json()
        console.log(data)
        setListadoUsuarios(data)
    }
    const httpObtenerAvanzado = async (usuarioID) => {
        const ruta = usuarioID == null ? 
        `${RUTA_BACKEND}/Avanzada?Usuario_ID=${usuarioID}`:
        `${RUTA_BACKEND}/Avanzada?Usuario_ID=${usuarioID}`
        const resp = await fetch(ruta)
        const data = await resp.json()
        setListadoAvanzado(data)
        console.log(listadoAvanzado)
    }

    const anadirAvanzado = async (avanzada_id,nombre,precio,url,usuario_id) => {
        const data = {
            Avanzada_ID : avanzada_id,
            NombreProd : nombre,
            PrecioProd : precio,
            URL : url,
            Usuario_ID : usuario_id
        }
        const resp = await fetch(`${RUTA_BACKEND}/Avanzada`, {
            method : "POST",
            body : JSON.stringify(data),
            headers : {
                "Content-Type" : "application/json"
            }
        })
        const dataResp = await resp.json()
        
        httpObtenerAvanzado(usuario_id)
    }
    const anadirProducto = async (Nombre,Precio,URL) => {
        const data = {
            Nombre : Nombre,
            Precio : Precio,
            URL : URL
        }
        const resp = await fetch(`${RUTA_BACKEND}/Producto`, {
            method : "POST",
            body : JSON.stringify(data),
            headers : {
                "Content-Type" : "application/json"
            }
        })
        const dataResp = await resp.json()
        localStorage.setItem("idprod",dataResp.idprodcreado)
    }
    
    

    const vaciarAvanzada = async (avanzada_id) =>{
        const data = {
            Usuario_ID : usuarioID
        }
        await fetch(`${RUTA_BACKEND}/Avanzada?Usuario_ID=${usuarioID}`, {
            method : "DELETE",
            body : JSON.stringify(data),
            headers : {
                "Content-Type" : "application/json"
            }
        })
        httpObtenerAvanzado(usuarioID)
    }

    useEffect(() => {
        httpObtenerComponente()
        httpObtenerOrden(usuarioID)
        httpObtenerAvanzado(usuarioID)
        httpObtenerUsuarios(token)
        
    }, [usuarioID])
    const httpCrearOrden = async (token) => {
        const data = {
            Usuario_ID : listadoUsuarios[0].Usuario_ID
        }
        console.log("TEST::::");
        console.log(listadoUsuarios[0].Usuario_ID);
        const resp = await fetch(
            `${RUTA_BACKEND}/Orden`,
            {
                method : "POST",
                body : JSON.stringify(data),
                headers : {
                    "Content-Type" : "application/json",
                }
            }
        )
        console.log("wait")
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
        
        console.log("ORDEN ID");
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
    

    


    const onComponenteSelected = (componenteTipo) => {
        console.log("se selecciono el componente " + componenteTipo)
        httpObtenerComponente(componenteTipo)
        
    }

    return <div>
        <div className='row mx-auto' align="right"><Header/></div> 
        <div className='container mt-2' align="center" id="contenedorA">

            <div className='row'>
                <div className='col' align="left">
                    <div id="tituloavanzado">Build your PC!</div>
                </div>
                <div className='col'>
                    <button className='mx-auto btn btn-primary' id='botonblanco' onClick={()=>{listadoAvanzado.map((prods)=>{vaciarAvanzada(prods.Avanzada_ID)}); navigate("/")}}>Back</button>
                    &nbsp;
                    <button className='mx-auto btn btn-primary' id='botonrosado' onClick={()=>{
                        anadirProducto("PC Armada - Custom",monto,"https://www.tecnosmart.com.ec/wp-content/uploads/2021/08/h500p_argb_04_argb-imageleftorright-1-1024x976.png")
                        const idprod = localStorage.getItem("idprod")
                        httpAddCarrito(idprod)
                        listadoAvanzado.map((prods)=>{vaciarAvanzada(prods.Avanzada_ID)}); navigate("/Cart")
                    }}>Checkout</button>
                </div>

                <div className='row'>
                    <div className='col mt-3' id='columnaiz'>
                        <div className='row mb-3'>
                            <img src={pcgamer} alt="..." />
                        </div>
                        
                    </div>
                    <div className='col mt-3'>
                        <div className='row'>
                            <div className='' align="center">
                                <button onClick={() => { onComponenteSelected("Grafica") }} className='mx-auto btn btn-primary' id='botonrosado'>Graphics</button>
                                &nbsp;
                                <button onClick={() => { onComponenteSelected("Procesador") }} className='mx-auto btn btn-primary' id='botonrosado'>Processor</button>
                                &nbsp;
                                <button onClick={() => { onComponenteSelected("Memoria") }} className='mx-auto btn btn-primary' id='botonrosado'>Memory</button>
                                &nbsp;
                                <button onClick={() => { onComponenteSelected("Almacenamiento") }} className='mx-auto btn btn-primary' id='botonrosado'>Storage</button>
                                &nbsp;
                            </div>
                            <div className='mb-4'>
                                <button onClick={() => { onComponenteSelected("Cooler") }} className='mx-auto btn btn-primary' id='botonrosado'>Cooler</button>
                                &nbsp;
                                <button onClick={() => { onComponenteSelected("Windows") }} className='mx-auto btn btn-primary' id='botonrosado'>Windows</button>
                                &nbsp;
                                <button onClick={() => { onComponenteSelected("Power") }} className='mx-auto btn btn-primary' id='botonrosado'>Power Supply</button>
                            </div>
                        </div>
                        {
                            (()=>{
                                return listadoComponentes.map((componente) => {
                                    return <div className='row'>
                                    <div className="card mb-3">
                                        <div className="row g-0">
                                            <div className="col-md-3">
                                                <img src={componente.URL} className="img-fluid rounded-start mt-3 mx-auto" alt="..." />
                                                    
                                                
                                            </div>
                                            <div className="col-md-6">
                                                <div className="card-body">
                                                    <p className="card-text">{componente.Nombre}</p>
                                                    <p className="card-text"><small className="text-muted">{`${componente.Precio}$`}</small></p>
                                                </div>
                                            </div>
                                            <div className='col-md-3 mt-4'>
                                                <button className='mx-auto btn btn-primary' id='botonagregado' onClick={()=>{
                                                    const idnuevo = Math.floor(Math.random()*999999)
                                                    anadirAvanzado(idnuevo,componente.Nombre,componente.Precio,componente.URL,usuarioID)
                                                    httpObtenerAvanzado(usuarioID)
                                                }}>+</button>
                                                
                                            </div>
                                        </div>
                                    </div>
        
                                </div>
                                })
                            })()
                        }
                        
                        
                    </div>
                    <div className='col mt-3 ms-3'>
                    {
                            (()=>{
                                return listadoAvanzado.map((producto) => {
                                    listadoPrecios.push(producto.PrecioProd)
                                    return <div className='row'>
                                    <div className="card mb-3" id='listacompra'>
                                        <div className="row g-0">
                                            <div className="col-md-3">
                                           
                                             <img src={producto.URL} className="img-fluid rounded-start mx-auto" alt="..." />
                                                    
                                            </div>
                                            <div className="col-md-6">
                                                <div className="card-body">
                                                    <p className="card-text">{`${producto.NombreProd}`}</p>
                                                </div>
                                            </div>
                                            <div className="col-md-3">
                                                <div>&nbsp;</div>
                                                {`${producto.PrecioProd}$`}
                                            </div>
                                            {()=>{}}
                                        </div>
                                    </div>
                                    {(()=>{monto = monto + producto.PrecioProd})()}
                                </div>
                                })
                                
                            })()
                        }
                        
                    </div>
                    {(()=>{return <div className='container'><div className='col-6'><div className='row'>
                            <div className='container rounded-5' id='resumen'>
                                <div>Components price</div>
                                <div>{`${monto}$`}</div>
                                <div>Build fee</div>
                                <div>$99</div>
                            </div>
                        </div></div></div>})()}
                </div>
            </div>
        </div>
    </div>
}

export default Avanzado