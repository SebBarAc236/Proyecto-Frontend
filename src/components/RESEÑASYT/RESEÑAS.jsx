import Header from '../header_todos';
import { Link } from "react-router-dom"
import nexus from '../IMAGENES-F/nexus.png'
import linuslogo from '../IMAGENES-F/linuslogo.png'
import comillas from '../IMAGENES-F/comillas.png'
import './reseñas.css'
const Reseñas = () => {
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
            <div className="row">
                <div className="col" >
                <div class="ratio ratio-16x9">
                <iframe  id="video" src="https://www.youtube.com/embed/UhO7MLntkDE" title="YouTube video" allowFullScreen></iframe>
                </div>
                </div >

                <div className="col" align="center">
                <div class="ratio ratio-16x9">
                <iframe id="video" src="https://www.youtube.com/embed/b2vrvQydVIw"  title="YouTube video" allowFullScreen></iframe>
                </div>
                </div>
            </div>




                <div className="row">
                    <div className="col" >
                        <div id="cuadrado1"  align="center"> 
                         
                           <span>
                            &nbsp; <br/>   
                            <img className='img-fluid' id="comillas" src={comillas} width="30" height="30" /> 
                            You basically just pick wich games you play, wich <br/>
                            performance you want, and it'll suggest a rig for you. <br/>
                            They make things much, much simpler and again for only 75$ bucks? Okay! <br/>
                            recommend it.
                            <img className='img-fluid' id="comillas" src={comillas} width="30" height="30" /> 
                            </span>
                        
                         </div>
                    </div>
                    <div className="col">
                        <div id="cuadrado2"  align="center"  > 
                         
                            <span>
                             &nbsp; <br/>   
                             <img className='img-fluid' id="comillas" src={comillas} width="30" height="30" /> 
                             This computer is absolutely insane! Once again if you <br/>
                             want to check out this brand new Redux gaming PC - <br/>
                             it's an absolute super computer. Highly, highly <br/>
                             recommend it.
                             <img className='img-fluid' id="comillas" src={comillas} width="30" height="30" />
                             </span>
                         
                          </div>
                    </div>
                </div>







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





            </div>
            </div>




           
           
         

}
export default Reseñas;