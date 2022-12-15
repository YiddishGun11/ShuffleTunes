import './Playlist.scss'

import {useEffect, useRef, useState} from 'react'
import axios from 'axios'

import {RiAddFill, RiCloseFill} from 'react-icons/ri'

//importing dynamic URL
import {URL} from '../../scripts/url'

//Dropdown component
import DropDown from './DropDown/DropDown';

//redux
import { useDispatch } from 'react-redux'
import { playlistDisplay } from '../../reducers/playlistReducer';

//gestion des erreurs
function PlaylistError(props){
    return(
        <>
            {props.error === 'no-files' ? (
                <p className='playlist-message'>You don't have any playlists for the moment...</p>
            ):(
                <p className='playlist-message'>An error just occured...</p>
            )}
        </>
    )
}

function PlayList(){

    //states 
    const [data, setData] = useState([]);
    const [createPlaylist, setCreatePlaylist] = useState(false);

    //catching errors
    const [error, setError] = useState([]);

    const dispatch = useDispatch();

    //input for creating a new playlist
    const input = useRef(null);

    //change display for creating new playlist (handling event between true and false)
    const changeDisplay = () =>{
        createPlaylist ? setCreatePlaylist(false) : setCreatePlaylist(true)
    }

    //load playlists
    useEffect(() =>{

        //closing dropdown when swithcing between components
        dispatch(playlistDisplay(0))

        try{
            axios.get(URL + '/playlists', {withCredentials : true})
                .then((response) =>{
                    setData(response.data[0][0])
                })
                .catch((error) =>{
                    setError(error);
                })
        }
        catch(error){
            setError(error)
            console.clear();
        }
    }, [dispatch]);

    //sendata for creating new playlist
    const sendData = () =>{
        axios.post(URL + '/createplaylist', {
            "playlistName" : input.current.value
        }, {withCredentials : true})
            .then(()=>{
            //à définir
            })

            .catch(()=>{
                console.clear()
            });
    }


    return(
        <div className='playlists-container' data-testid="playlist-component">   
            <div className='playlist-container-menu'>  
                <h1>Your PlayLists</h1>
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
                    <>
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
                    </>
                ):(
                    <PlaylistError error={''} />
                )}
            </div>
        </div>
    );
}

export default PlayList;