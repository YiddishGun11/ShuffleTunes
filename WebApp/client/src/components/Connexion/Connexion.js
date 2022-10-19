import './Connexion.css'

function Connexion({display, setDisplay}){

    return(
        <div className='login-section-background'>
            <div className='login-section'>
                <h1>ShuffleTunes</h1>
                <p className='login-section-subtitle'>Augmenter votre expérience musicale</p>
                <input type="text" placeholder='Pseudo'></input>
                <input type="text" placeholder='Mot de passe'></input>
                <button>Se connecter</button>
                <div className='switch-connect'>
                    <p>Pas encore membre ?</p>
                    <p onClick={()=>setDisplay(false)} className="switch-connect-link">S'inscrire</p>
                </div>
            </div>
        </div>
    );
}

export default Connexion;