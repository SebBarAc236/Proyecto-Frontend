import Header from '../header_todos';
import { Link } from "react-router-dom"
import './loginstyle.css'

const Register = (props) => {

    return <div>
        <div className='row' align="right"><Header/></div>
        <div className='container'>
            <div className='row' id='ignore'>.</div>
            <div className='row'>
            <div className='col'></div>
            <div  className='col-4'   id='contenedorR'>
                <div id='ignore'>.</div>
                <div id='tituloContenedorR'>CREATE ACCOUNT</div>
                <div id='ignore'>.</div>
                <input type="text" class="form-control" id="floatingInput" placeholder="First Name"/>
                <div id='ignore'>.</div>
                <input type="text" class="form-control" id="floatingInput" placeholder="Last Name"/>
                <div id='ignore'>.</div>
                <input type="text" class="form-control" id="floatingInput" placeholder="Email"/>
                <div id='ignore'>.</div>
                <input type="password" class="form-control" id="floatingInput" placeholder="Password"/>
                <div id='ignore'>.</div>
                <Link to={"/"}>
                <div class="d-grid gap-2">
                    <button id='botonblanco' class="btn btn-primary" type="button">CREATE</button>
                </div>
                </Link>
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