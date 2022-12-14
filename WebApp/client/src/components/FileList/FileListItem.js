import './FileList.scss'

import { useState } from 'react'
import axios from 'axios'

//dynamic URL
import { URL } from '../../scripts/url'

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
    const playSong = (item) =>{

        axios.post(URL + '/pd', {
            "song" : item
            }, {
                withCredentials : true
            })
            .then(function () {
             console.log('ok!')
            })
            
            .catch(function (error) {
                console.log(error);
            });
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
            axios.get(URL + '/playlists', {withCredentials: true})
                .then((response) =>{
                    setData(response.data[0][0]);
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
        <div className='file-list-child' data-testid="fileListItems-test"> 
            <div className='file-list-songs'>
                <button onClick={()=>{dispatch(setDisplay('open')); dispatch(setSong(item)); playSong(item)}}>{item}</button>
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
                            <>
                                {error.length === 0 ?(
                                    data.map((playlist) =>{
                                        return(
                                            <button id={playlist.playlistId} key={playlist.playlistId} className="playlist-items" onClick={()=>{dispatch(getDisplay(true));  dispatch(setPlaylistId(playlist.playlistId))}}>{playlist.playlistName}</button>
                                        );
                                    })
                                ):(
                                    <p>An error just occured...</p>
                                )}
                            </>
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