import Header from '../header_todos';
import { Link } from "react-router-dom"
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
import { RUTA_BACKEND} from '../../conf';

const Avanzado = () => {

    const [listadoComponentes, setListadoComponentes] = useState([])
    const [listadoProductos, setlistadoProductos] = useState([])
    const [listadoAvanzado, setListadoAvanzado] = useState([])
    const montoTotal = 0
    const usuarioID = localStorage.getItem("USUARIO_ID")



    const httpObtenerComponente = async (componenteTipo = null) => {
        const ruta = componenteTipo == null ?
            `${RUTA_BACKEND}/Producto?Categoria=Grafica`:
            `${RUTA_BACKEND}/Producto?Categoria=${componenteTipo}`
        const resp = await fetch(ruta)
        const data = await resp.json()
        setListadoComponentes(data)
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
        if(dataResp.error !== ""){
            console.error(dataResp.error)

        }else{

        }
        httpObtenerAvanzado(usuario_id)
    }

    const vaciarAvanzada = async (avanzada_id) =>{
        console.log(`se eliminaron los productos ${avanzada_id}`)
    }

    useEffect(() => {
        httpObtenerComponente()
        httpObtenerAvanzado(usuarioID)
    }, [usuarioID])
    

    


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
                    <Link to={"/"}><button className='mx-auto btn btn-primary' id='botonblanco' onClick={()=>{listadoAvanzado.map((prods)=>{vaciarAvanzada(prods.Avanzada_ID)})}}>Back</button></Link>
                    &nbsp;
                    <Link to={"/Pantallacompra"}><button className='mx-auto btn btn-primary' id='botonrosado'>Checkout</button></Link>
                </div>

                <div className='row'>
                    <div className='col mt-3' id='columnaiz'>
                        <div className='row mb-3'>
                            <img src={pcgamer} alt="..." />
                        </div>
                        <div className='row'>
                            <div className='container rounded-5' id='resumen'>
                                <div>Components price</div>
                                <div>{montoTotal}</div>
                                <div>Build fee</div>
                                <div>$99</div>
                            </div>
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
                                                }}>+</button>
                                                {()=>{montoTotal = montoTotal + componente.Precio
                                                console.log(montoTotal)}}
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

                                        </div>
                                    </div>

                                </div>
                                
                                })
                            })()
                        }
                    </div>

                </div>
            </div>
        </div>
    </div>
}

export default Avanzado