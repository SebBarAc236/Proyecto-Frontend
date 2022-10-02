import Header from '../header_todos';
import { Link } from "react-router-dom"
import './loginstyle.css'

const Olvidada =()=>{
    return <div>
        <div className='row' align="right"><Header/></div>
        <div className='container'>
            
            <div className='row' id='ignore'>.</div>
            <div className='row'>
            <div className='col'></div>
            <div  className='col-4'   id='contenedorR'>
                &nbsp;
                <div id='tituloContenedorR'>RESTORE YOUR PASSWORD</div>
                <div id='textoContenedorR'>We need to verify your identity. Please enter your email to recieve a code to restore your password</div>
                &nbsp;
                <input type="text" class="form-control" id="floatingInput" placeholder="Email"/>
                &nbsp;
                <div class="d-grid gap-2">
                    <button id='botonblanco' class="btn btn-primary" type="button">SEND CODE</button>
                </div>
                &nbsp;
                <input type="text" class="form-control" id='floatingInput' placeholder='Verification code'/>
                &nbsp;
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

export default Olvidada;