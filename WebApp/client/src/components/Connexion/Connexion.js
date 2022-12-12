import { useRef } from 'react';
import './Connexion.css';
import axios from 'axios';
import {URL} from '../../scripts/url'
import {NotificationContainer, NotificationManager} from 'react-notifications';
import {sha512} from 'js-sha512'
import {salt} from '../../scripts/salt'
import { useNavigate } from 'react-router-dom';

function Connexion({setDisplay}){

    const pseudo = useRef(null);
    const password = useRef(null);
    const navigate = useNavigate();

    function onSubmit (event) {
        event.preventDefault();

        if(pseudo.current.value && password.current.value) {
            const data = {
                'pseudo' : pseudo.current.value,
                'password' : sha512(`${password.current.value}${salt}`)
            }
            axios.post(`${URL}/login`, data, {
                withCredentials: true,
            })
            .then(() => {
                navigate("/dashboard");
                return NotificationManager.success('You are now logged in', 'Successfull login');
            })
            .catch(error => {
                if (error.response) {
                    return NotificationManager.error(error.response.data,  'A problem occured');
                }

                return NotificationManager.error('Something went wrong, try again later', 'Unexpected error');
            })
        }

    }

    return(
        <div className='login-section-background'>
            <NotificationContainer/>
            <div className='login-section'>
                <h1>ShuffleTunes</h1>
                <p className='login-section-subtitle'> Enhance your musical experience </p>
                <form onSubmit={onSubmit}>
                    <input type="text" placeholder='Pseudo' required minLength={5} maxLength={20} ref={pseudo}></input>
                    <input type="password" placeholder='Password' required minLength={8} maxLength={64} ref={password}></input>
                    <button type='submit'>Login</button>
                </form>
                <div className='switch-connect'>
                    <p>already member ?</p>
                    <button onClick={()=>setDisplay(false)} className="switch-connect-link">register</button>
                </div>
            </div>
        </div>
    );
}

export default Connexion;