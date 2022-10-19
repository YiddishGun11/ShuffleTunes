import React, { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios';
import './FavSongs.css';

import {RiDislikeFill} from 'react-icons/ri';

import {URL} from '../../scripts/url';

function FavSongs(){

    function refreshPage() {
        window.location.reload(false);
      }

    const [data, setData] = useState([]);

    useEffect(() =>{
        axios.get(URL + '/favsongs').then((response) =>{
            setData(response.data[0])
        })
    }, []);

    const deleteSong = (songId) =>{
        axios.delete(URL + '/deletesong/' + songId)
            .then(()=>{
                refreshPage();
            })
            .catch(()=>{
                refreshPage();
            })
    }


    return(
        <div className='favorite-section'>
            <h1>Your Favorite Songs List</h1>
            <div className='fav-songs-list'></div>
        </div>
    );
}

export default FavSongs;