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