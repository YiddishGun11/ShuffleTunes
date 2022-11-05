import React from 'react'
import './DropSettings.scss'

import {HiArrowLeft} from 'react-icons/hi'
import {MdLanguage} from 'react-icons/md'
import {BsPersonLinesFill} from 'react-icons/bs'

function DropSettings({setDropdown}){
    return(
        <section className='drop-settings-container'>
            <div className='drop-settings-items' onClick={()=>setDropdown(true)}>
                <div>
                    <HiArrowLeft size={22} className="settings-icons"/>
                </div>
                <p>Go Back</p>
            </div>
            <div className='drop-settings-items'>
                <div>
                    <BsPersonLinesFill size={22} className="settings-icons"/>
                </div>
                <p>Profile</p>
            </div>
            <div className='drop-settings-items'>
                <div>
                    <MdLanguage size={22} className="settings-icons"/>
                </div>
                <select name="cars" id="cars">
                    <option value="saab">English</option>
                    <option value="saab">French</option>
                </select>
            </div>
        </section>
    )
}

export default DropSettings;