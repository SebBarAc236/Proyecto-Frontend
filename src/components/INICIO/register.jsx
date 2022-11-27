import Header from '../header_todos';
import { Link } from "react-router-dom"
import './loginstyle.css'
import { useState } from 'react';
import { useEffect } from 'react';
import { RUTA_BACKEND } from '../../conf';


const Register = (props) => {
    const [listadoUsuarios, setListadoUsuarios] = useState([])
    const [Correo, setCorreo] = useState("")
    const [Usuario_ID, setUsuario_ID] = useState("")
    const [Contrasena, setContrasena] = useState("")
    const [Nombre, setNombre] = useState("")
    const [Apellido, setApellido] = useState("")

    const httpObtenerUsuarios = async (Correo = null) => {
        const ruta = Usuario_ID == null ? 
            `${RUTA_BACKEND}/Usuario` : 
            `${RUTA_BACKEND}/Usuario?Correo=${Correo}`
        const resp = await fetch(ruta)
        const data = await resp.json()
        console.log(data)
        setListadoUsuarios(data)
    }

    useEffect(()=>{
        httpObtenerUsuarios()
    },[Correo])

    const usuarioRegister = async (Usuario_ID,Nombre,Apellido,Correo,Contrasena) => {
        const data = {
            Usuario_ID : Usuario_ID,
            Nombre : Nombre,
            Apellido : Apellido,
            Correo : Correo,
            Contrasena : Contrasena
        }
        const resp = await fetch(`${RUTA_BACKEND}/Usuario`, {
            method : "POST",
            body : JSON.stringify(data),
            headers : {
                "Content-Type" : "application/json"
            }
        })
        const dataResp = await resp.json()
        if(dataResp.error != ""){
            console.error(dataResp.error)
        }
        httpObtenerUsuarios(Correo)
    }

    const registrar = (Usuario_ID,Nombre,Apellido,Correo,Contrasena) => {
        console.log(`ID: ${Usuario_ID} Nombre: ${Nombre} Apellido: ${Apellido} Correo: ${Correo} Contraseña: ${Contrasena}`)
        usuarioRegister(Usuario_ID,Nombre,Apellido,Correo,Contrasena)
    }

    return <div>
        <div className='row mx-auto' align="right"><Header/></div>
        <div className='container'>
            <div className='row' id='ignore'>.</div>
            <div className='row'>
            <div className='col'></div>
            <div  className='col-4'   id='contenedorR'>
                <div id='ignore'>.</div>
                <div id='tituloContenedorR'>CREATE ACCOUNT</div>
                <div id='ignore'>.</div>
                <input type="text" class="form-control" id="floatingInput" placeholder="First Name" value={Nombre}
                onChange = {(evt) => {setNombre(evt.target.value)}}/>
                <div id='ignore'>.</div>
                <input type="text" class="form-control" id="floatingInput" placeholder="Last Name" value={Apellido}
                onChange = {(evt) => {setApellido(evt.target.value)}}/>
                <div id='ignore'>.</div>
                <input type="text" class="form-control" id="floatingInput" placeholder="Email" value={Correo}
                onChange = {(evt) => {setCorreo(evt.target.value)}}/>
                <div id='ignore'>.</div>
                <input type="password" class="form-control" id="floatingInput" placeholder="Password" value={Contrasena}
                onChange = {(evt) => {setContrasena(evt.target.value)}}/>
                <div id='ignore'>.</div>
                <div class="d-grid gap-2">
                    <button id='botonblanco' class="btn btn-primary" type="button"
                    onClick = {
                        ()=>{
                            registrar("c841c18b-d411-4cbe-8aa5-21a088627699",Nombre,Apellido,Correo,Contrasena)
                        }
                    }
                    >CREATE</button>
                </div>
                <div>Already registered? Try <Link to={"/Login"}><a>sign in</a></Link></div>
                <div id='ignore'>.</div>
                <div id='ignore'>.</div>
            </div>
            <div className='col'></div>
                  
        </div>
        </div>
    </div>
   
        
}

export default Register;