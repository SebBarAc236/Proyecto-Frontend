import Header from '../header_todos';
import { Link } from "react-router-dom"
import './loginstyle.css'
import React, {useEffect, useState} from 'react';
import { useNavigate } from 'react-router-dom';
import { RUTA_BACKEND} from '../../conf';

const Login = (props) => {
    const [error, setError] = useState(false)
    const [listadoUsuarios, setListadoUsuarios] = useState([])
    const [password, setPassword] = useState("")
    const [correo, setCorreo] = useState("")
    const navigate = useNavigate()
    const httpObtenerUsuarios = async (usuarioCorreo = null) => {
        const ruta = usuarioCorreo == null ? 
            `${RUTA_BACKEND}/Usuario`: 
            `${RUTA_BACKEND}/Usuario?Correo=${usuarioCorreo}`
        const resp = await fetch(ruta)
        const data = await resp.json()
        console.log(data)
        setListadoUsuarios(data)
    }
    
    const onUsuarioDetected = (usuarioCorreo) => {
        console.log("se busca los datos de "+ usuarioCorreo)
        httpObtenerUsuarios(usuarioCorreo)
    }

    const httpLogin = async (correo,password) => {
        const resp = await fetch(`${RUTA_BACKEND}/login`, {
            method : "POST",
            body : JSON.stringify({
                Correo : correo,
                Contrasena : password
            }),
            headers : {
                "Content-Type" : "application/json"
            }
        })
        const data = await resp.json()
        if(data.error === ""){
            localStorage.setItem("TOKEN",data.token)
            navigate("/")
        }else{
            setError(true)
        }
    }

    useEffect(() => {
        httpObtenerUsuarios()
    },[])


    return <div>
        <div className='row mx-auto'><Header/></div>
        <div className='container'>
            
            <div className='row' id='ignore'>.</div>
            <div className='row'>
            <div className='col'></div>
            <div  className='col-4'   id='contenedorR'>
                <div id='ignore'>.</div>
                <div id='tituloContenedorR'>LOG IN.</div>
                <div id='textoContenedorR'>Log in with your details below to view your order.</div>
                <div id='ignore'>.</div>
                <input type="text" class="form-control" id="floatingInput" placeholder="Email" value={correo}
                onChange={(evt)=>{setCorreo(evt.target.value); onUsuarioDetected(correo)}}/>

                <div id='ignore'>.</div>
                <input type="password" class="form-control" id="floatingInput" placeholder="Password" value={password} 
                onChange={(evt)=>{setPassword(evt.target.value); onUsuarioDetected(correo)}}/>

                <div id='ignore'>.</div>
                <div class="d-grid gap-2">
                    <button id='botonblanco' class="btn btn-primary" type="button" onClick={
                        
                        ()=>{
                            httpLogin(correo,password)
                            }
                     
                    }>LOGIN</button>
                {
                    (()=>{
                        if(error === true){
                            return <div className='alert alert-danger'>No existe la cuenta que se especifica</div>
                        }
                    })()
                }
                </div>
                <Link to={"/Olvidada"}>
                <div><a href=" ">Forgot your password?</a></div>
                </Link>
                <div id='ignore'>.</div>
                <div id='textoContenedorR'>Don't have an account?</div>
                <Link to={"/Register"}>
                    <div class="d-grid gap-2">
                        <button id='botonblanco' class="btn btn-primary" type="button">SIGN UP</button>
                    </div>
                </Link>
                <div id='ignore'>.</div>
            </div>
            <div className='col'></div>
                  
        </div>
        </div>
    </div>
        
}

export default Login;