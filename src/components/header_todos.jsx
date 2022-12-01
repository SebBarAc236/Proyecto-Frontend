import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import './INICIO/loginstyle.css'
import { RUTA_BACKEND } from '../conf';

const Header = (props) => 
{
    const [inputSearch, setInputSearch] = useState("");
    const [listadoUsuarios, setListadoUsuarios] = useState([]);
    const [escondido, setEscondido] = useState(true);
    const [escondidoD, setEscondidoD] = useState(true);
    const [listadoProductos, setListadoProductos] = useState([])
    const [prod_filtrado, setProd_filtrado] = useState([]);
    const token = localStorage.getItem("TOKEN")

    const httpObtenerProductos = async () => {
        const resp = await fetch(`${RUTA_BACKEND}/Producto`)
        const data = await resp.json()
        console.log(data)
        setListadoProductos(data)
    }

    const httpObtenerUsuarios = async (usuarioCorreo = null) => {
        const ruta = usuarioCorreo == null ? 
            `${RUTA_BACKEND}/Usuario`: 
            `${RUTA_BACKEND}/Usuario?Correo=${usuarioCorreo}`
        const resp = await fetch(ruta)
        const data = await resp.json()
        console.log(data)
        setListadoUsuarios(data)
    }
    
    const wii = useRef(null);
    
    useEffect(() => 
    {
        const handleClickOutside = (event) => {
            if (wii.current && !wii.current.contains(event.target)) {
                setEscondidoD(() => true);;
            }
          };
          document.addEventListener('click', handleClickOutside, true);
          return () => {
            document.removeEventListener('click', handleClickOutside, true);
          };
    }, [])

    useEffect(() => {
        httpObtenerProductos();
        httpObtenerUsuarios(token);

    }, [])


    const onProductoSelected = (producto) => {
        console.log("Se selecciono producto " +  producto)
        httpObtenerProductos(producto)
    }

    const inputHandler = (e) => 
    {
        setInputSearch(() => e.target.value)
        const inputBarra = e.target.value.toLowerCase();
        const filtrado = listadoProductos.filter(producto => producto.Nombre.toLowerCase().includes(inputBarra));
        setProd_filtrado(() => filtrado)
        
        if(filtrado.length == 0)
        {
            setEscondidoD(() => true);
        }
        else if(inputBarra == "")
        {
            setEscondidoD(() => true);
        }
        else
        {
            console.log("It worked!");
            console.log(prod_filtrado);
            setEscondidoD(() => false);
        }
        /*if(e.target.value == "")
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
        }*/

    }

    return <div> 
        <div className="header-right d-flex flex-row-reverse">
            {(()=>{
                
                if(token == null){
                    return <div className="mt-1">
                        <Link to={"/Register"}><a id="botonMorado" className="btn btn-primary" role="button">Sign Up</a></Link>
                        <Link to={"/Login"}><a id="botonMorado" className="btn btn-primary" role="button">Sign In</a></Link>
                    </div>
                }else{
                    return <div id="bienvenidostyle" className="mt-1">{`Bienvenido ${listadoUsuarios.map((usuarios)=>{return usuarios.Nombre})} !`}</div>
                }
            })()}
                    
            <Link to={"/Perfil"}><img src="https://cdn-icons-png.flaticon.com/512/1077/1077063.png" alt="Perfil" /></Link>
            <Link to={"/Cart"}><img className="links" src="https://cdn-icons-png.flaticon.com/512/833/833314.png" alt="Cart" /></Link>
            <img onClick={() => setEscondido(!escondido)} src="https://cdn-icons-png.flaticon.com/512/7018/7018972.png" alt="Search" />
            <div hidden={escondido} id="pSearch" className="position-relative">
                <input  id="searchInput" type="text" className="form-control m-2" 
                value={inputSearch} onChange={inputHandler}/>
                <div hidden={escondidoD} ref={wii} id="card" className="bg-white card">
                    <div className="p-2">Products</div>
                    <hr />
                    {prod_filtrado.map((producto) => 
                        <Link to={`/Producto/${producto.Producto_ID}`} className="prod d-flex text-secondary" key={producto.Producto_ID}>
                            <img src={producto.URL} alt="NVIDIA" />
                            <div className="d-flex flex-column">
                                <div className="pr fw-semibold fst-italic"> {producto.Nombre}</div>
                                <div>{producto.Marca}</div>
                                <div>${producto.Precio}</div>
                            </div>
                        </Link>
                    )}
                    <hr />
                    <div className="prod p-2">Search for "{inputSearch}"...</div>
                </div>
                
            </div>
            <Link to={"/Ranking"}><button className="letras" id="botonreviews" href="#about">Ranking</button></Link>
            <Link to={"/Reviews"}><button className="letras" id="botonreviews" href="#about">Reviews</button></Link>
            <Link to={"/Soporte"}><button className="letras" id="botonreviews" href="#contact">Support</button></Link>
            <a className="letras">About</a>
            <Link to={"/"} className="letras">Home</Link>
        </div>
    </div>
}

export default Header;
