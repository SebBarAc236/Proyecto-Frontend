import Header from '../header_todos';
import { Link } from "react-router-dom"
import star from '../IMAGENES-F/5star.png'
import './review.css'
const Reviews = () => {
    return <div>
           
           <div className='row mx-auto'><Header/></div>

           <div id='tituloreview' >
                <b >
                    User reviews
                </b>
                <div>
                    &nbsp;
                </div> 
             
               <div id='contenidoreview' >
                <b >
                    Global rate                 &nbsp; &nbsp;

                    <img id="estrellas"  src={star}/>
                </b>
                <div  className="border-bottom border-2">
                    &nbsp;
                </div>
               </div>


               <div>
                &nbsp;
              </div> 
               <div id='contenidoreview' >
                <b >
                    Juan Lopez
                </b>
                <div>
                    &nbsp;
                  </div>
                <div  id='reviews'>
                    I completely recomend this service
                </div>
                <div  className="border-bottom border-2">
                    &nbsp;
                </div>
               </div>


               <div>
                &nbsp;
              </div> 
               <div id='contenidoreview' >
                <b >
                    Jhon Doe
                </b>
                <div>
                    &nbsp;
                  </div>
                <div  id='reviews' >
                    Great service
                </div>
                <div  className="border-bottom border-2">
                    &nbsp;
                </div>
               </div>

               <div>
                &nbsp;
              </div> 
               <div id='contenidoreview' >
                <b>
                    Carl Johnson
                </b>
                <div>
                    &nbsp;
                  </div>
                <div  id='reviews' >
                    Pc well builded and nice case quality
                </div>
    
               </div>
            
            </div>
    
    



        </div>

}
export default Reviews;