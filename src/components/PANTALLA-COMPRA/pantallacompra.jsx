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



const Principiante = () => {
    return <div>
           
           <Header/>
            

<div class="container text-center">
    <div class="row">
      <div class="col-7" id="Bloque1">
      <div id="Links" align="LEFT">
        <a style={{textdecoration:"none", color: "black"}} href=""> Cart {'>'}</a>  
        <a style={{textdecoration:"none", color: "black"}}  href=""> Information {'>'}</a> 
        <a style={{textdecoration:"none", color: "black"}}  href=""> Shipping {'>'}</a>  
        <a style={{textdecoration:"none", color: "black"}}  href=""> Payment  </a> 
      </div>

      <DIV>
        <b>
            Express Checkout
        </b>
      </DIV>

      <div class="row">
        <div class="col" id="colpago">
       <button id="BotonPago1" class="border-0 rounded">
        <img class="imagenpago1" src={shop}/>
       </button>
       </div>
       <div class="col" id="colpago">
        <button id="BotonPago2" class="border-0 rounded">
         <img class="imagenpago" src={paypal}/>
        </button>
        </div>
        <div class="col" id="colpago">
            <button id="BotonPago3" class="border-0 rounded">
             <img class="imagenpago" src={gpay}/>
            </button>
            </div>
      </div>
      <div>
        &nbsp;
      </div>
      <div align="CENTER">
        OR
      </div>

      <div  class="texto" align="LEFT">
        Contact Information
      </div>
      <div>
        &nbsp;
      </div>
      <div align="LEFT">
        <img class="userblack" src="userblack.png"/>
      

      
        Ed Va (edjahevs@gmail.com) <br/>
        <a href="" style="text-decoration:none; color: black;">Log out</a>
        
       
      
        <div>
          <label><input type="checkbox" id="cbox1" value="first_checkbox"/> Email me with news and offers</label>
         </div>


         <div>
          &nbsp;
        </div>
        
      
      <div class="texto" align="LEFT">
        Shipping Address
      </div>
      
      <div>
        &nbsp;
      </div>



      <DIV>

    
        <div class="input-group mb-3">
          <label class="input-group-text" for="inputGroupSelect01">Saved Addresses</label>
          <select class="form-select" id="inputGroupSelect01">
            <option selected>Choose...</option>
            <option value="1">United States (Ed Va)</option>
            <option value="2">Perú (Ed Va)</option>
            <option value="3">Argentina (Ed Va)</option>
          </select>
        </div>
      </DIV>

      

      <div class="input-group mb-3">
        <label class="input-group-text" for="inputGroupSelect01">Country/Region</label>
        <select class="form-select" id="inputGroupSelect01">
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

      <div class="row mb-3" >
        <div class="col">
          <input type="text" class="form-control" placeholder="First name" aria-label="First name"/>
        </div>
        <div class="col">
          <input type="text" class="form-control" placeholder="Last name" aria-label="Last name"/>
        </div>
      </div>

      <div class="mb-3">
        <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="Company (optional)"/>
      </div>

      <div class="mb-3">
        <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="Address"/>
      </div>

      <div class="mb-3">
        <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="Apartment, suite, etc. (optional)"/>
      </div>


   
      <div class="row g-3 mb-3">
        <div class="col-sm-4">
          <input type="text" class="form-control" placeholder="City" aria-label="First name"/>
        </div>
        <div class="col-sm-4">
          <input type="text" class="form-control" placeholder="Zip code" aria-label="Zip"/>
        </div>
        <div class="col-sm-4">
          <input type="text" class="form-control" placeholder="State" aria-label="Zip"/>
        </div>  

        <div >
          <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="Phone"/>
        </div>
      </div>
  
      
   
      <div align="left">
        <a href="" style={{textdecoration: "none", color: "black"}}>  Return to cart</a>
        &nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;
        &nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;
        &nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;
        &nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;
        &nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;
        &nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;
        &nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; 

        <button class="border-0 rounded-top" style={{backgroundcolor: "rgba(195,90,234,255)"}}>
          <div style={{color: "white"}}>
            Continue to shipping
          </div>
        </button>
      </div>
      

      
     



     




      <div 
      class="col-5" id="Bloque2">
      <div class="textocomponentes" align="LEFT">
        <img class="componentes" src={r} />
          <b>
          
          Build + Setup + Testing + Warranty
          &nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; 
          &nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; 
          &nbsp; &nbsp; 
          $99.00
        </b>
      </div>
      <div class="textocomponentes" align="LEFT">
        <img class="componentes" src={atx} />
          <b>
          
          700" ATX 80 Plus Gold
          &nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; 
          &nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; 
          &nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; 
          &nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; 
          &nbsp; &nbsp; 
          $79.00
        </b>
      </div>
      <div class="textocomponentes " align="LEFT">
        <img class="componentes" src={liquid} />
          <b>
          
          CM Masterliquid ML240L
          &nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; 
          &nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; 
          &nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; 
          &nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; 
           
          $89.00
        </b>
      </div>
      <div class="textocomponentes" align="LEFT">
        <img class="componentes" src={windows}/ >
          <b>
          
          Windows 11 Home + USB Recovery
          &nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; 
          &nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; 
          &nbsp; 
          $120.00
        </b>
      </div>
      <div class="textocomponentes" align="LEFT">
        <img class="componentes" src={rtx}/ >
          <b>
          
          NVIDIA GeForce RTX 3070 8GB (VR Ready)
          &nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; 
          
          $679.00
        </b>
      </div>
      <div class="textocomponentes" align="LEFT">
        <img class="componentes" src={cooler} />
          <b>
          
          Cooler Master TD500 RGB
          &nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; 
          &nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; 
          &nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; 
          &nbsp; &nbsp;&nbsp; &nbsp; 
          
          $99.00
        </b>
      </div>
      <div class="textocomponentes" align="LEFT">
        <img class="componentes" src={nvm} />
          <b>
          
          1TB NVMe M.2
          &nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; 
          &nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; 
          &nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; 
          &nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; 
          &nbsp; &nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          $99.00
        </b>
      </div>
      <div class="textocomponentes" align="LEFT">
        <img class="componentes" src={ddr} />
          <b>
          
          16GB DDR Dual Channel
          &nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; 
          &nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; 
          &nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; 
          &nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; 
      
          $69.00
        </b>
      </div>
      <div class="textocomponentes" align="LEFT">
        <img class="componentes" src={asus} />
          <b>
          
          ASUS PRIME B660M-A | Intel
          &nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; 
          &nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; 
          &nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; 
          &nbsp;  
          $149.00
        </b>
      </div>
      <div class="textocomponentes" align="LEFT">
        <img class="componentes" src={wire}/ >
          <b>
          
          Wireless 802.11ac
          &nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; 
          &nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; 
          &nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; 
          &nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; 
          &nbsp; &nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          $29.00
        </b>
      </div>
      <div>
        &nbsp;
      </div>
      <div>
        &nbsp;
      </div>
      <div>
        &nbsp;
      </div>
      <div>
        &nbsp;
      </div>
      <div>
        &nbsp;
      </div>
      <div>
        &nbsp;
      </div>
      <div>
        &nbsp;
      </div>
      <div>
        &nbsp;
      </div>
      
      <div class="input-group mb-3">
        <input type="text" class="form-control" placeholder="Discount code" aria-label="Discount code" aria-describedby="button-addon2"/>
        <button class="btn btn-outline-secondary" type="button" id="button-addon2">Apply</button>
      </div>


      </div>


    </div>

</div>


</div> 

</div>
}