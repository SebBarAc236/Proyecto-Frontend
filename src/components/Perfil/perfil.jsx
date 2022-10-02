import Header from '../header_todos';
import { Link } from "react-router-dom"
import './perfil.css'

const Perfil =() =>{
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
                            <button id='botonblancoP' className='btn btn-primary mt-2'>Log Out</button>
                        </Link>
                    </div>
                </div>
                <div className='col-9'>
                    <div className='container' id='contenidoPerfil'>
                        <div>AQUI VA LA INFO DEL PERFIL</div>

                    </div>
                </div>
            </div>
        </div>
    </div>
}

export default Perfil;