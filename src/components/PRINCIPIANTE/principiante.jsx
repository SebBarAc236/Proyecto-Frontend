import Header from '../header_todos';
import { Link } from "react-router-dom"


const Principiante = () => {
    return <div>
            <div>
            <span id="titulo" className="texto" style="color: white; font-size: 35px;">
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
                <button className="rounded border-0" style="height:50px ; width:150px">
                    Back
                </button>
                <span>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                </span>
                <button className="rounded border-0" style="height:50px ; width:150px; background-color: rgba(195,90,234,255);" >
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
                    <img src="/mando2.png" width="110" height="50" />
                    <div className="Boton" style="color: white;">
                        <b> Gaming</b>
                    </div>
                </button>
            </div>
            <div className="col" id= "contentcol" >
                <button id="boton" type="button" className="bg-secondary rounded border-0" 
                   >
                    <img src="/design.png" width="110" height="50" />
                    <div className="Boton" style="color: white;">
                        <b> Design</b>
                    </div>
                </button>
            </div>
            <div className="col" id= "contentcol" style="margin-right: 350px;">
                <button id="boton" type="button" className="bg-secondary rounded border-0" 
                >
                <img src="codingg.png" width="110" height="50" />
                <div className="Boton" style="color: white;">
                    <b> Coding</b>
                </div>
            </button>
            </div>
          
        </div>
        <div className="row" id="contentrow">
            <div className="col" id= "contentcol" style="height: 100%;">
                <button id="boton" type="button" className="bg-secondary rounded border-0" 
                >
                <img src="rendering.png" width="110" height="50"/>
                <div className="Boton" style="color: white;">
                    <b> Rendering</b>
                </div>
            </button>
            </div>
            <div className="col" id= "contentcol" >
                <button id="boton" type="button" className="bg-secondary rounded border-0" 
                >
                <img src="officefinal.png" width="110" height="50" />
                 <div className="Boton" style="color: white;">
                        <b> Office</b>
                    </div>
            </button>
            </div>
            <div className="col" id= "contentcol" style="margin-right: 350px;">
                <button id="boton" type="button" className="bg-secondary rounded border-0" 
                >
                <img src="other.png" width="110" height="50" />
                <div className="Boton" style="color: white;">
                    <b> Other</b>
                </div>
            </button>
            </div>

    </div>
    </div>
}
export default Principiante;