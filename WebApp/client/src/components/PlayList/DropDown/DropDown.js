import React from 'react'
import {MdArrowDropDown} from 'react-icons/md'
import {BsGear} from 'react-icons/bs'


import { useSelector, useDispatch } from 'react-redux';
import { playlistDisplay } from '../../../reducers/playlistReducer';

//import {setDisplay, setSong} from '../../../reducers/musicReducer'

import './DropDown.css'

/*
A FAIRE :

fenetre modale pour la playlist selectionnée
*/

function DropDown({id, title}){

    //redux variables
    const playlistId = useSelector((state) => state.playlistReducer.display)
    const dispatch = useDispatch();

    //toggle state
    const checkstate = () =>{
        if(id === playlistId){
            dispatch(playlistDisplay(0))
        }
        else{
            dispatch(playlistDisplay(id))
        }
    }

    return(
        <div className='dropdown'>
            <div className='dropdown-menu' onClick={()=>{dispatch(playlistDisplay(id)); checkstate()}}>
                <p className='playlist-name'>{title}</p>
                <div>
                    <button className='gear-button'><BsGear className='playlist-gear-icon' size={20}/></button>
                    <button className='dropdown-button'onClick={()=>{dispatch(playlistDisplay(id)); checkstate()}}><MdArrowDropDown className='dropdown-menu-icon' size={28} /></button>
                </div>
            </div>
            <div className='dropdown-content'>
                {playlistId === id?(
                    <div className='dropdown-songs'>
                        <p>test</p>
                        <p>test</p>
                        <p>test</p>
                        <p>test</p>
                    </div>
                ):(
                    <div></div>
                )}
            </div>
        </div>
    );
}

export default DropDown;

//<p onClick={()=>{dispatch(setDisplay('open')); dispatch(setSong(title))}}>Songs1</p>