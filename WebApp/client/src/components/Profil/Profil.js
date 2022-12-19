import "./Profil.scss";

import { useEffect, useState } from "react";

import axios from 'axios'

import {BiError} from 'react-icons/bi'

import logo from '../../img/profil-image.png';

//importing dynamic url
import {URL} from '../../scripts/url'


function Profil(){

    const [error, setError] = useState([]);
    const [data, setData] = useState([]);

    useEffect(() =>{
        axios.get(URL + '/user/' + 4 )
            .then((response) =>{
                setData(response.data[0][0])
            })
            .catch((error) =>{
                setError(error);
            })
    }, []);


    return(
        <section className='profil-container'>
            {error.length === 0 ?(
                <>
                    <div className='profil-image'>
                        <img src={logo} alt="Logo" width="150" height="150"/>
                    </div>
                    <div className="change-image-div">
                        <p>Change Photo ?</p>
                    </div>
                    <div className='profil-name'>
                        <p>{data.pseudo}</p>
                    </div>
                </>
            ):(
                <div className="profil-error-message">
                    <p>An error just occured...</p>
                    <span><BiError size={18} className="error-icon"/></span> 
                </div>
            )}
        </section>
    )
}

export default Profil;