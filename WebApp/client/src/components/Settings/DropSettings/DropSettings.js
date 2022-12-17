import React, {useState} from 'react'
import './DropSettings.scss'

import UserSettings from '../UserSettings/UserSettings'

import {HiArrowLeft} from 'react-icons/hi'
import {MdLanguage} from 'react-icons/md'
import {BsPersonLinesFill} from 'react-icons/bs'

function DropSettings({setDropdown}){

    const [modal, setModal] = useState(false);

    return(
        <section className='drop-settings-container'>
            {modal ? (
                <UserSettings setModal={setModal}/>
            ):(
                <>
                    <div className='drop-settings-items' onClick={()=>setDropdown(true)}>
                        <div>
                            <HiArrowLeft size={22} className="settings-icons"/>
                        </div>
                        <button>Go Back</button>
                    </div>
                    <div className='drop-settings-items' onClick={()=>setModal(true)}>
                        <div>
                            <BsPersonLinesFill size={22} className="settings-icons"/>
                        </div>
                        <button>Profile settings</button>
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
                </>
            )}
        </section>
    )
}

export default DropSettings;