import Header from '../header_todos';
import { Link } from "react-router-dom"
import './perfil.css'
import { getUsuarioLoged } from '../../conf';

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
                            <button id='botonblancoP' className='btn btn-primary mt-2' onClick={()=>{getUsuarioLoged(null,null)}}>Log Out</button>
                        </Link>
                    </div>
                </div>
                <div className='col-9'>
                    <div className='container' id='contenidoPerfil'>
                        <div>
                        <h2>DATOS DE PERFIL</h2>
        <div class="container row g-3 mt-3">
                    <div class="col-6">
                        <label for="">Nombre:</label>
                        <input type="text" class="form-control" name="nombre" id="nombre"/>
                    </div>
                    <div class="col-6">
                        <label for="">Apellido:</label>
                        <input type="text" class="form-control" name="apellido" id="apellido"/>
                    </div>
                    <div class="col-12">
                        <label for="">Correo:</label>
                        <input type="text" class="form-control" name="correo" id="correo"/>
                    </div>
                    <div class="col-12">
                        <label for="">Dirección:</label>
                        <input type="text" class="form-control" name="direccion" id="direccion"/>
                    </div>
                    <div class="col-4">
                        <label for="">Ciudad:</label>
                        <input type="text" class="form-control" name="ciudad" id="ciudad"/>
                    </div>
                    <div class="col-4">
                        <label for="">País:</label>
                        <input type="text" class="form-control" name="pais" id="pais"/>
                    </div>
                    <div class="col-4">
                        <label for="">Código postal:</label>
                        <input type="text" class="form-control" name="codigo" id="codigo"/>
                    </div>
                    <div class="col-4">
                        <label for="">Teléfono:</label>
                        <input type="text" class="form-control" name="telefono" id="telefono"/>
                    </div>
                    <div class="col-12">
                        <button id='botonprofileinfo' class="btn-btn-primary rounded">ACEPTAR</button>
                        <button id='botonprofileinfo' class="btn-btn-primary rounded">CANCELAR</button>
                    </div>
                    </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    </div>
}

export default Perfil;