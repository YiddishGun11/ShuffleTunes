import React from 'react'

function Inscription({setDisplay}){
    return(
        <div className='login-section-background'>
            <div className='login-section'>
                <h1>ShuffleTunes</h1>
                <p className='login-section-subtitle'>Augmenter votre expérience musicale</p>
                <input type="text" placeholder='Pseudo'></input>
                <input type="text" placeholder='Mot de passe'></input>
                <input type="text" placeholder='Confirmer le mot de passe'></input>
                <button>S'inscrire</button>
                <div className='switch-connect'>
                    <p>deja membre ?</p>
                    <p onClick={()=>setDisplay(true)}className="switch-connect-link">se connecter</p>
                </div>
            </div>
        </div>
    );
}

export default Inscription;