import Header from './header_todos';
import { Link } from "react-router-dom"

const Soporte =()=>{
    return <div>
        <div className='row mx-auto' align="right"><Header/></div>
        <h1 style={{textAlign:"center", color:"white"}}> Resgistre solicitud de ayuda especializada</h1>
        <form  style={{margin:"0%", textAlign:"center"}}>
            <h4 style={{color:"white"}}>Nombre</h4>
            <input type="text" className="rounded-pill" style={{width:"400px"}}/>
            <h4 style={{color:"white"}}>Correo</h4>
            <input type="text" className="rounded-pill" style={{width:" 400px"}}/>
            <h4 style={{color:"white"}}>Telefono</h4>
            <input type="text" className="rounded-pill" style={{width:"200px"}}/>
            <h4 style={{color:"white"}}>Asunto</h4>
            <p><textarea className="rounded-pill" name="descripcion" cols="60" rows="1"></textarea></p>
            <h4 style={{color:"white"}}>Descripcion</h4>
            <p><textarea className='mb-3' name="descripcion" cols="70" rows="3"></textarea></p>           
        </form>
        
        <Link to={"/Respuesta"}>
            <div>
                <button value="Enviar" type="submit"className="position-absolute top-45 start-50 translate-middle btn btn-warning">Registrar</button>
            </div>
        </Link>
    </div>
}
export default Soporte;