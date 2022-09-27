import { useState } from "react";

const Header = () => 
{
    const [inputSearch, setInputSearch] = useState("");
    
    return <div> 
        <div className="header-right">
            <a href="#about">/Perfil</a>
            <a href="#about">/Carro de compras</a>
            <a href="#about">/Search</a>
            <input id="searchInput" type="text" className="form-control m-2" 
            value={inputSearch} onChange={(evt) => setInputSearch(evt.target.value)}/>
            <a href="#about">Ranking</a>
            <a href="#about">Reviews</a>
            <a href="#contact">Soport</a>
            <a href="#about">About</a>
            <a class="active" href="#Home">Home</a>
        </div>
    </div>
}

export default Header;