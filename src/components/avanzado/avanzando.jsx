import Header from '../header_todos';
import { Link } from "react-router-dom"
import './avanzado.css'
import nvidialogo from '../imagenes/nvidialogo.png'
import ryzenlogo from '../imagenes/ryzenlogo.jpg'
import aoruslogo from '../imagenes/gigabytelogo.png'
import corsairlogo from '../imagenes/corsairlogo.png'
import pcgamer from '../imagenes/pcgamer.png'
import { useState } from 'react';
import { useEffect } from 'react';

const Avanzado = () => {
    const [listadoComponentes, setListadoComponentes] = useState([])
    const httpObtenerComponente = async (componenteTipo = null) => {
        const ruta = componenteTipo == null ?
            "http://localhost:4444/Producto?Categoria=Grafica" :
            `http://localhost:4444/Producto?Categoria=${componenteTipo}`
        const resp = await fetch(ruta)
        const data = await resp.json()
        console.log(data)
        setListadoComponentes(data)
    }

    useEffect(() => {
        httpObtenerComponente()
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
                                <div>$1899</div>
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
                                                <img src={nvidialogo} class="img-fluid rounded-start mt-3 mx-auto" alt="..." />
                                            </div>
                                            <div class="col-md-6">
                                                <div class="card-body">
                                                    <p class="card-text">{componente.Nombre}</p>
                                                    <p class="card-text"><small class="text-muted">{componente.Precio}</small></p>
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
                        <div className='row'>
                            <div class="card mb-3" id='listacompra'>
                                <div class="row g-0">
                                    <div class="col-md-3">
                                        <img src={ryzenlogo} class="img-fluid rounded-start mt-2 mb-2" alt="..." />
                                    </div>
                                    <div class="col-md-6">
                                        <div class="card-body">
                                            <p class="card-text">AMD RYZEN 3600X</p>
                                        </div>
                                    </div>
                                    <div class="col-md-3">
                                        <div>&nbsp;</div>
                                        350$
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='row'>
                            <div class="card mb-3" id='listacompra'>
                                <div class="row g-0">
                                    <div class="col-md-3">
                                        <img src={corsairlogo} class="img-fluid rounded-start mt-2 mb-2" alt="..." />
                                    </div>
                                    <div class="col-md-6">
                                        <div class="card-body">
                                            <p class="card-text">CORSAIR VENGANCE 16GB RAM 8X2</p>
                                        </div>
                                    </div>
                                    <div class="col-md-3">
                                        <div>&nbsp;</div>
                                        250$
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='row'>
                            <div class="card mb-3" id='listacompra'>
                                <div class="row g-0">
                                    <div class="col-md-3">
                                        <img src={aoruslogo} class="img-fluid rounded-start mt-2 mb-2" alt="..." />
                                    </div>
                                    <div class="col-md-6">
                                        <div class="card-body">
                                            <p class="card-text">GIGABYTE POWER SUPPLY 80PLUS GOLD</p>
                                        </div>
                                    </div>
                                    <div class="col-md-3">
                                        <div>&nbsp;</div>
                                        200$
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    </div>
}

export default Avanzado