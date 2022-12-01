import Header from '../header_todos';
import { Link } from "react-router-dom"
import mando1 from '../IMAGENES-F/mando1.png'
import design1 from '../IMAGENES-F/design1.png'


import rendering from '../IMAGENES-F/rendering1.png'
import office from '../IMAGENES-F/office.png'
import other1 from '../IMAGENES-F/other1.png'
import coding from '../IMAGENES-F/coding.png'
import './principiante.css'
import { useState } from 'react';
import { RUTA_BACKEND} from '../../conf';



const Principiante = () => {
    const [OptionSelected, setOptionSelected] = useState("")
    return <div>
            <Header/>
            <div className='container'>
            <div>
                &nbsp; 
            </div>
            <div>
                &nbsp; 
            </div>
            <div id="primeralinea">
            <span id="titulo" className="texto" >
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
                <Link to={"/"}>
                    <button  className="btn btn-primary rounded" id="botonblanco" >
                        Back
                    </button>
                </Link>
                <span>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                </span>
                <Link to={"/Recomendado"}>
                <button className="btn btn-primary rounded" id="botonrosado"  >
                    Next
                </button>
                </Link>
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
        <div className="row mb-5" align="center" id="contentrow" >
            <div className="col" align="center" id= "contentcol1"  >
                <button onClick={(evt) => {setOptionSelected(evt.target.value)}} key="1" value="1" id="boton" type="button" className=" rounded border-0" 
                    >
                    <img id="icons" src={`${RUTA_BACKEND}/imagenes/mando1.png`}/>
                    <div className="Boton" >
                        <b> Gaming</b>
                        </div>
                </button>
            </div>
            <div class="col" align="center" id= "contentcol" >
                <button onClick={(evt) => {setOptionSelected(evt.target.value)}} key="2" value="2" id="boton" type="button" class=" rounded border-0" 
                   >
                    <img  id="icons" src={design1}/>
                    <div class="Boton" >
                        <b> Design</b>
                    </div>
                </button>
            </div>
            <div class="col" align="center" id= "contentcol" >
                <button onClick={(evt) => {setOptionSelected(evt.target.value)}} key="3" value="3" id="boton" type="button" class=" rounded border-0" 
                >
                <img  id="icons" src={coding}  />
                <div class="Boton" >
                    <b> Coding</b>
                </div>
            </button>
            </div>
          
        </div>
        <div class="row" align="center "id="contentrow">
            <div class="col" align="center" id= "contentcol" >
                <button onClick={(evt) => {setOptionSelected(evt.target.value)}} key="4" value="4" id="boton" type="button" class=" rounded border-0" 
                >
                <img  id="icons" src={rendering}  />
                <div class="Boton" >
                    <b> Rendering</b>
                </div>
            </button>
            </div>
            <div class="col" align="center" >
                <button onClick={(evt) => {setOptionSelected(evt.target.value)}} key="5" value="5" id="boton" type="button" class=" rounded border-0" 
                >
                <img  id="icons" src={office}  />
                 <div class="Boton" >
                        <b> Office</b>
                    </div>
            </button>
            </div>
            <div class="col" align="center" id="contentcolmargin" >
                <button onClick={(evt) => {setOptionSelected(evt.target.value)}} key="6" value="6" id="boton" type="button" class=" rounded border-0" 
                >
                <img  id="icons" src={other1}  />
                <div class="Boton">
                    <b> Other</b>
                </div>
            </button>
            </div>

           

        </div>
        </div>
       

        </div>
                    
               
}
export default Principiante;