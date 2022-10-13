import React, { useState } from 'react'
import axios from 'axios'
import { URL } from '../../scripts/url'

import {BiAddToQueue} from 'react-icons/bi'
import {BsArrowRightShort} from 'react-icons/bs'

//redux
import {useDispatch, useSelector} from 'react-redux'
import {setDisplay, setSong} from '../../reducers/musicReducer'

import {miniListDisplay} from '../../reducers/playlistReducer'


function FileListItem({item}){

    //DB data
    const [data, setData] = useState([]);

    //redux variables
    const dispatch = useDispatch();
    const listDisplay = useSelector((state)=> state.playlistReducer.listDisplay);

    //toggle display playlist songs
    const handleDisplay = () =>{
        if(listDisplay === item){
            dispatch(miniListDisplay(''))
        }
        else{
            dispatch(miniListDisplay(item))
        }
    }

    //get playlists names 
    const loadPlaylists = () =>{
        axios.get(URL + '/playlists').then((response) =>{
            setData(response.data)
        })
    }

    return(
        <div className='file-list-child'> 
            <div className='file-list-songs'>
                <p onClick={()=>{dispatch(setDisplay('open')); dispatch(setSong(item))}}>{item}</p>
                {listDisplay === item ?(
                    <button onClick={()=>{dispatch(miniListDisplay(item)); handleDisplay()}}><BsArrowRightShort size={28} className="file-list-child-icon"/></button> 
                ):(
                    <button onClick={()=>{dispatch(miniListDisplay(item)); handleDisplay(); loadPlaylists()}}><BiAddToQueue size={23} className="file-list-child-icon"/></button> 
                )}
            </div>
            
            <div className='file-list-dropmenu'>
                {listDisplay === item ?(
                    <div >
                        {data.map((playlist) =>{
                            return(
                                <p id={playlist.playlistId} key={playlist.playlistId}>{playlist.playlistName}</p>
                            );
                        })}
                    </div>
                ):(
                    <p></p>
                )}

            </div>
        </div>
    );
}

export default FileListItem;