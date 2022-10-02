import Header from '../header_todos';
import { Link } from "react-router-dom"
import star from '../IMAGENES-F/5star.png'
import './review.css'
const Reviews = () => {
    return <div>
           
           <div className='row mx-auto'><Header/></div>

           <div style={{color:"black", background:"white", fontsize:"25px", marginleft: "30px", height:"887px"}}>
                <b id='tituloreview'>
                    User reviews
                </b>
                <div>
                    &nbsp;
                </div> 
             
               <div style={{fontsize:"18px"}}>
                <b id='contenidoreview'>
                    Global rate                 &nbsp; &nbsp;

                    <img style={{height: "35px", width: "120px"}} src={star}/>
                </b>
                <div  className="border-bottom border-2">
                    &nbsp;
                </div>
               </div>


               <div>
                &nbsp;
              </div> 
               <div style={{fontsize:"18px"}}>
                <b id='contenidoreview'>
                    Juan Lopez
                </b>
                <div>
                    &nbsp;
                  </div>
                <div  id='contenidoreview' style={{fontsize:"14px", marginleft: "20px"}}>
                    I completely recomend this service
                </div>
                <div  className="border-bottom border-2">
                    &nbsp;
                </div>
               </div>


               <div>
                &nbsp;
              </div> 
               <div style={{fontsize:"18px"}}>
                <b id='contenidoreview'>
                    Jhon Doe
                </b>
                <div>
                    &nbsp;
                  </div>
                <div  id='contenidoreview' style={{fontsize:"14px", marginleft: "20px"}}>
                    Great service
                </div>
                <div  className="border-bottom border-2">
                    &nbsp;
                </div>
               </div>

               <div>
                &nbsp;
              </div> 
               <div style={{fontsize:"18px"}}>
                <b id='contenidoreview'>
                    Carl Johnson
                </b>
                <div>
                    &nbsp;
                  </div>
                <div  id='contenidoreview' style={{fontsize:"14px", marginleft: "20px"}}>
                    Pc well builded and nice case quality
                </div>
    
               </div>
            
            </div>
    
    



        </div>

}
export default Reviews;