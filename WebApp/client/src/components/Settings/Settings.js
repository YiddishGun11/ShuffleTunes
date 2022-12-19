import React, {useState, useContext} from 'react'
import './Settings.scss'

import { ThemeContext } from '../Context/ThemeContext'
import DropSettings from './DropSettings/DropSettings'

import {BsFillGearFill,BsFillMoonFill, BsFillSunFill} from 'react-icons/bs'
import {FaInfo} from 'react-icons/fa'

function Switch(){

    const {theme, toggleTheme} = useContext(ThemeContext);

    return(
        <div>
            {theme ? (
                <div className='settings-items' onClick={toggleTheme}>
                    <div>
                        <BsFillSunFill size={22} className="settings-icons"/>
                    </div>
                    <button>LIGHT THEME</button>
                </div>
            ):(
                <div className='settings-items' onClick={toggleTheme}>
                    <div>
                        <BsFillMoonFill size={22} className="settings-icons"/>
                    </div>
                    <button>DARK THEME</button>
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
                        <button>Settings</button>
                    </div>
                    <Switch />
                    <div className='settings-items'>
                        <div>
                            <FaInfo size={22} className="settings-icons"/>
                        </div>
                        <button>Informations</button>
                    </div>
                </div>
            ):(
                <DropSettings setDropdown={setDropdown}/>
            )}
        </section>
    )
}


export default Settings;
