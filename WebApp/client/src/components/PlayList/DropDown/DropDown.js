import React, {useState } from 'react'
import axios from 'axios'
import {MdArrowDropDown} from 'react-icons/md'
import {BsGear} from 'react-icons/bs'
import {TiDelete} from 'react-icons/ti'

//redux
import { useSelector, useDispatch } from 'react-redux';
import { playlistDisplay } from '../../../reducers/playlistReducer';

import {URL} from '../../../scripts/url'

import './DropDown.scss'

function DropDownError(props){
    return(
        <React.Fragment>
            {props.error === 'no-songs' ? (
                <p>You don't have any songs in this playlist...</p>
            ):(
                <p>An error just occured...</p>
            )}
        </React.Fragment>
    )
}

function Song(props){

    const [display, setDisplay] = useState(true);

    const deleteSong = (songId) =>{
        axios.delete(URL + '/deletesongplaylist/' + songId)
            .then(()=>{
                //à venir
            })
            .catch(()=>{
                //à venir
            })
    }

    return(
        <div className={display ? 'songs-items' : 'none'} key={props.id}>
            <button onClick={()=>{deleteSong(props.id); setDisplay(false)}} ><TiDelete size={24} className='songs-items-icons'/></button>
            <p>{props.title}</p>
        </div>
    )
}


function DropDown({id, title}){

    const [data, setData] = useState([]);
    const [error, setError] = useState([]);
 
    //load songs by playlists
    const LoadSongs = () => {
        axios.get(URL + '/playlistsongs/' + id)
            .then((response) =>{
                setData(response.data[0])
            })
            .catch((error) =>{
                setError(error);
                console.clear();
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
            <div className='dropdown-menu' onClick={()=>{dispatch(playlistDisplay(id)); checkstate(); LoadSongs()}}>
                <p className='playlist-name'>{title}</p>
                <div>
                    <button className='gear-button'><BsGear className='playlist-gear-icon' size={20}/></button>
                    <button className='dropdown-button'onClick={()=>{dispatch(playlistDisplay(id)); checkstate()}}><MdArrowDropDown className='dropdown-menu-icon' size={28} /></button>
                </div>
            </div>
            <div className='dropdown-content'>
                {error.length === 0?(
                    <React.Fragment>
                        {playlistId === id?(
                            <div className='dropdown-songs'>
                                {data.length === 0? (
                                    <p>Aucune musique dans cette playlist...</p>
                                ):(
                                    <div>
                                        {data.map((item)=>{
                                            return(
                                                <Song id={item.musicId} title={item.musicTitle} key={item.musicId}/>
                                            )
                                        })}
                                    </div>
                                )}
                            </div>
                        ):(
                            <div></div>
                        )}
                    </React.Fragment>
                ):(
                    <DropDownError error={''} />
                )}
            </div>
        </div>
    );
}

export default DropDown;