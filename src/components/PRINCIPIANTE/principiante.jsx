import Header from '../header_todos';
import { Link } from "react-router-dom"
import mando1 from '../IMAGENES-F/mando1.png'
import design1 from '../IMAGENES-F/design1.png'
import rendering from '../IMAGENES-F/rendering1'
import office from '../IMAGENES-F/office'
import other1 from '../IMAGENES-F/other1'
import './principiante.css'



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
                    <img src={mando1} style={{width:"110px", height:"50px"}} />
                    <div className="Boton" style={{color: "white"}}>
                        <b> Gaming</b>
                        </div>
                </button>
            </div>
            <div class="col" id= "contentcol" >
                <button id="boton" type="button" class="bg-secondary rounded border-0" 
                   >
                    <img src={design1} style={{width:"110px", height:"50px"}}/>
                    <div class="Boton" style={{color: "white"}}>
                        <b> Design</b>
                    </div>
                </button>
            </div>
            <div class="col" id= "contentcol" style={{width:"110%", height:"50%"}}>
                <button id="boton" type="button" class="bg-secondary rounded border-0" 
                >
                <img src={coding} style={{width:"110px", height:"50px"}} />
                <div class="Boton" style={{color: "white"}}>
                    <b> Coding</b>
                </div>
            </button>
            </div>
          
        </div>
        <div class="row" id="contentrow">
            <div class="col" id= "contentcol" style={{width:"110%", height:"50%"}}>
                <button id="boton" type="button" class="bg-secondary rounded border-0" 
                >
                <img src={rendering} style={{width:"110px", height:"50px"}} />
                <div class="Boton" style={{color: "white"}}>
                    <b> Rendering</b>
                </div>
            </button>
            </div>
            <div class="col" id= "contentcol" >
                <button id="boton" type="button" class="bg-secondary rounded border-0" 
                >
                <img src={office} style={{width:"110", height:"50"}} />
                 <div class="Boton" style={{color: "white"}}>
                        <b> Office</b>
                    </div>
            </button>
            </div>
            <div class="col" id= "contentcol" style={{marginright: "350px"}}>
                <button id="boton" type="button" class="bg-secondary rounded border-0" 
                >
                <img src={other1} style={{width:"110", height:"50"}} />
                <div class="Boton" style={{color: "white"}}>
                    <b> Other</b>
                </div>
            </button>
            </div>

           

        </div>

       

        </div>
                    
               
}
export default Principiante;