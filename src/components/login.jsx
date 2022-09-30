import Header from './header_todos';
import { Link } from "react-router-dom"


const Login = (props) => {

    return <div>
        <div id='contenedorR'>
            <div>LOG IN.</div>
            <div>log in with your details below to view your order.</div>
            <input type="text" class="form-control" id="floatingInput" placeholder="Email"/>
            <input type="password" class="form-control" id="floatingInput" placeholder="Password"/>
            <Link to={"/Home"}>
                <button>LOGIN</button>
            </Link>
            <div><a href=" ">Forgot your password?</a></div>
            <div>.</div>
            <div>Don't have an account?</div>
            <Link to={"/"}>
                <button>SIGN UP</button>
            </Link>
        </div>
    </div>
        
}

export default Login;