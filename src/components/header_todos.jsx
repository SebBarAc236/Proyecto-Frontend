import { useState } from "react";
import { Link } from "react-router-dom";
import './INICIO/loginstyle.css'
const Header = () => 
{
    const [inputSearch, setInputSearch] = useState("");
    const[escondido, setEscondido] = useState(true);
    const[escondidoD, setEscondidoD] = useState(true);
    const inputHandler = (e) => 
    {
        setInputSearch(e.target.value);
        e.target.value = e.target.value.toLowerCase();
        if(e.target.value == "")
        {
            setEscondidoD(true);
        }
        else if("NVIDIA GEFORCE GTX 1650 4GB".toLowerCase().includes(e.target.value))
        {
            console.log("it worked");
            setEscondidoD(false);
        }
        else
        {
            setEscondidoD(true);
        }

    }
    return <div> 
        <div className="header-right d-flex flex-row-reverse">
            
            <Link to={"/Register"}><a id="botonMorado" className="btn btn-primary" role="button">Sign Up</a></Link>
            <Link to={"/Login"}><a id="botonMorado" className="btn btn-primary" role="button">Sign In</a></Link>
        
            <Link to={"/Perfil"}><img src="https://cdn-icons-png.flaticon.com/512/1077/1077063.png" alt="Perfil" /></Link>
            <Link to={"/Cart"}><img className="links" src="https://cdn-icons-png.flaticon.com/512/833/833314.png" alt="Cart" /></Link>
            <img onClick={() => setEscondido(!escondido)} src="https://cdn-icons-png.flaticon.com/512/7018/7018972.png" alt="Search" />
            <div hidden={escondido} id="pSearch" className="position-relative">
                <input  id="searchInput" type="text" className="form-control m-2" 
                value={inputSearch} onChange={inputHandler}/>
                <div hidden={escondidoD} id="card" className="bg-white card">
                    <div className="p-2">Products</div>
                    <hr />
                    <Link to={"/Producto"} className="prod d-flex text-secondary">
             
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxJtWO9rlPsNocaOb2hpjn9-5igenkCWzaVQ&usqp=CAU" alt="NVIDIA" />
                        <div className="d-flex flex-column">
                            <div className="pr fw-semibold fst-italic"> NVIDIA GEFORCE GTX 1650 4GB</div>
                            <div>Redux</div>
                            <div>$229</div>
                        </div>
             
                    </Link>
                    <hr />
                    <div className="prod p-2">Search for "{inputSearch}"...</div>
                </div>
                
            </div>
            <a className="letras" href="#about">Ranking</a>
            <Link to={"/Reviews"}><button className="letras" id="botonreviews" href="#about">Reviews</button></Link>
            <a className="letras" href="#contact">Support</a>
            <a className="letras">About</a>
            <Link to={"/"} className="letras">Home</Link>
        </div>
    </div>
}

export default Header;