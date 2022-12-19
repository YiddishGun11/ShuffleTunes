import './FavSongs.css'


import React, {useState, useEffect} from 'react';

import axios from 'axios';

import {AiFillHeart} from 'react-icons/ai'

import {URL} from '../../scripts/url'


function FavSongs(){

    //DATA FROM REQUESTS
    const [data, setData] = useState([]);
    //catching errors
    const [error, setError] = useState([])

    //load fav songs
    useEffect(() =>{

        try{
            axios.get(URL + '/favsongs', {withCredentials : true})
                .then((response) =>{
                    setData(response.data[0][0]);
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

    return(
        <div className='favorite-section'>
            <h1>Your Favorite Songs List</h1>
            <div className='fav-songs-list'>
                {error.length === 0 ? (
                    <>
                    {
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
                    }
                    </>
                ):(
                    <div>
                        <p>An error just occurred...</p>
                    </div>
                )}
            </div>
        </div>
    );
}


function Song(props){

    const [display, setDisplay] = useState(true);

    //user id manquant
    const deleteSong = (songId) =>{
        axios.delete(URL + '/deletefavsong/' + songId)
            .then(()=>{
                //à définir
            })
            .catch((error)=>{
                console.log(error);
            });
    }

    return(
        <div className={display ? 'songs-items' : 'none'} key={props.id}>
            <button onClick={()=>{deleteSong(props.id); setDisplay(false)}} ><AiFillHeart size={24} className='songs-items-icons'/></button>
            <p>{props.title}</p>
        </div>
    )
}

export default FavSongs;