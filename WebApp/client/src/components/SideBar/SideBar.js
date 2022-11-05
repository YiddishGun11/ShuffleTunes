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
                <BsFolder size={25} id="sidebar-icon"/>
                <p onClick={()=>setContentDisplay(1)} >Your Files</p>
            </div>
            <div className='sidebar-item2'>
                <BsFolderPlus size={25} id="sidebar-icon"/>
                <p>Upload new files</p>
            </div>
            <div className='sidebar-item2'>
                <MdOutlinePlaylistAdd size={25} id="sidebar-icon"/>
                <p onClick={() => setContentDisplay(4)}>Your PlayLists</p>
            </div>
            <div className='sidebar-item2'>
                <AiOutlineHeart size={25} id="sidebar-icon"/>
                <p onClick={()=>setContentDisplay(2)} >Favorites Songs</p>
            </div>
        </div>
    );
}

export default SideBar;