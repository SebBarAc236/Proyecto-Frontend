import Header from './header_todos';
import { Link } from "react-router-dom"
import './avanzado.css'
import nvidialogo from './imagenes/nvidialogo.png'
import ryzenlogo from './imagenes/ryzenlogo.jpg'
import aoruslogo from './imagenes/gigabytelogo.png'
import corsairlogo from './imagenes/corsairlogo.png'
import pcgamer from './imagenes/pcgamer.png'

const Avanzado = () => {
    return <div>
        <div className='row mx-auto' align="right"><Header/></div>
        
        <div className='container mt-2'  align="center" id="contenedorA"> 
            
        <div className='row'> 
            <div className='col' align="left">
                <div id="tituloavanzado">Build your PC!</div>
            </div>
            <div className='col'>
                <Link to={"/"}><button className='mx-auto btn btn-primary' id='botonblanco'>Back</button></Link>
                &nbsp;
                <Link to={"/Pantallacompra"}><button className='mx-auto btn btn-primary' id='botonrosado'>Checkout</button></Link>
            </div>
        <div className='row justify-content-center'>
            <div className='col mb-1' align="center">
                <button className='mx-auto btn btn-primary' id='botonrosado'>Graphics</button>
                &nbsp;
                <button className='mx-auto btn btn-primary' id='botonrosado'>Processor</button>
                &nbsp;
                <button className='mx-auto btn btn-primary' id='botonrosado'>Memory</button>
                &nbsp;
                <button className='mx-auto btn btn-primary' id='botonrosado'>Storage</button>
                &nbsp;
            </div>
        </div>
        <div className='row'>
            <div className='col'>
                <button className='mx-auto btn btn-primary' id='botonrosado'>Cooler</button>
                &nbsp;
                <button className='mx-auto btn btn-primary' id='botonrosado'>Windows</button>
                &nbsp;
                <button className='mx-auto btn btn-primary' id='botonrosado'>Power Supply</button>
            </div>
        </div>
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
            <div class="card mb-3">
            <div class="row g-0">
                <div class="col-md-3">
                    <img src={nvidialogo} class="img-fluid rounded-start mt-3 mx-auto" alt="..."/>
                </div>
                <div class="col-md-6">
                <div class="card-body">
                    <p class="card-text">NVIDIA RTX 3090</p>
                    <p class="card-text"><small class="text-muted">900$</small></p>
                </div>
                </div>
                <div class='col-md-3 mt-4'>
                    <button className='mx-auto btn btn-primary' id='botonagregado'>+</button>
                </div>
            </div>
            </div>
            </div>
            <div className='row'>
            <div class="card mb-3">
            <div class="row g-0">
                <div class="col-md-3">
                    <img src={nvidialogo} class="img-fluid rounded-start mt-3 mx-auto" alt="..."/>
                </div>
                <div class="col-md-6">
                <div class="card-body">
                    <p class="card-text">NVIDIA RTX 3080</p>
                    <p class="card-text"><small class="text-muted">800$</small></p>
                </div>
                </div>
                <div class='col-md-3 mt-4'>
                    <button className='mx-auto btn btn-primary' id='botonagregado'>+</button>
                </div>
            </div>
            </div>
            </div>
            <div className='row'>
            <div class="card mb-3">
            <div class="row g-0">
                <div class="col-md-3">
                    <img src={nvidialogo} class="img-fluid rounded-start mt-3 mx-auto" alt="..."/>
                </div>
                <div class="col-md-6">
                <div class="card-body">
                    <p class="card-text">NVIDIA RTX 3070</p>
                    <p class="card-text"><small class="text-muted">700$</small></p>
                </div>
                </div>
                <div class='col-md-3 mt-4'>
                    <button className='mx-auto btn btn-primary' id='botonagregado'>+</button>
                </div>
            </div>
            </div>
            </div>
            <div className='row'>
            <div class="card mb-3">
            <div class="row g-0">
                <div class="col-md-3">
                    <img src={nvidialogo} class="img-fluid rounded-start mt-3 mx-auto" alt="..."/>
                </div>
                <div class="col-md-6">
                <div class="card-body">
                    <p class="card-text">NVIDIA RTX 3060</p>
                    <p class="card-text"><small class="text-muted">600$</small></p>
                </div>
                </div>
                <div class='col-md-3 mt-4'>
                    <button className='mx-auto btn btn-primary' id='botonagregado'>+</button>
                </div>
            </div>
            </div>
            </div>
        </div>
        <div className='col mt-3 ms-3'>
            <div className='row'>
                <div class="card mb-3" id='listacompra'>
                <div class="row g-0">
                    <div class="col-md-3">
                        <img src={ryzenlogo} class="img-fluid rounded-start mt-2 mb-2" alt="..."/>
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
                        <img src={corsairlogo} class="img-fluid rounded-start mt-2 mb-2" alt="..."/>
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
                        <img src={aoruslogo} class="img-fluid rounded-start mt-2 mb-2" alt="..."/>
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
}

export default Avanzado;