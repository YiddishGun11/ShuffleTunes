import React, {useEffect, useRef, useState} from 'react'
import './Playlist.scss'
import axios from 'axios'

import {RiAddFill, RiCloseFill} from 'react-icons/ri'

import {URL} from '../../scripts/url'

import DropDown from './DropDown/DropDown';

//gestion des erreurs
function PlaylistError(props){
    return(
        <React.Fragment>
            {props.error === 'no-files' ? (
                <p className='playlist-message'>You don't have any playlists for the moment...</p>
            ):(
                <p className='playlist-message'>An error just occured...</p>
            )}
        </React.Fragment>
    )
}

function PlayList(){

    //states 
    const [data, setData] = useState([]);
    const [createPlaylist, setCreatePlaylist] = useState(false);

    //catching errors
    const [error, setError] = useState([]);

    //send data for creating new playlist
    const input = useRef(null);

    //change display for creating new playlist
    const changeDisplay = () =>{
        createPlaylist ? setCreatePlaylist(false) : setCreatePlaylist(true)
    }

    //load playlists
    useEffect(() =>{
        try{
            axios.get(URL + '/playlists')
            .then((response) =>{
                setData(response.data[0])
            })
            .catch((error) =>{
                setError(error);
            })
        }
        catch(error){
            setError(error)
            console.clear();
        }
    }, []);

    //sendata for creating new playlist
    const sendData = () =>{

        axios.post(URL + '/createplaylist', {
            "playlistName" : input.current.value,
            "userId" : 1
            })
            .then(function () {
            //à définir
            })

            .catch(function (error) {
                console.clear()
            });
    }


    return(
        <div className='playlists-container'>   
            <div className='playlist-container-menu'>  
                <h1 onClick={()=>console.log(data)}>Your PlayLists</h1>
                {createPlaylist ?(
                    <button onClick={()=>changeDisplay()}><RiCloseFill  size={30} className='playlist-container-menu-icon' /></button>
                ):(
                    <button onClick={()=>changeDisplay()}><RiAddFill size={30} className='playlist-container-menu-icon' /></button>
                )}
            </div> 
            <div>
                {createPlaylist?(
                    <form className='add-playlist' onSubmit={sendData}>
                        <input type="text" placeholder='Create a new playlist' ref={input}></input>
                        <button type="submit">Add Playlist</button>
                    </form>
                ):(
                    <div></div>
                )}
            </div>
            <div> 
                {error.length === 0 ?(
                    <React.Fragment>
                        {data.length === 0?(
                            <PlaylistError error={'no-files'}/>
                        ):(
                            <div className='playlist-dropdowns'>
                                {data.map((item)=>{
                                    return(
                                        <DropDown id={item.playlistId} title={item.playlistName} key={item.playlistId}/>
                                    );
                                })}
                            </div>
                        )}
                    </React.Fragment>
                ):(
                    <PlaylistError error={''} />
                )}
            </div>
        </div>
    );
}

export default PlayList;