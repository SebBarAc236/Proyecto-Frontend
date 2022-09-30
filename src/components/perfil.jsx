import Header from './header_todos';
import { Link } from "react-router-dom"
import './perfil.css'

const Perfil =() =>{
    return <div>
        <Header/>
        <div id='body'>
        <nav class="navbar navbar-expand d-flex flex-column align-item-start" id='sidebar'>
            <a href="#" className='navbar-brand text-light mt-5'>
                <div id='tituloPerfil' className='display-5 font-weight-bold'>PERFIL</div>
            </a>
            <ul className='navbar-nav d-flex flex-column mt-5 w-100'>
                <li className='nav-item w-100'>
                    <a id='botonblanco' href="#" className='nav-link text-light pl-4 btn btn-primary'>Order History</a>
                </li>
                <div id='ignore'>.</div>
                <li className='nav-item w-100'>
                    <a id='botonblanco' href="#" className='nav-link text-light pl-4 btn btn-primary'>Profile Info</a>
                </li>
                <div id='ignore'>.</div>
                <li className='nav-item w-100'>
                    <a id='botonblanco' href="#" className='nav-link text-light pl-4 btn btn-primary'>Log Out</a>
                </li>
            </ul>
        </nav>
        </div>
    </div>
}

export default Perfil;