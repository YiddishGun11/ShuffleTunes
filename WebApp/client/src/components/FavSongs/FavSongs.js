import React, { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios';
import './FavSongs.css';

import {RiDislikeFill} from 'react-icons/ri';

import {URL} from '../../scripts/url';

function FavSongs(){

    const [data, setData] = useState([]);

    useEffect(() =>{
        axios.get(URL + '/favsongs/' + 1).then((response) =>{
            setData(response.data[0])
        })
    }, []);
    //user id manquant
    const deleteSong = (songId) =>{
        axios.delete(URL + '/deletesong/' + 1 +  "/" + songId)
            .then(()=>{
                window.location.reload();
            })
            .catch((error)=>{
                console.log(error);
            });
    }


    return(
        <div className='favorite-section'>
            <h1>Your Favorite Songs List</h1>
            <div className='fav-songs-list'></div>
        </div>
    );
}

export default FavSongs;