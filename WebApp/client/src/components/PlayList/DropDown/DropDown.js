import React, { useEffect, useState } from 'react'
import axios from 'axios'
import {MdArrowDropDown} from 'react-icons/md'
import {BsGear} from 'react-icons/bs'
import {TiDelete} from 'react-icons/ti'

//redux
import { useSelector, useDispatch } from 'react-redux';
import { playlistDisplay } from '../../../reducers/playlistReducer';

import {URL} from '../../../scripts/url'

import './DropDown.scss'


function DropDown({id, title}){

    const [data, setData] = useState([]);
 
    //load songs by playlists
    useEffect(() =>{
        axios.get(URL + '/songs/' + id).then((response) =>{
            setData(response.data[0])
        })
    });

    const deleteSong = (songId) =>{
        axios.delete(URL + '/deletesongplaylist/' + songId)
            .then(()=>{
                //à venir
            })
            .catch(()=>{
                //à venir
            })
    }

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
                        {data.length === 0? (
                            <p>Aucune musique dans cette playlist...</p>
                        ):(
                            <div>
                                {data.map((item)=>{
                                    return(
                                        <div className='songs-items' key={item.musicId}>
                                            <button onClick={()=>deleteSong(item.musicId)} ><TiDelete size={24} className='songs-items-icons'/></button>
                                            <p>{item.musicTitle}</p>
                                        </div>
                                    )
                                })}
                            </div>
                        )}
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