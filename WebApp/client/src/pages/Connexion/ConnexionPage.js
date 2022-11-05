import React, {useState} from 'react'
import './ConnexionPage.scss'
import {Link} from 'react-router-dom'
import Connexion from '../../components/Connexion/Connexion'
import Inscription from '../../components/Inscription/Inscription';

function ConnexionPage(){

    const[display, setDisplay] = useState(true);

    return(
        <div className='connexion-section'>
            <div className='home-menu'>
                <Link to="/" className='home-menu-logo'><p>ShuffleTunes</p></Link>
                <Link to="/connexion" className='home-menu-link'><p>Login</p></Link>
            </div>
            {display?(
                <Connexion display={display} setDisplay={setDisplay}/>
            ):(
                <Inscription display={display} setDisplay={setDisplay} />
            )}
        </div>

    );
}

export default ConnexionPage;