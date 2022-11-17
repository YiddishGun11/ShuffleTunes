import React, {useState} from 'react'
import "./Profil.scss";

import logo from './Utepils.png';
import {FaRegEdit} from 'react-icons/fa'


function Profil(){
    return(
        <section className='profil-container'>
            <div>
                <div className='profil-items'>
                    <div>
                        <FaRegEdit size={22} className="edit-icons"/>
                    </div>
                </div>
                <div className='profil-image'>
                    <div>
                        <img src={logo} alt="Logo" width="150" height="150"/>
                    </div>
                </div>
                <div className='profil-name'>
                    <div>
                        <p> Utepils</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Profil;