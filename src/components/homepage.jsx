import "./homepage.css"
import Header from './header_todos';
import { Link } from "react-router-dom"
//import {Routes, Route, useNavigate} from 'react-router-dom';

const Home = (props) => {

    return <div>
        <Header/>
        <div className="ps-5 mb-5" style={{height: "77vh"}}>
            <img id="controller" className="m-3" src="https://cdn-icons-png.flaticon.com/512/2540/2540374.png" alt="Video-game Controller" />
            <h1 id="pc" className="text-white p-1">Build your PC!</h1>
            <h2 id="subpc" className="p-1">Just what you need</h2>
            <br />
            <span>
                <Link to={"/Producto"}>
                    <button className="bgbutton rounded border border-success m-1 p-2 border-opacity-10">
                        Build for beginners
                    </button>
                </Link> 
                <Link to={"/Avanzado"}>
                    <button className="bgbutton rounded border border-success m-1 p-2 border-opacity-10">
                        Advanced building
                    </button>
                </Link>
            </span>
        </div>
        <footer id="foot">
            <div className="container">
                <div className="row p-2">
                    <div className="col">
                        <b>Sign up to out newsletter for the latest PC news.</b>
                        <div>
                            <input id="email" type="text" placeholder="Email" className=""/>
                            <button id="subs" className="btn rounded border border-success m-1 p-2 border-opacity-10">
                                SUBSCRIBE
                            </button>
                        </div>
                        <div>
                            <img className="fb ms-3" src="https://cdn-icons-png.flaticon.com/512/747/747543.png" alt="facebook" />
                            <img className="fb ms-3" src="https://cdn-icons-png.flaticon.com/512/3536/3536424.png" alt="twitter" />
                            <img className="fb ms-3" src="https://cdn-icons-png.flaticon.com/512/174/174855.png" alt="twitter" />
                        </div>
                    </div>
                    <div className="col">
                        <p>Build your PC</p>
                        <p>Why Redux</p>
                        <p>Support</p>
                    </div>
                    <div className="col">
                        <p>Good</p>
                        <p>Better</p>
                        <p>Best</p>
                    </div>
                    <div className="col">
                        <p>Terms and conditions</p>
                        <p>Privacy Policy</p>
                        <p>Refund Policy</p> 
                    </div>
                </div>
            </div>
        </footer>
    </div>
        
}

export default Home;