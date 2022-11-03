import React, { useState } from 'react'
import axios from 'axios';
import {URL} from '../../scripts/url'

import {NotificationContainer, NotificationManager} from 'react-notifications';
import 'react-notifications/lib/notifications.css';


// At least one number and one character + lenght between 5 and 20 + allow _ @ .
const regexPseudo = new RegExp('^(?=.*[A-Za-z])[A-Za-z0-9_@]{5,20}$');
// At least one number, one maj, on min, on special character + lenght between 10 and 20
const regexPassword = new RegExp('^(?=.*[0-9])(?=.*[A-Z])(?=.*[a-z])[A-Za-z0-9@<>!-_%]{10,20}$');

function Inscription ({setDisplay}) {

    const [pseudo, setPseudo] = useState("");
    const [password, setPassword] = useState("");

    // Check if pseudo match the regexp
    function onPseudoInputChange (event) {
        setPseudo(() => {return event.target.value});
        if (regexPseudo.test(pseudo) || pseudo === "") {
            return event.target.setCustomValidity("");
        }
        event.target.setCustomValidity("Your pseudo must have a lenght between 5 and 20 characters and can only have _ and @ as special character");
    }

    // Check if password match the regexp
    function onPasswordInputChange (event) {
        setPassword(() => {return event.target.value});
        if (regexPassword.test(password) || password === "") {
            return event.target.setCustomValidity("");
        }
        event.target.setCustomValidity("Lenght between 10 and 20 characters, require 1 number, 1 maj and 1 special character");
    }

    // Check if password and confirm password match
    function onConfirmPasswordInputChange (event) {
        if (event.target.value === password) {
            return event.target.setCustomValidity("");
        }
        return event.target.setCustomValidity("Password and confirm password don't match");
    }

    // Notification manager
    function manageNotification (type, message, title=null, timeout=5000) {
        switch (type) {
            case 'succes' : 
                NotificationManager.success(message, title, timeout);
                break;
                
            case 'error' : 
                NotificationManager.error(message,title, timeout);
                break;
            
            default:
                break;
        }
    }

    function onSubmit (event) {
        event.preventDefault();
        
        if(pseudo.length && password.length) {
            const data = {
                'pseudo' : pseudo,
                'password' : password
            }
            axios.post(`${URL}/register`, data)
            .then(event => {
                if (event.data.errors) {
                    return manageNotification('error', event.data.errors, 'A problem occured');
                }
                
                if (event.data.success) {
                    return manageNotification('succes', event.data.success);
                }
            })
            .catch(event => {
                console.log(event);
                if (event.response.data) {
                    event.response.data.errors.forEach(element => {
                        return manageNotification('error', element.msg, 'A problem occured');
                    });
                }
                return manageNotification('error', 'Something went wrong, try again later', 'Unexpected error');
            })
        }

    }

    return(
        <div>
            <NotificationContainer className={'notifContainer'}/>
            <div className='login-section-background'>
                <div className='login-section'>
                    <h1>ShuffleTunes</h1>
                    <p className='login-section-subtitle'>Enhance your musical experience</p>
                    <form onSubmit={onSubmit}>
                        <input type="text" placeholder='Pseudo' onChange={onPseudoInputChange} required minLength={5} maxLength={20}></input>
                        <input type="password" placeholder='Password' onChange={onPasswordInputChange} required minLength={10} maxLength={20}></input>
                        <input type="password" placeholder='Confirm password' onChange={onConfirmPasswordInputChange} required minLength={10} maxLength={20}></input>
                        <button type='sumbit'>Register</button>
                    </form>
                    <div className='switch-connect'>
                        <p>already member ?</p>
                        <p onClick={()=>setDisplay(true)}className="switch-connect-link">login</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Inscription;