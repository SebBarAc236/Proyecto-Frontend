import Header from '../header_todos';
import { Link } from "react-router-dom"
import mando1 from '../IMAGENES-F/mando1.png'


const Principiante = () => {
    return <div>
            <Header/>
            <div>
            <span id="titulo" className="texto" style={{color: "white", fontsize: "35px"}}>
                <b>
                    What do you need?
                </b>
                
            </span>

            <span>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        
            
            
        
            </span>
            <span ALIGN="RIGHT">
                <button className="rounded border-0" style={{height: "50px" , width: "150px"}}>
                    Back
                </button>
                <span>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                </span>
                <button className="rounded border-0" style={{height: "50px" , width: "150px", backgroundcolor: "rgba(195,90,234,255)"}} >
                    Next
                </button>
            </span>
            <div>
                &nbsp; 
            </div>
            <div>
                &nbsp; 
            </div>
            <div>
                &nbsp; 
            </div>
        </div>
        <div className="row mb-5" id="contentrow" >
            <div className="col" id= "contentcol"  >
                <button id="boton" type="button" className="bg-secondary rounded border-0" 
                    >
                    <img src={mando1} style={{width:"110", height:"50"}} />
                    <div className="Boton" style={{color: "white"}}>
                        <b> Gaming</b>
                    </div>
                    </button>
                    </div>
                    </div>
                    </div>
                    
               
}
export default Principiante;