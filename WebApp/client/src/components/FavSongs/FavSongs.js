import React from 'react'
import './FavSongs.css'

//import {URL} from '../../scripts/url'

function FavSongs(){

    return(
        <div className='favorite-section'>
            <h1>Your Favorite Songs List</h1>
            <div className='fav-songs-list'>
            </div>
        </div>
    );
}

export default FavSongs;