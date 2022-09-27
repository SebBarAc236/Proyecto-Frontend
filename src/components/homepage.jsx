import "./homepage.css"
//import {Routes, Route, useNavigate} from 'react-router-dom';

const Home = (props) => {

    return <div>
        <div className="p-5">
            <img id="controller" className="m-3" src="https://cdn-icons-png.flaticon.com/512/2540/2540374.png" alt="Video-game Controller" />
            <h1 id="pc" className="text-white p-1">Build your PC!</h1>
            <h2 id="subpc" className="p-1">Just what you need</h2>
            <br />
            <span>
                <button className="bgbutton rounded border border-success m-1 p-2 border-opacity-10">
                    Build for beginners
                </button> 
                <button className="bgbutton rounded border border-success m-1 p-2 border-opacity-10">
                    Advanced building
                </button>
            </span>
        </div>
        <footer id="foot">
            <p>holas</p>
        </footer>
    </div>
        
}

export default Home;