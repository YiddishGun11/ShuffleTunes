import React, {useState} from 'react'
import './Settings.scss'

import DropSettings from './DropSettings/DropSettings'

import {BsFillGearFill,BsFillMoonFill, BsFillSunFill} from 'react-icons/bs'
import {FaInfo} from 'react-icons/fa'

function Switch(){

    const [theme, setTheme] = useState('dark');

    const handleClick = () =>{
        theme === 'dark' ? setTheme('light') : setTheme('dark')
    }

    return(
        <div>
            {theme === 'dark' ? (
                <div className='settings-items' onClick={()=>handleClick()}>
                    <div>
                        <BsFillMoonFill size={22} className="settings-icons"/>
                    </div>
                    <p>DARK THEME</p>
                </div>
            ):(
                <div className='settings-items' onClick={()=>handleClick()}>
                    <div>
                        <BsFillSunFill size={22} className="settings-icons"/>
                    </div>
                    <p>LIGHT THEME</p>
                </div>
            )}
        </div>
    )
}

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
                    <Switch />
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