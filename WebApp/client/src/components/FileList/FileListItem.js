import React, { useState } from 'react'
import axios from 'axios'
import { URL } from '../../scripts/url'

import './FileList.scss'

//react-icons
import {BiAddToQueue} from 'react-icons/bi'
import {BsArrowRightShort} from 'react-icons/bs'

//redux
import {useDispatch, useSelector} from 'react-redux'

import {setDisplay, setSong} from '../../reducers/musicReducer'

import {miniListDisplay} from '../../reducers/playlistReducer'

import {getDisplay, setPlaylistId} from '../../reducers/addSongReducer'


function FileListItem({item,itemId}){

    //DB data
    const [data, setData] = useState([]);

    //catching error into state to eventually display
    const [error, setError] = useState([])

    //redux variables
    const dispatch = useDispatch();

    //playlist list display (dropmenu)
    const listDisplay = useSelector((state)=> state.playlistReducer.listDisplay);

    //add song display (addsong-container)
    const addSongDisplay = useSelector((state)=>state.addSongReducer.display);

    //states
    const playlistId = useSelector((state)=>state.addSongReducer.playlistId);

    //toggle display playlist songs
    const dropMenuDisplay = () =>{
        if(listDisplay === item){
            dispatch(miniListDisplay(''))
        }
        else{
            dispatch(miniListDisplay(item))
        }
    }

    //sendata for creating new playlist
    const sendData = () =>{
        try{
            axios.post(URL + '/newsong', {
                "musicId" : itemId,
                "playlistId" : playlistId,
                })
            .then(function () {
                dispatch(getDisplay(false));
            })

            .catch(function (error) {
                setError(error);
            });
        }  
        catch(error){
            setError(error);
        }
    }


    //get playlists names 
    const loadPlaylists = () =>{
        try{
            axios.get(URL + '/playlists')
                .then((response) =>{
                    setData(response.data[0]);
                })
                .catch((error) =>{
                    setError(error);
                })
        }
        catch(error){
            setError(error);
        }
    }

    return(
        <div className='file-list-child'> 
            <div className='file-list-songs'>
                <p onClick={()=>{dispatch(setDisplay('open')); dispatch(setSong(item))}}>{item}</p>
                {listDisplay === item ?(
                    <button onClick={()=>{dispatch(miniListDisplay(item)); dropMenuDisplay(); dispatch(getDisplay(false))}}><BsArrowRightShort size={28} className="file-list-child-icon"/></button> 
                ):(
                    <button onClick={()=>{dispatch(miniListDisplay(item)); dropMenuDisplay(); loadPlaylists(); dispatch(getDisplay(false))}}><BiAddToQueue size={23} className="file-list-child-icon"/></button> 
                )}
            </div>

            <div className='file-list-dropmenu'>
                {listDisplay === item ?(
                    <div className='dropmenu-box'>
                        { addSongDisplay ?(
                            <div className='add-song-container'>
                                <p>Add this song to this playlist ?</p>
                                <div>
                                    <button onClick={()=>dispatch(getDisplay(false))}>Cancel</button>
                                    <button onClick={()=>sendData()}>Yes</button>
                                </div>
                            </div>
                        ):(
                            <React.Fragment>
                                {error.length === 0 ?(
                                    data.map((playlist) =>{
                                        return(
                                            <p id={playlist.playlistId} key={playlist.playlistId} className="playlist-items" onClick={()=>{dispatch(getDisplay(true));  dispatch(setPlaylistId(playlist.playlistId))}}>{playlist.playlistName}</p>
                                        );
                                    })
                                ):(
                                    <p>An error just occured...</p>
                                )}
                            </React.Fragment>
                        )}
                    </div>
                ):(
                    <p></p>
                )}
            </div>
        </div>
    );
}

export default FileListItem;