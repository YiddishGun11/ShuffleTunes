import "./Home.scss"

import { useState } from "react";

import { Link } from 'react-router-dom';
import Image from '../../assets/landing-page-girl.png'

import Popup from "../../components/Cookies/Popup";

function Home(){

    const [display, setDisplay] = useState(true);

    return(
        <div className="home-menu-main">
            <div className='home-menu'>
                <Link to="/" className='home-menu-logo'><p>ShuffleTunes</p></Link>
                <Link to="/connexion" className='home-menu-link'><p>Login</p></Link>
            </div>

            <div className='home-section'>
                <>
                    {display ? (
                        <Popup setDisplay={setDisplay}/>
                    ):(
                        <></>
                    )}
                </>
                <img src={Image} alt="" ></img>
                <div className='home-section-div'>
                        <h1>Share Your Music</h1>
                        <p>Listen to your music on several speakers</p>
                        <Link to="/connexion"><button>Join Our App</button></Link>
                </div>
            </div>

        </div>
    );
}

export default Home;