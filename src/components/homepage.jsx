import "./homepage.css"

const Home = (props) => {

    return <div> 
        <div className="header-right">
            <a href="#about">/Perfil</a>
            <a href="#about">/Carro de compras</a>
            <a href="#about">/Search</a>

            <a href="#about">Ranking</a>
            <a href="#about">Reviews</a>
            <a href="#contact">Soport</a>
            <a href="#about">About</a>
            <a class="active" href="#Home">Home</a>
        </div>
        <div className="p-5">
            <img id="controller" className="m-3" src="https://cdn-icons-png.flaticon.com/512/2540/2540374.png" alt="Video-game Controller" />
            <h1 id="pc" className="text-white p-1">Build your PC!</h1>
            <h2 id="subpc" className="p-1">Just what you need</h2>
            <br />
            <span>
                <span className="bgbutton container rounded border border-success m-1 p-2 border-opacity-10">
                    Build for beginners
                </span> 
                <span className="bgbutton container rounded border border-success m-1 p-2 border-opacity-10">
                    Advanced building
                </span>
            </span>
        </div>
        <footer id="foot">
            <p>holas</p>
        </footer>
    </div>
        
}

export default Home;