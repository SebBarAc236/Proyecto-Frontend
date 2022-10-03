import Header from './header_todos';
import { Link } from "react-router-dom"
import './ranking.css'
import pcgamer from './imagen/pc_gamer.png'
const Ranking = ()=>{
    return <div>
        <div className='row mx-auto' align="right"><Header/></div>
            <div className='row mx-auto mt-3'>
                <div className='col-6' id='perifericos'>
                    <div align="center" style={{color:"white", fontSize:"35px"}}>PERIFERICOS</div>
                    <h1 style={{textAlign:"center",color:"rgb(59, 59, 161)"}}>Ranking de componentes mas comprados</h1>
                        <h6 style={{textAlign:"center"}}className="text-primary text-opacity-50">Estos son los componentes mas comprados</h6>
                        <div className="container text-center">
                            <div className="row" id='botonamarillo'>
                            <button style={{height:"100px",marginTop:"40px",borderColor:"black 5px solid"}}  class="col btn btn-warning">
                                
                                <img style={{maxWidth:"80%", maxHeight:"80%", marginRight:"500px", marginTop:"0px"}} src="https://www.sony.com.pe/image/dd18cf93606d238305a733d336c45537?fmt=pjpeg&wid=330&bgcolor=FFFFFF&bgc=FFFFFF"/>
                                <h6 style={{marginTop:"-40px", marginLeft:"-300px"}}>Audifonos</h6> 
                                <h6 style={{marginTop:"-27px", marginLeft:"450px"}}>$36</h6>
                                
                            </button>
                            </div>
                            <div className="row" id='botonamarillo'>
                            <button style={{height:"100px",marginTop:"40px",borderColor:"black 5px solid"}}  class="col btn btn-warning">
                                
                                <img style={{maxWidth:"80%", maxHeight:"70%", marginRight:"500px", marginTop:"5px"}} src="https://www.lacuracao.pe/wcsstore/efe_cat_as/646x1000/IM17862712_1.jpg"/>
                                <h6 style={{marginTop:"-40px", marginLeft:"-300px"}}>Case de CPU</h6> 
                                <h6 style={{marginTop:"-27px", marginLeft:"450px"}}>$70</h6>
                                
                            </button>
                            </div>
                            <div className="row" id='botonamarillo'>
                            <button style={{height:"100px",marginTop:"40px",borderColor:"black 5px solid"}}  class="col btn btn-warning">
                                
                                <img style={{maxWidth:"80%", maxHeight:"70%", marginRight:"500px", marginTop:"5px"}} src="data:image/jpeg;base64,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"/>
                                <h6 style={{marginTop:"-40px", marginLeft:"-300px"}}>Mouse</h6> 
                                <h6 style={{marginTop:"-27px", marginLeft:"450px"}}>$7</h6>
                                
                            </button>
                            </div>
                            
                            
                        </div>
                        <Link to={"/"}>
                            <button style={{width:"20%",display:"inline-block", margin:"0 588px", marginTop:"40px"}} class="align-text-bottom btn btn-success">Retornar a pagina principal</button>
                        </Link>
                </div>
                <div className='col-6' id='ordenadores'>
                    <div style={{color:"white", fontSize:"35px"}}>ORDENADORES</div>
                    <div className='row' style={{height:"100%", width:"100%"}}>
                    <div class="list-group-item d-flex justify-content-between align-items-center pb-2 pb-md-100 mb-md-200" id='ordenadorrank'>
                                                <button class="btn btn-secondary btn-lg dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                                    <span class="ms-5">
                                                        <img class="img-fluid" src={pcgamer} width="30" height="30" alt="Computer Hope" aria-colspan="icons"/>
                                                    </span>
                                                    <span class="ms-5">
                                                        Monster PC
                                                    </span> 
                                                    <span class="ms-5">
                                                        $1899
                                                    </span>
                                                </button>
                                                <ul class="dropdown-menu">
                                                    <li>
                                                        <a class="dropdown-item" href="#">
                                                            <span>
                                                                <img class="img-fluid" src="/imagen/core_i7.jpg" width="30" height="30" alt="Computer Hope" aria-colspan="icons"/>
                                                            </span>
                                                            <span>
                                                                INTEL CORE I7-12700F 12-CORE
                                                            </span> 
                                                            <span>
                                                                $339
                                                            </span>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a class="dropdown-item" href="#">
                                                            <span>
                                                                <img class="img-fluid" src="/imagen/pc_gamer.png" width="30" height="30" alt="Computer Hope" aria-colspan="icons"/>
                                                            </span>
                                                            <span>
                                                                NVIDIA GEFORCE RTX 3070 8GB (VR READY)
                                                            </span>
                                                            <span>
                                                                $599
                                                            </span>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a class="dropdown-item" href="#">
                                                            <span>
                                                                <img class="img-fluid" src="/imagen/memoria_16GB.png" width="30" height="30" alt="Computer Hope" aria-colspan="icons"/>
                                                            </span>
                                                            <span>
                                                                16GB DDR4 DUAL CHANNEL
                                                            </span>
                                                            <span>
                                                                $79
                                                            </span>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a class="dropdown-item" href="#">
                                                            <span>
                                                                <img class="img-fluid" src="/imagen/pc_gamer.png" width="30" height="30" alt="Computer Hope" aria-colspan="icons"/>
                                                            </span>
                                                            <span>
                                                                1TB NVME M.2
                                                            </span>
                                                            <span>
                                                                $99
                                                            </span>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a class="dropdown-item" href="#">
                                                            <span>
                                                                <img class="img-fluid" src="/imagen/pc_gamer.png" width="30" height="30" alt="Computer Hope" aria-colspan="icons"/>
                                                            </span>
                                                            <span>
                                                                CM MASTERLIQUID ML240L
                                                            </span>
                                                            <span>
                                                                $99
                                                            </span>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a class="dropdown-item" href="#">
                                                            <span>
                                                                <img class="img-fluid" src="/imagen/pc_gamer.png" width="30" height="30" alt="Computer Hope" aria-colspan="icons"/>
                                                            </span>
                                                            <span>
                                                                QTY 4X CM MASTERFANS RGB
                                                            </span>
                                                            <span>
                                                                $49
                                                            </span>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a class="dropdown-item" href="#">
                                                            <span>
                                                                <img class="img-fluid" src="/imagen/pc_gamer.png" width="30" height="30" alt="Computer Hope" aria-colspan="icons"/>
                                                            </span>
                                                            <span>
                                                                COOLER MASTER TD500 RGB
                                                            </span>
                                                            <span>
                                                                $129
                                                            </span>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a class="dropdown-item" href="#">
                                                            <span>
                                                                <img class="img-fluid" src="/imagen/pc_gamer.png" width="30" height="30" alt="Computer Hope" aria-colspan="icons"/>
                                                            </span>
                                                            <span>
                                                                700W ATX 80 PLUS GOLD
                                                            </span>
                                                            <span>
                                                                $89
                                                            </span>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a class="dropdown-item" href="#">
                                                            <span>
                                                                <img class="img-fluid" src="/imagen/pc_gamer.png" width="30" height="30" alt="Computer Hope" aria-colspan="icons"/>
                                                            </span>
                                                            <span>
                                                                ASUS B660 SERIES | INTEL
                                                            </span>
                                                            <span>
                                                                $149
                                                            </span>
                                                        </a>
                                                    </li>
                                                </ul>
                    </div>
                    <div class="list-group-item d-flex justify-content-between align-items-center pb-2 pb-md-100 mb-md-200" id='ordenadorrank'>
                                                <button class="btn btn-secondary btn-lg dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                                    <span class="ms-5">
                                                        <img class="img-fluid" src="/imagen/pc_gamer.png" width="30" height="30" alt="Computer Hope" aria-colspan="icons"/>
                                                    </span>
                                                    <span class="ms-5">
                                                        Monster PC
                                                    </span> 
                                                    <span class="ms-5">
                                                        $1899
                                                    </span>
                                                </button>
                                                <ul class="dropdown-menu">
                                                    <li>
                                                        <a class="dropdown-item" href="#">
                                                            <span>
                                                                <img class="img-fluid" src="/imagen/core_i7.jpg" width="30" height="30" alt="Computer Hope" aria-colspan="icons"/>
                                                            </span>
                                                            <span>
                                                                INTEL CORE I7-12700F 12-CORE
                                                            </span> 
                                                            <span>
                                                                $339
                                                            </span>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a class="dropdown-item" href="#">
                                                            <span>
                                                                <img class="img-fluid" src="/imagen/pc_gamer.png" width="30" height="30" alt="Computer Hope" aria-colspan="icons"/>
                                                            </span>
                                                            <span>
                                                                NVIDIA GEFORCE RTX 3070 8GB (VR READY)
                                                            </span>
                                                            <span>
                                                                $599
                                                            </span>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a class="dropdown-item" href="#">
                                                            <span>
                                                                <img class="img-fluid" src="/imagen/memoria_16GB.png" width="30" height="30" alt="Computer Hope" aria-colspan="icons"/>
                                                            </span>
                                                            <span>
                                                                16GB DDR4 DUAL CHANNEL
                                                            </span>
                                                            <span>
                                                                $79
                                                            </span>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a class="dropdown-item" href="#">
                                                            <span>
                                                                <img class="img-fluid" src="/imagen/pc_gamer.png" width="30" height="30" alt="Computer Hope" aria-colspan="icons"/>
                                                            </span>
                                                            <span>
                                                                1TB NVME M.2
                                                            </span>
                                                            <span>
                                                                $99
                                                            </span>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a class="dropdown-item" href="#">
                                                            <span>
                                                                <img class="img-fluid" src="/imagen/pc_gamer.png" width="30" height="30" alt="Computer Hope" aria-colspan="icons"/>
                                                            </span>
                                                            <span>
                                                                CM MASTERLIQUID ML240L
                                                            </span>
                                                            <span>
                                                                $99
                                                            </span>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a class="dropdown-item" href="#">
                                                            <span>
                                                                <img class="img-fluid" src="/imagen/pc_gamer.png" width="30" height="30" alt="Computer Hope" aria-colspan="icons"/>
                                                            </span>
                                                            <span>
                                                                QTY 4X CM MASTERFANS RGB
                                                            </span>
                                                            <span>
                                                                $49
                                                            </span>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a class="dropdown-item" href="#">
                                                            <span>
                                                                <img class="img-fluid" src="/imagen/pc_gamer.png" width="30" height="30" alt="Computer Hope" aria-colspan="icons"/>
                                                            </span>
                                                            <span>
                                                                COOLER MASTER TD500 RGB
                                                            </span>
                                                            <span>
                                                                $129
                                                            </span>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a class="dropdown-item" href="#">
                                                            <span>
                                                                <img class="img-fluid" src="/imagen/pc_gamer.png" width="30" height="30" alt="Computer Hope" aria-colspan="icons"/>
                                                            </span>
                                                            <span>
                                                                700W ATX 80 PLUS GOLD
                                                            </span>
                                                            <span>
                                                                $89
                                                            </span>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a class="dropdown-item" href="#">
                                                            <span>
                                                                <img class="img-fluid" src="/imagen/pc_gamer.png" width="30" height="30" alt="Computer Hope" aria-colspan="icons"/>
                                                            </span>
                                                            <span>
                                                                ASUS B660 SERIES | INTEL
                                                            </span>
                                                            <span>
                                                                $149
                                                            </span>
                                                        </a>
                                                    </li>
                                                </ul>
                    </div>
                    <div class="list-group-item d-flex justify-content-between align-items-center pb-2 pb-md-100 mb-md-200" id='ordenadorrank'>
                                                <button class="btn btn-secondary btn-lg dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                                    <span class="ms-5">
                                                        <img class="img-fluid" src="/imagen/pc_gamer.png" width="30" height="30" alt="Computer Hope" aria-colspan="icons"/>
                                                    </span>
                                                    <span class="ms-5">
                                                        Monster PC
                                                    </span> 
                                                    <span class="ms-5">
                                                        $1899
                                                    </span>
                                                </button>
                                                <ul class="dropdown-menu">
                                                    <li>
                                                        <a class="dropdown-item" href="#">
                                                            <span>
                                                                <img class="img-fluid" src="/imagen/core_i7.jpg" width="30" height="30" alt="Computer Hope" aria-colspan="icons"/>
                                                            </span>
                                                            <span>
                                                                INTEL CORE I7-12700F 12-CORE
                                                            </span> 
                                                            <span>
                                                                $339
                                                            </span>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a class="dropdown-item" href="#">
                                                            <span>
                                                                <img class="img-fluid" src="/imagen/pc_gamer.png" width="30" height="30" alt="Computer Hope" aria-colspan="icons"/>
                                                            </span>
                                                            <span>
                                                                NVIDIA GEFORCE RTX 3070 8GB (VR READY)
                                                            </span>
                                                            <span>
                                                                $599
                                                            </span>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a class="dropdown-item" href="#">
                                                            <span>
                                                                <img class="img-fluid" src="/imagen/memoria_16GB.png" width="30" height="30" alt="Computer Hope" aria-colspan="icons"/>
                                                            </span>
                                                            <span>
                                                                16GB DDR4 DUAL CHANNEL
                                                            </span>
                                                            <span>
                                                                $79
                                                            </span>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a class="dropdown-item" href="#">
                                                            <span>
                                                                <img class="img-fluid" src="/imagen/pc_gamer.png" width="30" height="30" alt="Computer Hope" aria-colspan="icons"/>
                                                            </span>
                                                            <span>
                                                                1TB NVME M.2
                                                            </span>
                                                            <span>
                                                                $99
                                                            </span>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a class="dropdown-item" href="#">
                                                            <span>
                                                                <img class="img-fluid" src="/imagen/pc_gamer.png" width="30" height="30" alt="Computer Hope" aria-colspan="icons"/>
                                                            </span>
                                                            <span>
                                                                CM MASTERLIQUID ML240L
                                                            </span>
                                                            <span>
                                                                $99
                                                            </span>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a class="dropdown-item" href="#">
                                                            <span>
                                                                <img class="img-fluid" src="/imagen/pc_gamer.png" width="30" height="30" alt="Computer Hope" aria-colspan="icons"/>
                                                            </span>
                                                            <span>
                                                                QTY 4X CM MASTERFANS RGB
                                                            </span>
                                                            <span>
                                                                $49
                                                            </span>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a class="dropdown-item" href="#">
                                                            <span>
                                                                <img class="img-fluid" src="/imagen/pc_gamer.png" width="30" height="30" alt="Computer Hope" aria-colspan="icons"/>
                                                            </span>
                                                            <span>
                                                                COOLER MASTER TD500 RGB
                                                            </span>
                                                            <span>
                                                                $129
                                                            </span>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a class="dropdown-item" href="#">
                                                            <span>
                                                                <img class="img-fluid" src="/imagen/pc_gamer.png" width="30" height="30" alt="Computer Hope" aria-colspan="icons"/>
                                                            </span>
                                                            <span>
                                                                700W ATX 80 PLUS GOLD
                                                            </span>
                                                            <span>
                                                                $89
                                                            </span>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a class="dropdown-item" href="#">
                                                            <span>
                                                                <img class="img-fluid" src="/imagen/pc_gamer.png" width="30" height="30" alt="Computer Hope" aria-colspan="icons"/>
                                                            </span>
                                                            <span>
                                                                ASUS B660 SERIES | INTEL
                                                            </span>
                                                            <span>
                                                                $149
                                                            </span>
                                                        </a>
                                                    </li>
                                                </ul>
                    </div>
                    <div class="list-group-item d-flex justify-content-between align-items-center pb-2 pb-md-100 mb-md-200" id='ordenadorrank'>
                                                <button class="btn btn-secondary btn-lg dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                                    <span class="ms-5">
                                                        <img class="img-fluid" src="/imagen/pc_gamer.png" width="30" height="30" alt="Computer Hope" aria-colspan="icons"/>
                                                    </span>
                                                    <span class="ms-5">
                                                        Monster PC
                                                    </span> 
                                                    <span class="ms-5">
                                                        $1899
                                                    </span>
                                                </button>
                                                <ul class="dropdown-menu">
                                                    <li>
                                                        <a class="dropdown-item" href="#">
                                                            <span>
                                                                <img class="img-fluid" src="/imagen/core_i7.jpg" width="30" height="30" alt="Computer Hope" aria-colspan="icons"/>
                                                            </span>
                                                            <span>
                                                                INTEL CORE I7-12700F 12-CORE
                                                            </span> 
                                                            <span>
                                                                $339
                                                            </span>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a class="dropdown-item" href="#">
                                                            <span>
                                                                <img class="img-fluid" src="/imagen/pc_gamer.png" width="30" height="30" alt="Computer Hope" aria-colspan="icons"/>
                                                            </span>
                                                            <span>
                                                                NVIDIA GEFORCE RTX 3070 8GB (VR READY)
                                                            </span>
                                                            <span>
                                                                $599
                                                            </span>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a class="dropdown-item" href="#">
                                                            <span>
                                                                <img class="img-fluid" src="/imagen/memoria_16GB.png" width="30" height="30" alt="Computer Hope" aria-colspan="icons"/>
                                                            </span>
                                                            <span>
                                                                16GB DDR4 DUAL CHANNEL
                                                            </span>
                                                            <span>
                                                                $79
                                                            </span>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a class="dropdown-item" href="#">
                                                            <span>
                                                                <img class="img-fluid" src="/imagen/pc_gamer.png" width="30" height="30" alt="Computer Hope" aria-colspan="icons"/>
                                                            </span>
                                                            <span>
                                                                1TB NVME M.2
                                                            </span>
                                                            <span>
                                                                $99
                                                            </span>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a class="dropdown-item" href="#">
                                                            <span>
                                                                <img class="img-fluid" src="/imagen/pc_gamer.png" width="30" height="30" alt="Computer Hope" aria-colspan="icons"/>
                                                            </span>
                                                            <span>
                                                                CM MASTERLIQUID ML240L
                                                            </span>
                                                            <span>
                                                                $99
                                                            </span>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a class="dropdown-item" href="#">
                                                            <span>
                                                                <img class="img-fluid" src="/imagen/pc_gamer.png" width="30" height="30" alt="Computer Hope" aria-colspan="icons"/>
                                                            </span>
                                                            <span>
                                                                QTY 4X CM MASTERFANS RGB
                                                            </span>
                                                            <span>
                                                                $49
                                                            </span>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a class="dropdown-item" href="#">
                                                            <span>
                                                                <img class="img-fluid" src="/imagen/pc_gamer.png" width="30" height="30" alt="Computer Hope" aria-colspan="icons"/>
                                                            </span>
                                                            <span>
                                                                COOLER MASTER TD500 RGB
                                                            </span>
                                                            <span>
                                                                $129
                                                            </span>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a class="dropdown-item" href="#">
                                                            <span>
                                                                <img class="img-fluid" src="/imagen/pc_gamer.png" width="30" height="30" alt="Computer Hope" aria-colspan="icons"/>
                                                            </span>
                                                            <span>
                                                                700W ATX 80 PLUS GOLD
                                                            </span>
                                                            <span>
                                                                $89
                                                            </span>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a class="dropdown-item" href="#">
                                                            <span>
                                                                <img class="img-fluid" src="/imagen/pc_gamer.png" width="30" height="30" alt="Computer Hope" aria-colspan="icons"/>
                                                            </span>
                                                            <span>
                                                                ASUS B660 SERIES | INTEL
                                                            </span>
                                                            <span>
                                                                $149
                                                            </span>
                                                        </a>
                                                    </li>
                                                </ul>
                    </div>
                    
                    </div>
                </div>
        </div>
    </div>
}

export default Ranking;