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
    const [listadoUsuarios, setListadoUsuarios] = useState([]);
    const [listadoComponentes, setListadoComponentes] = useState([])
    const [listadoProductos, setlistadoProductos] = useState([])
    const [listadoPiezas, setListadoPiezas] = useState([])
    const [listadoCarrito, setListadoCarrito] = useState([])
    const [listadoOrdenes, setListadoOrdenes] = useState([])
    const token = localStorage.getItem("TOKEN")
    const usuarioID = localStorage.getItem("USUARIO_ID")


    const httpObtenerUsuarios = async (usuarioCorreo) => {
        const ruta = `${RUTA_BACKEND}/Usuario?Correo=${usuarioCorreo}`
        const resp = await fetch(ruta)
        const data = await resp.json()
        setListadoUsuarios(data)
    }
    const httpObtenerComponente = async (componenteTipo = null) => {
        const ruta = componenteTipo == null ?
            `${RUTA_BACKEND}/Producto?Categoria=Grafica`:
            `${RUTA_BACKEND}/Producto?Categoria=${componenteTipo}`
        const resp = await fetch(ruta)
        const data = await resp.json()
        setListadoComponentes(data)
    }
    
    const httpObtenerTodo = async () => {
        const ruta = `${RUTA_BACKEND}/Producto`
        const resp = await fetch(ruta)
        const data = await resp.json()
        setlistadoProductos(data)
    }

    const ordenesUsuario = async () => {
        const ruta = `${RUTA_BACKEND}/Orden?Usuario_ID=${usuarioID}`
        const resp = await fetch(ruta)
        const data = await resp.json()
        setListadoOrdenes(data)
        console.log(listadoOrdenes)
    }
    const ordenesProductos = async () => {
        const ordenID = listadoOrdenes[0]
        const ruta = `${RUTA_BACKEND}/Orden_producto?Orden_ID=${ordenID}`
        const resp = await fetch(ruta)
        const data = await resp.json()
        setListadoPiezas(data)
        console.log(data)
        console.log(listadoOrdenes[0])
    }

    useEffect(() => {
        httpObtenerComponente()
        httpObtenerUsuarios(token)
        ordenesUsuario()
        ordenesProductos()
        httpObtenerTodo()
    }, [])

    


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
                    <Link to={"/"}><button className='mx-auto btn btn-primary' id='botonblanco'>Back</button></Link>
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
                                <div>{1800}</div>
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
                                    <div class="card mb-3">
                                        <div class="row g-0">
                                            <div class="col-md-3">
                                                {(()=>{
                                                    if(componente.Marca === "NVIDIA"){
                                                        return <img src={nvidialogo} class="img-fluid rounded-start mt-3 mx-auto" alt="..." />
                                                    }else if(componente.Marca === "AMD"){
                                                        return <img src={ryzenlogo} class="img-fluid rounded-start mt-3 mx-auto" alt="..." />
                                                    }else if(componente.Marca === "AORUS"){
                                                        return <img src={aoruslogo} class="img-fluid rounded-start mt-3 mx-auto" alt="..." />
                                                    }else if(componente.Marca === "CORSAIR"){
                                                        return <img src={corsairlogo} class="img-fluid rounded-start mt-3 mx-auto" alt="..." />
                                                    }else if(componente.Marca === "GIGABYTE"){
                                                        return <img src={gigabytelogo} class="img-fluid rounded-start mt-3 mx-auto" alt="..." />
                                                    }else if(componente.Marca === "KINGSTON"){
                                                        return <img src={kingstonlogo} class="img-fluid rounded-start mt-3 mx-auto" alt="..." />
                                                    }else if(componente.Marca === "INTEL"){
                                                        return <img src={intellogo} class="img-fluid rounded-start mt-3 mx-auto" alt="..." />
                                                    }else if(componente.Marca === "MSI"){
                                                        return <img src={msilogo} class="img-fluid rounded-start mt-3 mx-auto" alt="..." />
                                                    }else if(componente.Marca === "WINDOWS"){
                                                        return <img src={windowslogo} class="img-fluid rounded-start mt-3 mx-auto" alt="..." />
                                                    }
                                                    console.log(listadoOrdenes)
                                                })()}
                                                
                                            </div>
                                            <div class="col-md-6">
                                                <div class="card-body">
                                                    <p class="card-text">{componente.Nombre}</p>
                                                    <p class="card-text"><small class="text-muted">{`${componente.Precio}$`}</small></p>
                                                </div>
                                            </div>
                                            <div class='col-md-3 mt-4'>
                                                <button className='mx-auto btn btn-primary' id='botonagregado'>+</button>
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
                                return listadoProductos.map((producto) => {
                                    return <div className='row'>
                                    <div class="card mb-3" id='listacompra'>
                                        <div class="row g-0">
                                            <div class="col-md-3">
                                            {(()=>{
                                                    if(producto.Marca === "NVIDIA"){
                                                        return <img src={nvidialogo} class="img-fluid rounded-start mx-auto" alt="..." />
                                                    }else if(producto.Marca === "AMD"){
                                                        return <img src={ryzenlogo} class="img-fluid rounded-start mx-auto" alt="..." />
                                                    }else if(producto.Marca === "AORUS"){
                                                        return <img src={aoruslogo} class="img-fluid rounded-start mx-auto" alt="..." />
                                                    }else if(producto.Marca === "CORSAIR"){
                                                        return <img src={corsairlogo} class="img-fluid rounded-start mt-2 mx-auto" alt="..." />
                                                    }else if(producto.Marca === "GIGABYTE"){
                                                        return <img src={gigabytelogo} class="img-fluid rounded-start mx-auto" alt="..." />
                                                    }else if(producto.Marca === "KINGSTON"){
                                                        return <img src={kingstonlogo} class="img-fluid rounded-start mx-auto" alt="..." />
                                                    }else if(producto.Marca === "INTEL"){
                                                        return <img src={intellogo} class="img-fluid rounded-start mx-auto" alt="..." />
                                                    }else if(producto.Marca === "MSI"){
                                                        return <img src={msilogo} class="img-fluid rounded-start mt-2 mx-auto" alt="..." />
                                                    }else if(producto.Marca === "WINDOWS"){
                                                        return <img src={windowslogo} class="img-fluid rounded-start mx-auto" alt="..." />
                                                    }
                                                })()}
                                            </div>
                                            <div class="col-md-6">
                                                <div class="card-body">
                                                    <p class="card-text">{`${producto.Nombre}`}</p>
                                                </div>
                                            </div>
                                            <div class="col-md-3">
                                                <div>&nbsp;</div>
                                                {`${producto.Precio}$`}
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