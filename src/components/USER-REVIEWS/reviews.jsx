import Header from '../header_todos';
import { Link } from "react-router-dom"
import star from '../IMAGENES-F/5star.png'

const Reviews = () => {
    return <div>
           
           <Header/>

           <DIV  style={{color:"rgb(56,60,76)", fontsize:"25px", marginleft: "30px"}}>
                <b>
                    User reviews
                </b>
                <div>
                    &nbsp;
                </div> 
             
               <div style={{fontsize:"18px"}}>
                <b>
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
                <b>
                    Juan Lopez
                </b>
                <div>
                    &nbsp;
                  </div>
                <div style={{fontsize:"14px", marginleft: "20px"}}>
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
                <b>
                    Jhon Doe
                </b>
                <div>
                    &nbsp;
                  </div>
                <div style={{fontsize:"14px", marginleft: "20px"}}>
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
                <b>
                    Carl Johnson
                </b>
                <div>
                    &nbsp;
                  </div>
                <div style={{fontsize:"14px", marginleft: "20px"}}>
                    Pc well builded and nice case quality
                </div>
    
               </div>
            
            </DIV>
    
    



        </div>

}
export default Reviews;