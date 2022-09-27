import { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => 
{
    const [inputSearch, setInputSearch] = useState("");
    
    return <div> 
        <div className="header-right">
            <Link to={"/"}><img src="https://cdn-icons-png.flaticon.com/512/1077/1077063.png" alt="Perfil" /></Link>
            <Link to={"/Cart"}><img className="links" src="https://cdn-icons-png.flaticon.com/512/833/833314.png" alt="Cart" /></Link>
            <img src="https://cdn-icons-png.flaticon.com/512/7018/7018972.png" alt="Search" />

            <input hidden id="searchInput" type="text" className="form-control m-2" 
            value={inputSearch} onChange={(evt) => setInputSearch(evt.target.value)}/>
            <a className="letras" href="#about">Ranking</a>
            <a className="letras" href="#about">Reviews</a>
            <a className="letras" href="#contact">Soport</a>
            <a className="letras" href="#about">About</a>
            <a className="letras" href="#Home">Home</a>
        </div>
    </div>
}

export default Header;