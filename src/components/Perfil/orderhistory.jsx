import Header from '../header_todos';
import { Link, useNavigate } from "react-router-dom"
import './perfil.css'

const OrderHistory =() =>{
    const navigate = useNavigate()
    return <div>
        <div className='row mx-auto'><Header/></div>
        <div className='container mt-5' id="contenedorA">
            <div className='row' align="left">
                <div className='col'>
                    <div id='tituloPerfil' className='display-5 font-weight-bold'>PERFIL</div>
                </div>
            </div>
            <div className='row'>
                <div className='col-3'>
                    <div className='row'>
                        <Link to={"/Perfil"}>
                            <button id='botonblancoP' className='btn btn-primary'>Profile Info</button>
                        </Link>
                    </div>
                    <div className='row'>
                        <Link to={"/orderHistory"}>
                            <button id='botonblancoP' className='btn btn-primary mt-2'>Order History</button>
                        </Link>
                    </div>
                    <div className='row'>
                        <Link to={"/"}>
                            <button id='botonblancoP' className='btn btn-primary mt-2' onClick={()=>{
                                localStorage.clear("TOKEN")
                                navigate("/")
                            }}>Log Out</button>
                        </Link>
                    </div>
                </div>
                <div className='col-9'>
                    <div className='container' id='contenidoPerfil'>
                    <div id="all">
        <div className="container row">
        <div class="container text-center">
            <h1 style={{marginBottom:"10px"}}>Historico de compras </h1>
            <div class="col">
                <button  style={{marginBottom:"15px",width:"800px", height:"100px"}}class="bg-warning rounded">
                  <img style={{marginTop:"5px", marginRight:"700px", maxWidth:"70%",maxHeight:"70%"}} src="https://www.sony.com.pe/image/dd18cf93606d238305a733d336c45537?fmt=pjpeg&wid=330&bgcolor=FFFFFF&bgc=FFFFFF"/>
                  <h6 style={{marginTop:"-40px", marginLeft:"-100px"}}>Audifonos</h6> 
                  <h6 style={{marginTop:"-27px", marginLeft:"600px"}}>$36</h6>
                </button>
              </div>
            <div class="col">
                <button  style={{marginBottom:"15px",width:"800px", height:"100px"}}class="bg-warning rounded">
                  <img style={{marginTop:"5px", marginRight:"700px", maxWidth:"70%",maxHeight:"70%"}} src="https://www.sony.com.pe/image/dd18cf93606d238305a733d336c45537?fmt=pjpeg&wid=330&bgcolor=FFFFFF&bgc=FFFFFF"/>
                  <h6 style={{marginTop:"-40px", marginLeft:"-100px"}}>Audifonos</h6> 
                  <h6 style={{marginTop:"-27px", marginLeft:"600px"}}>$36</h6>
                </button>
              </div>
            <div class="col">
                <button  style={{marginBottom:"15px",width:"800px", height:"100px"}}class="bg-warning rounded">
                  <img style={{marginTop:"5px", marginRight:"700px", maxWidth:"70%",maxHeight:"70%"}} src="https://www.sony.com.pe/image/dd18cf93606d238305a733d336c45537?fmt=pjpeg&wid=330&bgcolor=FFFFFF&bgc=FFFFFF"/>
                  <h6 style={{marginTop:"-40px", marginLeft:"-100px"}}>Audifonos</h6> 
                  <h6 style={{marginTop:"-27px", marginLeft:"600px"}}>$36</h6>
                </button>
            </div>
        </div>
        <a href="/">
            <button style={{width:"20%",display:"inline-block", margin:"0 690px", marginTop:"50px"}} class="align-text-bottom btn btn-success">Retornar a pagina principal</button>
          </a>

        </div>

                    </div>
                </div>
            </div>
        </div>
    </div>   
    </div>
}

export default OrderHistory;