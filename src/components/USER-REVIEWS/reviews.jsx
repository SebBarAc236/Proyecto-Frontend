import Header from '../header_todos';
import { Link } from "react-router-dom"
import star from '../IMAGENES-F/5star.png'
import './review.css'
import {useState} from "react";
import {useEffect} from "react";
import { RUTA_BACKEND} from '../../conf';


const Reviews = () => {
    //Variable de estado
    const[ListadoReviews, setListadoReviews] = useState([])

 
    const httpObtenerReviews = async () =>{
        const resp = await fetch(`${RUTA_BACKEND}/Resena`)
        const data = await resp.json()
        setListadoReviews(data)
    }

    //Hook 
    useEffect(() => {
        httpObtenerReviews()
    },[])

    return <div>
           
           <div className='row mx-auto'><Header/></div>

           <div id='tituloreview' >
                <b>
                    <div id='titulotitulo'> User reviews</div>
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

               


                
                {
              
                            (()=>{
                                return ListadoReviews.map((Review) => {
                                    return <div id='contenidoreview'>
                                    <b >
                                    {`${Review.Usuario.Nombre} ${Review.Usuario.Apellido}`}
                                    </b>
                                    <div>
                                     &nbsp;
                                     </div>
                                     <div  id='reviews'>
                                        {Review.Comentario}
                                     </div>   
                                     <div  className="border-bottom border-2">
                                         &nbsp;
                                    </div>
    
                                </div>
                                })
                            })()
                }
                 
                    

             
                <Link to={"/Resenas"}>
               <button className='btn btn-primary rounder' id='botonrosadoinfl'> INFLUENCERS REVIEW</button>
               </Link>
            </div>
            
    



        </div>

}
export default Reviews;