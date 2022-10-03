import Header from '../header_todos';
import { Link } from "react-router-dom"
import './avanzado.css'
import nvidialogo from '../imagenes/nvidialogo.png'
import ryzenlogo from '../imagenes/ryzenlogo.jpg'
import aoruslogo from '../imagenes/gigabytelogo.png'
import corsairlogo from '../imagenes/corsairlogo.png'
import pcgamer from '../imagenes/pcgamer.png'
import coolermaster from '../imagen/master_liquid.png'
const Coolera = () => {
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
                <Link to={"/Avanzado"}><button className='mx-auto btn btn-primary' id='botonrosado'>Graphics</button></Link>
                &nbsp;
                <Link to={"/Processora"}><button className='mx-auto btn btn-primary' id='botonrosado'>Processor</button></Link>
                &nbsp;
                <Link to={"/Memoria"}><button className='mx-auto btn btn-primary' id='botonrosado'>Memory</button></Link>
                &nbsp;
                <Link to={"/Storagea"}><button className='mx-auto btn btn-primary' id='botonrosado'>Storage</button></Link>
                &nbsp;
            </div>
        </div>
        <div className='row'>
            <div className='col'>
                <Link to={"/Coolera"}><button className='mx-auto btn btn-primary' id='botonrosado'>Cooler</button></Link>
                &nbsp;
                <Link to={"/Windowsa"}><button className='mx-auto btn btn-primary' id='botonrosado'>Windows</button></Link>
                &nbsp;
                <Link to={"/Powera"}><button className='mx-auto btn btn-primary' id='botonrosado'>Power Supply</button></Link>
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
                    <img src={coolermaster} class="img-fluid rounded-start mt-3 mx-auto" alt="..."/>
                </div>
                <div class="col-md-6">
                <div class="card-body">
                    <p class="card-text">COOLER MASTER LIQUID 256X</p>
                    <p class="card-text"><small class="text-muted">300$</small></p>
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
                    <img src={coolermaster} class="img-fluid rounded-start mt-3 mx-auto" alt="..."/>
                </div>
                <div class="col-md-6">
                <div class="card-body">
                    <p class="card-text">COOLER MASTER LIQUID 360X</p>
                    <p class="card-text"><small class="text-muted">200$</small></p>
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
                    <img src={coolermaster} class="img-fluid rounded-start mt-3 mx-auto" alt="..."/>
                </div>
                <div class="col-md-6">
                <div class="card-body">
                    <p class="card-text">COOLER MASTER LIQUID 200X</p>
                    <p class="card-text"><small class="text-muted">100$</small></p>
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
                    <img src={coolermaster} class="img-fluid rounded-start mt-3 mx-auto" alt="..."/>
                </div>
                <div class="col-md-6">
                <div class="card-body">
                    <p class="card-text">COOLER MASTER LIQUID 350X</p>
                    <p class="card-text"><small class="text-muted">350$</small></p>
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

export default Coolera;