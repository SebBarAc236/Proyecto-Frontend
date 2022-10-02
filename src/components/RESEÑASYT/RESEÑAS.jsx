import Header from '../header_todos';
import { Link } from "react-router-dom"
import nexus from '../IMAGENES-F/nexus.png'
import linuslogo from '../IMAGENES-F/linuslogo.png'
import comillas from '../IMAGENES-F/comillas.png'

const Reseñas = () => {
    return <div>
           
           <Header/>
           <div  style="color:rgb(56,60,76); font-size:40px; margin-left: 30px;">
                <b>
                    Influencers
                </b>
                <div>
                    &nbsp;
                </div> 
            </div>
            <div className="row">
                <div className="col" >
                    <iframe width="500" height="315" src="https://www.youtube.com/embed/UhO7MLntkDE" 
                    title="YouTube video player" 
                    frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                    allowfullscreen>
                    </iframe>

                
                </div >
                <div className="col" align="center">
                    <iframe width="500" height="315" src="https://www.youtube.com/embed/b2vrvQydVIw" 
                    title="YouTube video player" frameborder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                    allowfullscreen></iframe>
                </div>





                <div className="row">
                    <div className="col" >
                        <div style={{backgroundcolor: "antiquewhite", fontsize:"13px", height: "130px", width: "500px"}} align="center"> 
                         
                           <span>
                            &nbsp; <br/>   
                            <img style={{height: "30px", width:"30px"}} src={comillas} /> 
                            You basically just pick wich games you play, wich <br/>
                            performance you want, and it'll suggest a rig for you. <br/>
                            They make things much, much simpler and again for only 75$ bucks? Okay! <br/>
                            recommend it.
                            <img style={{height: "30px", width:"30px"}} src={comillas} /> 
                            </span>
                        
                         </div>
                    </div>
                    <div className="col">
                        <div  style={{backgroundcolor: "antiquewhite", fontsize:"13px", width: "500px", marginleft: "73px"}} align="center"  > 
                         
                            <span>
                             &nbsp; <br/>   
                             <img style={{height: "30px", width:"30px"}} src={comillas} /> 
                             This computer is absolutely insane! Once again if you <br/>
                             want to check out this brand new Redux gaming PC - <br/>
                             it's an absolute super computer. Highly, highly <br/>
                             recommend it.
                             <img style={{height: "30px", width:"30px"}} src={comillas} /> 
                             </span>
                         
                          </div>
                    </div>
                </div>







            <div className="row">
                <div className="col mt-3 ms-3" >
                    <span>
                        <img style={{height: "50px", width: "50px"}} src={linuslogo} />
                    </span>
                    
                   <span>
                    <B>
                    <em> 
                    LINUS TECH TIPS.
                    </em>
                    </B>
                     <br/>
                     <div style={{backgroundcolor:"orange", width:"190px", height:"10px", marginleft: "60px"}}>

                     </div>
                    <div style={{fontsize:"15px", marginleft:"60px", color:"black"}}>
                        Thanks to @LinusTechTips for showing off the unboxing <br/>
                         of the #BuildRedux PC! Check 
                        out his video to see his PC <br/>
                         and setup!
                    </div>
                   </span>
                </div>



                <div className="col  mt-3">
                    <span>
                        <img style={{height: "50px", width: "50px", marginleft: "80px"}} src={nexus} />
                    </span>
                    
                   <span>
                    <B>
                    <em> 
                    NEXUS GAMERS.
                    </em>
                    </B>
                     <br/>
                     <div style={{backgroundcolor:"aqua", width:"190px", height:"10px", marginleft: "142px"}}>

                     </div>
                    <div style={{fontsize:"15px", marginleft:"142px", color:"black"}}>
                        Thanks for the awesome review @NexusGamers<br/>
                         
                    </div>
                   </span>
                </div>

            </div>





            </div>



           </div>
           
         

}
export default Reseñas;