import {useContext, useEffect, useState, useRef} from 'react'
import './UserSettings.scss'

import {createPortal} from 'react-dom'
import { ThemeContext } from '../../Context/ThemeContext';

import {URL} from '../../../scripts/url'

import axios from 'axios'

import {BiExit} from 'react-icons/bi'
import {BsFillPenFill} from 'react-icons/bs'

function UserSettings({setModal}){

    //adapt theme colors
    const {theme} = useContext(ThemeContext);

    //catching errors
    const [error, setError] = useState([]);

    //data from useEffect()
    const [data, setData] = useState([])

    //state manipulation for changing the display dynamically
    const [changePswd, setChangePswd] = useState(false);
    const [changePseudo, setChangePseudo] = useState(false);


    //load playlists
    useEffect(() =>{
        axios.get(URL + '/user/' + 2 )
            .then((response) =>{
                setData(response.data[0][0])
            })
            .catch((error) =>{
                setError(error);
            })
    }, []);

    return createPortal(
        <section className='user-settings-section'>
            {error.length === 0?(
                <div className='user-settings-body'>
                    <div className={theme ? 'settings-header-dark' : 'settings-header-light'}>
                        <h1>My account</h1>
                        <button onClick={()=>setModal(false)}><BiExit size={30} /></button>
                    </div>
                    <div className='settings-items'>
                        <div className='settings-user-pseudo'>
                            <h1 onClick={()=>console.log(data.pseudo)}>Hello</h1>
                            <h1>{data.pseudo}</h1>
                            <span id='hello-span'>👋🏻</span>
                        </div>
                        <div className='settings-user-infos'>
                            <div className='settings-user-infos-items'>
                                <div className='change-informations'>
                                    {changePseudo ?(
                                        <ChangePseudo setChangePseudo={setChangePseudo} pseudo={data.pseudo}/>
                                    ):(
                                        <>
                                            <h2>Your pseudo</h2>
                                            <div>
                                                <p>{data.pseudo}</p>
                                                <button onClick={()=>setChangePseudo(true)}><BsFillPenFill size={15} id="settings-pen"/></button>
                                            </div>
                                        </>
                                    )}
                                </div>
                                <div className='change-informations'>
                                    {changePswd ?(
                                        <ChangePassword setChangePswd={setChangePswd} />
                                    ):(
                                        <>
                                            <h2>Your password</h2>
                                            <div>
                                                <p>*************</p>
                                                <button onClick={()=>setChangePswd(true)}><BsFillPenFill size={15} id="settings-pen"/></button>
                                            </div>
                                        </>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ):(
                <div className='user-settings-body'>
                    <div className={theme ? 'settings-header-dark' : 'settings-header-light'}>
                        <h1>My account</h1>
                        <button onClick={()=>setModal(false)}><BiExit size={30} /></button>
                    </div>
                    <div className='settings-items'>
                        <div className='settings-user-pseudo'>
                            <h1>{}</h1>
                        </div>
                        <div className='settings-user-infos'>
                            <div>
                                <p id='modal-error-text'>An error just occured...</p>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </section>, document.body
    )
}


function ChangePassword(props) {

    //handling errors
    const [modificationPswd, setModificationPswd] = useState('')

    //inputs refs
    const pswdInput = useRef(null);
    const confirmPswd = useRef(null);

    const checkPswd = () => {
        const pswd = pswdInput.current.value;
        const checkPswd = confirmPswd.current.value;

        if(pswd !== checkPswd){
            setModificationPswd('please, select the same password in the 2 fields')
        }

        else {
            //axios request
        }
    }

    return(
        <>
            <h2 onClick={()=>props.setChangePswd(false)}>New password</h2>
            <div>
                <input type="password" placeholder='Enter your new password' ref={pswdInput} required minLength={5} maxLength={20}></input>
                <input type="password" placeholder='Confirm your password' ref={confirmPswd} required minLength={5} maxLength={20}></input>
            </div>
            <p id='modification-error-message'>{modificationPswd}</p>
            <button id='confirm-pswd' onClick={()=>checkPswd()}>Confirm</button>
        </>
    )
}


function ChangePseudo(props){

    //handling errors on modifications
    const [modificationPseudo, setModificationPseudo] = useState('');

    //inputs refs
    const pseudoInput = useRef(null);

    const checkPseudo = () => {
        let pseudo = pseudoInput.current.value;

        if(pseudo === props.pseudo){
            setModificationPseudo('please, select a different pseudo')
        }

        else {
            //axios request
        }
    }

    return(
        <>
            <h2 onClick={()=>props.setChangePseudo(false)}>New pseudo</h2>
            <div>
                <input type="text" placeholder='Enter your new pseudo' ref={pseudoInput} required minLength={5} maxLength={20}></input>
                <button id='confirm-pseudo' onClick={()=>checkPseudo()}>Confirm</button>
            </div>
            <p id='modification-error-message'>{modificationPseudo}</p>
        </>
    )
}


export default UserSettings;