import Header from '../header_todos';
import { Link } from "react-router-dom"
import './loginstyle.css'

const Login = (props) => {

    return <div>
        <div className='container'>
            <div className='row'><Header/></div>
            <div className='row' id='ignore'>.</div>
            <div className='row'>
            <div className='col'></div>
            <div  className='col-4'   id='contenedorR'>
                <div id='ignore'>.</div>
                <div id='tituloContenedorR'>LOG IN.</div>
                <div id='textoContenedorR'>Log in with your details below to view your order.</div>
                <div id='ignore'>.</div>
                <input type="text" class="form-control" id="floatingInput" placeholder="Email"/>
                <div id='ignore'>.</div>
                <input type="password" class="form-control" id="floatingInput" placeholder="Password"/>
                <div id='ignore'>.</div>
                <Link to={"/"}>
                <div class="d-grid gap-2">
                    <button id='botonblanco' class="btn btn-primary" type="button">LOGIN</button>
                </div>
                </Link>
                <div><a href=" ">Forgot your password?</a></div>
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