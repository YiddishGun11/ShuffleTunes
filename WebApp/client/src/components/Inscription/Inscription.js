import React, { useRef, useState } from 'react'
import axios from 'axios';
import {URL} from '../../scripts/url'

import {NotificationContainer, NotificationManager} from 'react-notifications';
import 'react-notifications/lib/notifications.css';

import { zxcvbn, zxcvbnOptions } from '@zxcvbn-ts/core'
import zxcvbnCommonPackage from '@zxcvbn-ts/language-common'
import zxcvbnEnPackage from '@zxcvbn-ts/language-en'

function Inscription ({setDisplay}) {

    // Save form input
    const pseudo = useRef(null);
    const password = useRef(null);
    const confirmPassword = useRef(null);
    const [warningMessage, setWarningMessage] = useState(null);

    // Setup password review
    const passwordReviewOptions = {
        translations: zxcvbnEnPackage.translations,
        graphs: zxcvbnCommonPackage.adjacencyGraphs,
        dictionary: {
          ...zxcvbnCommonPackage.dictionary,
          ...zxcvbnEnPackage.dictionary,
        }
    }

    zxcvbnOptions.setOptions(passwordReviewOptions);

    function reviewPassword () {
        setWarningMessage(zxcvbn(password.current.value).feedback.warning);
    }

    // Check if password and confirm password match
    function onConfirmPasswordInputChange (event) {
        if (confirmPassword.current.value === password.current.value) {
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
                'pseudo' : pseudo.current.value,
                'password' : password.current.value
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
                        <input type="text" placeholder='Pseudo' ref={pseudo} required minLength={5} maxLength={20}></input>
                        <input type="password" placeholder='Password' ref={password} onChange={reviewPassword} required minLength={8} maxLength={64}></input>
                        <p className='passwordReview'>{warningMessage}</p>
                        <input type="password" placeholder='Confirm password' ref={confirmPassword} onChange={onConfirmPasswordInputChange} required minLength={8} maxLength={64}></input>
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