import Header from './header_todos';
import { Link } from "react-router-dom"


const Register = (props) => {

    return <div>
        <div id='contenedorR'>
            <div>CREATE ACCOUNT</div>
            <input type="text" class="form-control" id="floatingInput" placeholder="First Name"/>
            <input type="text" class="form-control" id="floatingInput" placeholder="Last Name"/>
            <input type="text" class="form-control" id="floatingInput" placeholder="Email"/>
            <input type="password" class="form-control" id="floatingInput" placeholder="Password"/>
            <Link to={"/Home"}>
                <button>CREATE</button>
            </Link>
            <div> Already registered? Try <Link to={"/Login"}>sign in</Link></div>
        </div>
    </div>
   
        
}

export default Register;