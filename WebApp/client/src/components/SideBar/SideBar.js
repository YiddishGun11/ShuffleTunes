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
                <button onClick={()=>setContentDisplay(1)}>
                    <BsFolder size={25} id="sidebar-icon"/>
                    <p>Your Files</p>
                </button>
            </div>
            <div className='sidebar-item2'>
                <button onClick={() => setContentDisplay(3)}>
                    <BsFolderPlus size={25} id="sidebar-icon"/>
                    <p>Upload new files</p>
                </button>
            </div>
            <div className='sidebar-item2'>
                <button onClick={() => setContentDisplay(4)}>
                    <MdOutlinePlaylistAdd size={25} id="sidebar-icon"/>
                    <p>Your PlayLists</p>
                </button>
            </div>
            <div className='sidebar-item2'>
                <button onClick={()=>setContentDisplay(2)} >
                    <AiOutlineHeart size={25} id="sidebar-icon"/>
                    <p>Favorites Songs</p>
                </button>
            </div>
        </div>
    );
}

export default SideBar;