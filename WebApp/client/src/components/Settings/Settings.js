import React, {useState} from 'react'
import './Settings.scss'

import DropSettings from './DropSettings/DropSettings'

import {BsFillGearFill,BsFillMoonFill} from 'react-icons/bs'
import {FaInfo} from 'react-icons/fa'

function Settings(){

    const [dropdown, setDropdown] = useState(true);

    return(
        <section className='settings-container'>
            {dropdown ? (
                <div>
                    <div className='settings-items' onClick={()=>setDropdown(false)}>
                        <div>
                            <BsFillGearFill size={22} className="settings-icons"/>
                        </div>
                        <p>Settings</p>
                    </div>
                    <div className='settings-items'>
                        <div>
                            <BsFillMoonFill size={22} className="settings-icons"/>
                        </div>
                        <p>Display</p>
                        </div>
                    <div className='settings-items'>
                        <div>
                            <FaInfo size={22} className="settings-icons"/>
                        </div>
                        <p>Informations</p>
                    </div>
                </div>
            ):(
                <DropSettings setDropdown={setDropdown}/>
            )}
        </section>
    )
}


export default Settings;