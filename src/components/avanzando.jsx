import Header from './header_todos';
import { Link } from "react-router-dom"
import './avanzado.css'
import nvidialogo from './imagenes/nvidialogo.png'
import pcgamer from './imagenes/pcgamer.png'

const Avanzado = () => {
    return <div>
        <div className='row' align="right"><Header/></div>
        
        <div className='container mt-2'  align="center" id="contenedorA"> 
            
        <div className='row'> 
            <div className='col' align="left">
                <div id="tituloavanzado">Build your PC!</div>
            </div>
            <div className='col'>
                <Link to={"/"}><button className='mx-auto btn btn-primary'>Back</button></Link>
                &nbsp;
                <button className='mx-auto btn btn-primary'>Checkout</button>
            </div>
        <div className='row justify-content-center'>
            <div className='col mb-1' align="center">
                <button className='mx-auto btn btn-primary'>Graphics</button>
                &nbsp;
                <button className='mx-auto btn btn-primary'>Processor</button>
                &nbsp;
                <button className='mx-auto btn btn-primary'>Memory</button>
                &nbsp;
                <button className='mx-auto btn btn-primary'>Storage</button>
                &nbsp;
            </div>
        </div>
        <div className='row'>
            <div className='col'>
                <button className='mx-auto btn btn-primary'>Cooler</button>
                &nbsp;
                <button className='mx-auto btn btn-primary'>Windows</button>
                &nbsp;
                <button className='mx-auto btn btn-primary'>Power Supply</button>
            </div>
        </div>
        <div className='col mt-3' id='columnaiz'>
            <div className='row mb-3'>
                <img src={pcgamer} alt="..." />
            </div>
            <div className='row'>
                <div className='container' id='resumen'>
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
                    <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
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
                    <p class="card-text">NVIDIA RTX 3090</p>
                    <p class="card-text"><small class="text-muted">900$</small></p>
                </div>
                </div>
                <div class='col-md-3 mt-4'>
                    <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
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
                    <p class="card-text">NVIDIA RTX 3090</p>
                    <p class="card-text"><small class="text-muted">900$</small></p>
                </div>
                </div>
                <div class='col-md-3 mt-4'>
                    <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
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
                    <p class="card-text">NVIDIA RTX 3090</p>
                    <p class="card-text"><small class="text-muted">900$</small></p>
                </div>
                </div>
                <div class='col-md-3 mt-4'>
                    <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
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
                        <img src={nvidialogo} class="img-fluid rounded-start mt-2 mb-2" alt="..."/>
                    </div>
                    <div class="col-md-6">
                    <div class="card-body">
                        <p class="card-text">NVIDIA RTX 3090</p>
                    </div>
                    </div>
                    <div class="col-md-3">
                        <div>&nbsp;</div>
                        900$
                    </div>
                </div>
                </div>
            </div>
            <div className='row'>
                <div class="card mb-3" id='listacompra'>
                <div class="row g-0">
                    <div class="col-md-3">
                        <img src={nvidialogo} class="img-fluid rounded-start mt-2 mb-2" alt="..."/>
                    </div>
                    <div class="col-md-6">
                    <div class="card-body">
                        <p class="card-text">NVIDIA RTX 3090</p>
                    </div>
                    </div>
                    <div class="col-md-3">
                        <div>&nbsp;</div>
                        900$
                    </div>
                </div>
                </div>
            </div>
            <div className='row'>
                <div class="card mb-3" id='listacompra'>
                <div class="row g-0">
                    <div class="col-md-3">
                        <img src={nvidialogo} class="img-fluid rounded-start mt-2 mb-2" alt="..."/>
                    </div>
                    <div class="col-md-6">
                    <div class="card-body">
                        <p class="card-text">NVIDIA RTX 3090</p>
                    </div>
                    </div>
                    <div class="col-md-3">
                        <div>&nbsp;</div>
                        900$
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