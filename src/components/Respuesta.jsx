import Header from './header_todos';
import { Link } from "react-router-dom"

const Respuesta =()=>{
    return <div>
        <div className='row mx-auto' align="right"><Header/></div>
        <h4  style={{textAlign:"center",position:"relative", top:"350px", color:"white"}}>Se envio su solicitud satisfactoriamente</h4>
        <Link to={"/"}>
            <button className="position-absolute top-50 start-50 translate-middle btn btn-warning">Retornar a pagina principal</button>
        </Link>
    </div>
}   
export default Respuesta;