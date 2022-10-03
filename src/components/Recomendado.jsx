import Header from './header_todos';
import { Link } from "react-router-dom"
import './Recomendado.css'
import nvidialogo from './imagenes/nvidialogo.png'
import ryzenlogo from './imagenes/ryzenlogo.jpg'
import aoruslogo from './imagenes/gigabytelogo.png'
import corsairlogo from './imagenes/corsairlogo.png'
import pcgamer from './imagenes/pcgamer.png'

const Recomendado = () => {
    return <div>
        <div className='row mx-auto' align="right"><Header/></div>
        
        <div className='container mt-2'  align="center" id="contenedorA"> 
            
        <div className='row'> 
            <div className='col' align="left">
                <div id="tituloavanzado">Your optimized PC!</div>
            </div>
            <div className='col'>
                <Link to={"/Principiante"}><button className='mx-auto btn btn-primary' id='botonblanco'>Back</button></Link>
                &nbsp;
                <Link to={"/Pantallacompra"}><button className='mx-auto btn btn-primary' id='botonrosado'>Checkout</button></Link>
            </div>
        <div id='tituloavanzado' className='row justify-content-center ms-5'>
            Components
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

export default Recomendado;