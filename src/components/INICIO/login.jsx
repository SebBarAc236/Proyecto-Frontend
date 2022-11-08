import Header from '../header_todos';
import { Link } from "react-router-dom"
import './loginstyle.css'
import React, {useEffect, useState} from 'react';

const Login = (props) => {

    const [password, setPassword] = useState("")
    const [correo, setCorreo] = useState("")

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
                <input type="text" class="form-control" id="floatingInput" placeholder="Email" value={correo} onChange={(evt)=>setCorreo(evt.target.value)}/>
                <div id='ignore'>.</div>
                <input type="password" class="form-control" id="floatingInput" placeholder="Password" value={password} onChange={(evt)=>setPassword(evt.target.value)}/>
                <div id='ignore'>.</div>
                <Link to={"/"}>
                <div class="d-grid gap-2">
                    <button id='botonblanco' class="btn btn-primary" type="button" onClick={()=>console.log("Correo: "+correo+"\n"+"Password: "+password)}>LOGIN</button>
                </div>
                </Link>
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