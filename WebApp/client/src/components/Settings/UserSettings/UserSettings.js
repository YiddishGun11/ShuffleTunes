import React, {useContext, useEffect, useState} from 'react'
import './UserSettings.scss'

import {createPortal} from 'react-dom'
import { ThemeContext } from '../../Context/ThemeContext';

import {URL} from '../../../scripts/url'

import axios from 'axios'

import {BiExit} from 'react-icons/bi'
import {BsFillPenFill} from 'react-icons/bs'

function UserSettings({setModal}){

    const {theme} = useContext(ThemeContext);
    const [error, setError] = useState([])
    const [data, setData] = useState([])

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
                                        <>
                                            <h2 onClick={()=>setChangePseudo(false)}>New pseudo</h2>
                                            <div>
                                                <input type="text" placeholder='Enter your new pseudo'></input>
                                                <button id='confirm-pseudo'>Confirm</button>
                                            </div>
                                        </>
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
                                        <>
                                            <h2 onClick={()=>setChangePswd(false)}>New password</h2>
                                            <div>
                                                <input type="password" placeholder='Enter your new password'></input>
                                                <input type="password" placeholder='Confirm your password'></input>
                                            </div>
                                            <button id='confirm-pswd'>Confirm</button>
                                        </>
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

export default UserSettings;