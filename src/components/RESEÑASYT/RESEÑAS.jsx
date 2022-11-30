import Header from '../header_todos';
import { Link } from "react-router-dom"
import nexus from '../IMAGENES-F/nexus.png'
import linuslogo from '../IMAGENES-F/linuslogo.png'
import comillas from '../IMAGENES-F/comillas.png'
import './reseñas.css'
import {useState} from "react";
import {useEffect} from "react";
const Reseñas = () => {
    const[ListadoInfluencers, setListadoInfluencers] = useState([])

 
    const httpObtenerInfluencers = async () =>{
        const resp = await fetch("http://localhost:4321/Resena2")
        const data = await resp.json()
        setListadoInfluencers(data)
    }

    //Hook 
    useEffect(() => {
        httpObtenerInfluencers()
    },[])

    return <div>

           <div className='row mx-auto' align="right"><Header/></div>
           <div className='container' id='influencers'>




           <div id="titulo" >
                <b>
                    Influencers
                </b>
                <div>
                    &nbsp;
                </div> 
            </div>


            {
              
              (()=>{
                  return ListadoInfluencers.map((Influencer) => {
                      return <div className="row">
                      <div className="col" >
                      <div class="ratio ratio-16x9">
                      <iframe  id="video" src={Influencer.Link_infl} title="YouTube video" allowFullScreen></iframe>
                      </div>
                      </div >
      
                   
                  </div>
                  })
              })()
             }
   
            {
              
              (()=>{
                  return ListadoInfluencers.map((Influencer) => {
                    return <div className="row">
                    <div className="col" >
                        <div id="cuadrado1"  align="center"> 
                         
                           <span>
                            &nbsp; <br/>   
                            <img className='img-fluid' id="comillas" src={comillas} width="30" height="30" /> 
                            {Influencer.Comentario}
                            <img className='img-fluid' id="comillas" src={comillas} width="30" height="30" /> 
                            </span>
                        
                            </div>
                        </div>
                    
                    </div> 
      
                  })
              })()
            }




           







            <div className="row">
                <div className="col mt-3 ms-3" >
                    <span>
                        <img id="logo1" className='img-fluid' src={linuslogo} width="50" height="50" />
                    </span>
                    
                   <span>
                    <b>
                    <em id='nombreinfl'> 
                    LINUS TECH TIPS.
                    </em>
                    </b>
                     <br/>
                     <div id="linea1" >

                     </div>
                    <div id="agradecimiento1" >
                        Thanks to @LinusTechTips for showing off the unboxing <br/>
                         of the #BuildRedux PC! Check 
                        out his video to see his PC <br/>
                         and setup!
                    </div>
                   </span>
                </div>



                <div className="col  mt-3">
                    <span>
                        <img id="logo2" className='img-fluid' src={nexus} width="50" height="50"/>
                    </span>
                    
                   <span>
                    <b>
                    <em id='nombreinfl'> 
                    NEXUS GAMERS.
                    </em>
                    </b>
                     <br/>
                     <div id="linea2" >

                     </div>
                    <div id="agradecimiento2" >
                        Thanks for the awesome review @NexusGamers<br/>
                         
                    </div>
                   </span>
                </div>

            </div>

            ****************








            </div>




            </div>




           
           
         

}
export default Reseñas;