import './DropDown.scss'

import {useState } from 'react'
import axios from 'axios'

//react-icons
import {MdArrowDropDown} from 'react-icons/md'
import {BsTrash} from 'react-icons/bs'
import {TiDelete} from 'react-icons/ti'


//redux
import { useSelector, useDispatch } from 'react-redux';
import { playlistDisplay } from '../../../reducers/playlistReducer';

//importing dynamic URL
import {URL} from '../../../scripts/url'

function DropDownError(props){
    return(
        <>
            {props.error === 'no-songs' ? (
                <p>You don't have any songs in this playlist...</p>
            ):(
                <p>An error just occured...</p>
            )}
        </>
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

    const [display, setDisplay] = useState(true);
 
    //load songs by playlists
    const LoadSongs = () => {
        axios.get(URL + '/playlistsongs/' + id)
            .then((response) =>{
                setData(response.data[0][0])
            })
            .catch((error) =>{
                setError(error);
                console.clear();
            })
    }

    const deletePlaylist = (id) =>{
        axios.delete(URL + '/playlist/' + id)
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
        <div className={display ? 'dropdown' : 'none'} data-testid="dropdown-component">
            <div className='dropdown-menu' onClick={()=>{dispatch(playlistDisplay(id)); checkstate(); LoadSongs()}}>
                <p className='playlist-name'>{title}</p>
                <div>
                    <button className='gear-button' onClick={()=>{deletePlaylist(id); setDisplay(false)}}><BsTrash className='playlist-gear-icon' size={20}/></button>
                    <button className='dropdown-button'onClick={()=>{dispatch(playlistDisplay(id)); checkstate()}}><MdArrowDropDown className='dropdown-menu-icon' size={28} /></button>
                </div>
            </div>
            <div className='dropdown-content'>
                {error.length === 0?(
                    <>
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
                    </>
                ):(
                    <DropDownError error={''} />
                )}
            </div>
        </div>
    );
}

export default DropDown;