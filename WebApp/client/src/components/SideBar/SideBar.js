import React, {useContext} from 'react'
import './SideBar.scss'

import { ThemeContext } from '../Context/ThemeContext'

import {BsFolderPlus, BsFolder} from 'react-icons/bs'
import {AiOutlineHeart} from 'react-icons/ai'
import {MdOutlinePlaylistAdd} from 'react-icons/md'


function SideBar({setContentDisplay}){

    const {theme} = useContext(ThemeContext);

    return(
        <div className={theme ? 'sidebar-dark' : 'sidebar-light'}>
            <div className='sidebar-item1'>
                <span><BsFolder size={25} id="sidebar-icon"/></span>
                <button onClick={()=>setContentDisplay(1)}>
                    <p>Your Files</p>
                </button>
            </div>
            <div className='sidebar-item1'>
                <span><BsFolderPlus size={25} id="sidebar-icon"/></span>
                <button onClick={() => setContentDisplay(3)}>
                    <p>Upload new files</p>
                </button>
            </div>
            <div className='sidebar-item1'>
            <span><MdOutlinePlaylistAdd size={25} id="sidebar-icon"/></span>
                <button onClick={() => setContentDisplay(4)}>
                    <p>Your PlayLists</p>
                </button>
            </div>
            <div className='sidebar-item1'>
                <span><AiOutlineHeart size={25} id="sidebar-icon"/></span>
                <button onClick={()=>setContentDisplay(2)} >
                    <p>Favorites Songs</p>
                </button>
            </div>
        </div>
    );
}

export default SideBar;