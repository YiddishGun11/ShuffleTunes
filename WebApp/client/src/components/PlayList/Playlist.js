import React, {useEffect, useState} from 'react'
import './Playlist.scss'
import axios from 'axios'

import {RiAddFill, RiCloseFill} from 'react-icons/ri'

import {URL} from '../../scripts/url'

import DropDown from './DropDown/DropDown';

function PlayList(){

    //states 
    const [data, setData] = useState([]);
    const [createPlaylist, setCreatePlaylist] = useState(false);

    //send data for creating new playlist
    const [formData, setFormData] = useState('');

    //change display for creating new playlist
    const changeDisplay = () =>{
        createPlaylist ? setCreatePlaylist(false) : setCreatePlaylist(true)
    }

    //load playlists
    useEffect(() =>{
        axios.get(URL + '/playlists').then((response) =>{
            setData(response.data[0])
        })
    }, []);

    //sendata for creating new playlist
    const sendData = () =>{

        axios.post(URL + '/createplaylist', {
            "playlistName" : formData,
            "userId" : 1
            })
            .then(function () {
            //à définir
            })

            .catch(function (error) {
                console.log(error);
            });
          
    }

    //change input value
    const changeData = (event) =>{
        setFormData(event.target.value)
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
                        <input type="text" placeholder='Create a new playlist' value={formData} onChange={changeData}></input>
                        <button type="submit">Add Playlist</button>
                    </form>
                ):(
                    <div></div>
                )}
            </div>
            <div> 
                {data.length === 0?(
                    <p className='playlist-message'>You don't have any playlists for the moment...</p>
                ):(
                    <div className='playlist-dropdowns'>
                        {data.map((item)=>{
                            return(
                                <DropDown id={item.playlistId} title={item.playlistName} key={item.playlistId}/>
                            );
                        })}
                    </div>
                )}
            </div>
        </div>
    );
}

export default PlayList;