
import Header from '../header_todos';
import { Link } from "react-router-dom"
import wire from '../IMAGENES-F/wire.jpg'
import asus from '../IMAGENES-F/asus.jpg'
import ddr from '../IMAGENES-F/ddr.jpg'
import nvm from '../IMAGENES-F/nvm.jpg'
import cooler from '../IMAGENES-F/cooler.jpg'
import rtx from '../IMAGENES-F/rtx.jpg'
import windows from '../IMAGENES-F/windows.jpg'
import liquid from '../IMAGENES-F/liquid.jpg'

import atx from '../IMAGENES-F/700at.jpg'
import r from '../IMAGENES-F/r.jpg'
import shop from '../IMAGENES-F/shop.png'
import paypal from '../IMAGENES-F/paypal.png'
import gpay from '../IMAGENES-F/gpay.png'
import userblack from '../IMAGENES-F/userblack.png'
import './pantalla-compra.css'
import {useState} from "react";
import {useEffect} from "react";
import { RUTA_BACKEND} from '../../conf';

  


const Pantallacompra = () => {
 

  
  //const token = localStorage.getItem("TOKEN")
  //VARIABLE QUE GUARDA EL USUARIO ID 
  const UID = localStorage.getItem("USUARIO_ID")
  //console.log(UID)

  


  const httpGuardarOrden = async (Direc,Precio, OrdenID, UsuarioID) => {
    const data= {
      Direccion : Direc,
      Monto : Precio,
      Orden_ID : OrdenID,
      Usuario_ID : UsuarioID
    }
    const resp = await fetch(
      `${RUTA_BACKEND}/Orden`,
      {
        method : "POST",
        body : JSON.stringify(data),
        headers : {
          "Content-type" : "application/json"
        }
      }
    )
    const dataResp = await resp.json()
    if(dataResp.error !== ""){
      console.error(dataResp.error)
    }
  }

 
  const [ListadoProductos, setListadoProductos] = useState()
  const [Direc, setDirec] = useState()
  const [Precio, setPrecio] = useState()
  const [OrdenID, setOrdenID] = useState()
  const [UsuarioID, setUsuarioID] = useState()
  const[ListadoOrdenes, setListadoOrdenes] = useState()
 const[ListadoInfoProductos, setListadoInfoProductos] = useState()


  
 const httpObtenerOrden = async () =>{
  const resp = await fetch(`${RUTA_BACKEND}/Orden?Usuario_ID=${UID}`)
  const data = await resp.json()
  setListadoOrdenes(data) 
}
//console.log(ListadoOrdenes)



const httpObtenerOrdenProducto = async () =>{
  const resp = await fetch(`${RUTA_BACKEND}/Orden_producto?Orden_ID=${ListadoOrdenes[0].Orden_ID}`)
  const data = await resp.json()
  setListadoProductos(data) 
  }
//console.log(ListadoProductos)


const httpObtenerInfoProductos = async () =>{
  {
  var Rango = 0
  var ListaProductos = []
  Rango = (ListadoProductos.length)
  for(let i = 0; i < Rango; i++){
    const resp = await fetch(`${RUTA_BACKEND}/Productoid?Producto_ID=${ListadoProductos[i].Producto_ID}`)
    const data = await resp.json()
    ListaProductos = data
    ListadoInfoProductos[i] = ListaProductos
    //console.log(ListadoProductos[i].Producto_ID)
  }
}
}
console.log(ListadoInfoProductos)





useEffect(() => {
  httpObtenerOrden()
 httpObtenerOrdenProducto()
 httpObtenerInfoProductos()
 

},[])
  
  const generarOrden = (Direc,Precio, OrdenID, UsuarioID) =>{

    httpGuardarOrden(Direc,Precio, OrdenID, UsuarioID)

  }

    return <div>
           
           <div className='row mx-auto'><Header/></div>
            

<div className="container text-center">
    <div className="row">
      <div className="col-7" id="Bloque1">
      <div id="Links" align="LEFT">
        <a style={{textdecoration:"none", color: "black"}} href=""> Cart {'>'}</a>  
        <a style={{textdecoration:"none", color: "black"}}  href=""> Information {'>'}</a> 
        <a style={{textdecoration:"none", color: "black"}}  href=""> Shipping {'>'}</a>  
        <a style={{textdecoration:"none", color: "black"}}  href=""> Payment  </a> 
      </div>

      <div id='textoanegro' className='mb-3 mt-3'>
        <b>
            Express Checkout
        </b>
      </div>

      <div className="row">
        <div className="col" id="colpago">
       <button id="BotonPago1" className="border-0 rounded">
        <img className="imagenpago1" src={shop}/>
       </button>
       </div>
       <div className="col" id="colpago">
        <button id="BotonPago2" className="border-0 rounded">
         <img className="imagenpago" src={paypal}/>
        </button>
        </div>
        <div className="col" id="colpago">
            <button id="BotonPago3" className="border-0 rounded">
             <img className="imagenpago" src={gpay}/>
            </button>
            </div>
      </div>
      <div>
        &nbsp;
      </div>
      <div align="CENTER" id='textoanegro'>
        OR
      </div>

      <div  className="texto" align="LEFT" id='textoanegro'>
        Contact Information
      </div>
      <div>
        &nbsp;
      </div>
      <div align="LEFT" id='textoanegro'>
        <img className="userblack" src={userblack}/>
        

      
        Ed Va (edjahevs@gmail.com) <br/>
        <a href="" style={{textdecoration:"none", color: "black"}}>Log out</a>
        
       
      
        <div>
          <label><input type="checkbox" id="cbox1" value="first_checkbox"/> Email me with news and offers</label>
         </div>


         <div>
          &nbsp;
        </div>
        
      
      <div className="texto" align="LEFT">
        Shipping Address
      </div>
      
      <div>
        &nbsp;
      </div>



      <div>

    
        <div className="input-group mb-3">
          <label className="input-group-text" for="inputGroupSelect01">Saved Addresses</label>
          <select className="form-select" id="inputGroupSelect01">
            <option selected>Choose...</option>
            <option value="1">United States (Ed Va)</option>
            <option value="2">Perú (Ed Va)</option>
            <option value="3">Argentina (Ed Va)</option>
          </select>
        </div>
      </div>

      

      <div className="input-group mb-3">
        <label className="input-group-text" for="inputGroupSelect01">Country/Region</label>
        <select className="form-select" id="inputGroupSelect01">
          <option selected>Choose...</option>
          <option value="1"> United states</option>
          <option value="2">Perú</option>
          <option value="3">Qatar</option>
          <option value="4">Argentina</option>
          <option value="5">Canada</option>
          <option value="6">España</option>
          <option value="7">Alemania</option>
         </select>
      </div>
      </div>

      <div className="row mb-3" >
        <div className="col">
          <input type="text" className="form-control" placeholder="First name" aria-label="First name"/>
        </div>
        <div className="col">
          <input type="text" className="form-control" placeholder="Last name" aria-label="Last name"/>
        </div>
      </div>

      <div className="mb-3">
        <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="Company (optional)"/>
      </div>

      <div className="mb-3">
        <input value={Direc} onChange={(evt) =>{
          setDirec(evt.target.value)
        }} type="email" className="form-control" id="exampleFormControlInput1" placeholder="Address"/>
      </div>

      <div className="mb-3">
        <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="Apartment, suite, etc. (optional)"/>
      </div>


   
      <div className="row g-3 mb-3">
        <div className="col-sm-4">
          <input type="text" className="form-control" placeholder="City" aria-label="First name"/>
        </div>
        <div className="col-sm-4">
          <input type="text" className="form-control" placeholder="Zip code" aria-label="Zip"/>
        </div>
        <div className="col-sm-4">
          <input type="text" className="form-control" placeholder="State" aria-label="Zip"/>
        </div>  

        <div >
          <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="Phone"/>
        </div>
      </div>
  
      
   
      <div align="left">
        <Link to={"/Cart"}><a href="" style={{textdecoration: "none", color: "black"}}>  Return to cart</a></Link>
        &nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;
        &nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;
        &nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;
        &nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;
        &nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;
        &nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;
        &nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; 

        
        <button className="border-0 rounded-top btn btn-primary" id='botonrosado'
        onClick={ () =>{
          generarOrden(OrdenID, UsuarioID, Precio, Direc)}}>

          <div style={{color: "white"}}>
            Continue to shipping
          </div>
        </button>
      </div>
      </div>

      
     



     
      
      <div className="col-5" id="Bloque2">

     
            

     
      
      
      <div className="input-group mb-3">
        <input type="text" className="form-control" placeholder="Discount code" aria-label="Discount code" aria-describedby="button-addon2"/>
        <button className="btn btn-outline-secondary" type="button" id="button-addon2">Apply</button>
      </div>


      </div>


    </div>

</div>


</div> 


}

export default Pantallacompra;