import Header from './header_todos';
import { Link } from "react-router-dom"
import './Recomendado.css'
import nvidialogo from './imagenes/nvidialogo.png'
import ryzenlogo from './imagenes/ryzenlogo.jpg'
import aoruslogo from './imagenes/gigabytelogo.png'
import corsairlogo from './imagenes/corsairlogo.png'
import pcgamer from './imagenes/pcgamer.png'
import windows from './imagen/windows11.png'
import wireless from './imagen/wireless.png'
import buildlogo from './imagen/build_logo.png'
import coolermaster from './imagen/cooler_master.png'
import corei7 from './imagen/core_i7.png'
import masterliquid from './imagen/master_liquid.png'
import motherboard from './imagen/motherboard.png'
import powersupply from './imagen/power_supply.png'
import qty from './imagen/QTY_CM.png'
import ram from './imagen/RAM.png'
import rtx from './imagen/RTX.png'
import ssd from './imagen/SSD.png'
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
            <div className='row' style={{height:"140px"}}>
                <div class="card mb-3" id='listacompra'>
                <div class="row g-0">
                    <div class="col-md-3">
                        <img src={corei7} class="img-fluid rounded-start mt-2 mb-2" alt="..."/>
                    </div>
                    <div class="col-md-6">
                    <div class="card-body">
                        <p class="card-text">INTEL CORE I7-12700F 12-CORE</p>
                    </div>
                    </div>
                    <div class="col-md-3">
                        <div>&nbsp;</div>
                        359$
                    </div>
                </div>
                </div>
            </div>
            <div className='row' style={{height:"140px"}}>
                <div class="card mb-3" id='listacompra'>
                <div class="row g-0">
                    <div class="col-md-3">
                        <img src={ram} class="img-fluid rounded-start mt-2 mb-2" alt="..."/>
                    </div>
                    <div class="col-md-6">
                    <div class="card-body">
                        <p class="card-text">16GB DDR4 DUAL CHANNEL</p>
                    </div>
                    </div>
                    <div class="col-md-3">
                        <div>&nbsp;</div>
                        69$
                    </div>
                </div>
                </div>
            </div>
            <div className='row' style={{height:"140px"}}>
                <div class="card mb-3" id='listacompra'>
                <div class="row g-0">
                    <div class="col-md-3">
                        <img src={masterliquid} class="img-fluid rounded-start mt-2 mb-2" alt="..."/>
                    </div>
                    <div class="col-md-6">
                    <div class="card-body">
                        <p class="card-text">CM MASTERLIQUID ML240L</p>
                    </div>
                    </div>
                    <div class="col-md-3">
                        <div>&nbsp;</div>
                        89$
                    </div>
                </div>
                </div>
            </div>
            <div className='row' style={{height:"140px"}}>
                <div class="card mb-3" id='listacompra'>
                <div class="row g-0">
                    <div class="col-md-3">
                        <img src={coolermaster} class="img-fluid rounded-start mt-2 mb-2" alt="..."/>
                    </div>
                    <div class="col-md-6">
                    <div class="card-body">
                        <p class="card-text">COOLER MASTER TD500 RGB</p>
                    </div>
                    </div>
                    <div class="col-md-3">
                        <div>&nbsp;</div>
                        99$
                    </div>
                </div>
                </div>
            </div>
            <div className='row' style={{height:"140px"}}>
                <div class="card mb-3" id='listacompra'>
                <div class="row g-0">
                    <div class="col-md-3">
                        <img src={motherboard} class="img-fluid rounded-start mt-2 mb-2" alt="..."/>
                    </div>
                    <div class="col-md-6">
                    <div class="card-body">
                        <p class="card-text">ASUS PRIME B660-A | INTEL</p>
                    </div>
                    </div>
                    <div class="col-md-3">
                        <div>&nbsp;</div>
                        149$
                    </div>
                </div>
                </div>
            </div>
            <div className='row' style={{height:"140px"}}>
                <div class="card mb-3" id='listacompra'>
                <div class="row g-0">
                    <div class="col-md-3">
                        <img src={windows} class="img-fluid rounded-start mt-2 mb-2" alt="..."/>
                    </div>
                    <div class="col-md-6">
                    <div class="card-body">
                        <p class="card-text">WINDOWS 11 HOME + USB RECOVERY</p>
                    </div>
                    </div>
                    <div class="col-md-3">
                        <div>&nbsp;</div>
                        120$
                    </div>
                </div>
                </div>
            </div>
        </div>
        <div className='col mt-3 ms-3'>
            <div className='row' style={{height:"140px"}}>
                <div class="card mb-3" id='listacompra'>
                <div class="row g-0">
                    <div class="col-md-3">
                        <img src={rtx} class="img-fluid rounded-start mt-2 mb-2" alt="..."/>
                    </div>
                    <div class="col-md-6">
                    <div class="card-body">
                        <p class="card-text">NVIDIA GEFORCE RTX 3070 8GB (VR READY)</p>
                    </div>
                    </div>
                    <div class="col-md-3">
                        <div>&nbsp;</div>
                        679$
                    </div>
                </div>
                </div>
            </div>
            <div className='row' style={{height:"140px"}}>
                <div class="card mb-3" id='listacompra'>
                <div class="row g-0">
                    <div class="col-md-3">
                        <img src={ssd} class="img-fluid rounded-start mt-2 mb-2" alt="..."/>
                    </div>
                    <div class="col-md-6">
                    <div class="card-body">
                        <p class="card-text">1TB NVME M.2</p>
                    </div>
                    </div>
                    <div class="col-md-3">
                        <div>&nbsp;</div>
                        99$
                    </div>
                </div>
                </div>
            </div>
            <div className='row' style={{height:"140px"}}>
                <div class="card mb-3" id='listacompra'>
                <div class="row g-0">
                    <div class="col-md-3">
                        <img src={qty} class="img-fluid rounded-start mt-2 mb-2" alt="..."/>
                    </div>
                    <div class="col-md-6">
                    <div class="card-body">
                        <p class="card-text">QTY 4X CM MASTERFANS RGB</p>
                    </div>
                    </div>
                    <div class="col-md-3">
                        <div>&nbsp;</div>
                        29$
                    </div>
                </div>
                </div>
            </div>
            <div className='row' style={{height:"140px"}}>
                <div class="card mb-3" id='listacompra'>
                <div class="row g-0">
                    <div class="col-md-3">
                        <img src={powersupply} class="img-fluid rounded-start mt-2 mb-2" alt="..."/>
                    </div>
                    <div class="col-md-6">
                    <div class="card-body">
                        <p class="card-text">700W ATX 80 PLUS GOLD</p>
                    </div>
                    </div>
                    <div class="col-md-3">
                        <div>&nbsp;</div>
                        79$
                    </div>
                </div>
                </div>
            </div>
            <div className='row' style={{height:"140px"}}>
                <div class="card mb-3" id='listacompra'>
                <div class="row g-0">
                    <div class="col-md-3">
                        <img src={wireless} class="img-fluid rounded-start mt-2 mb-2" alt="..."/>
                    </div>
                    <div class="col-md-6">
                    <div class="card-body">
                        <p class="card-text">WIRELESS 802.11AC</p>
                    </div>
                    </div>
                    <div class="col-md-3">
                        <div>&nbsp;</div>
                        29$
                    </div>
                </div>
                </div>
            </div>
            <div className='row' style={{height:"140px"}}>
                <div class="card mb-3" id='listacompra'>
                <div class="row g-0">
                    <div class="col-md-3">
                        <img src={buildlogo} class="img-fluid rounded-start mt-2 mb-2" alt="..."/>
                    </div>
                    <div class="col-md-6">
                    <div class="card-body">
                        <p class="card-text">BUILD + SETUP + TESTING + WARRANTY</p>
                    </div>
                    </div>
                    <div class="col-md-3">
                        <div>&nbsp;</div>
                        99$
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