import "./SoundPlayer.css";

//import musicSample1 from "link";
//import musicSample2 from "link";
import { useState } from "react";
import {BsFillPlayFill} from 'react-icons/bs'
import {BsStopFill} from 'react-icons/bs'

import {closeSong} from '../../reducers/musicReducer'

//redux
import {useSelector, useDispatch} from 'react-redux';

function pressed() {
    alert('Select a music to play !');
}
  

function SoundPlayer() {
    const dispatch = useDispatch();
    const song = useSelector((state) => state.musicReducer.song)

    const musicTracks = [
        {
            name: song,
        },
    ];

    return (
        <div className="sound-player" onClick={()=>console.log(musicTracks)}>
            <div>
                {song === "" ? (
                    <button className="button-play"><BsFillPlayFill size={45} id="play-icon"/></button>
                ):(
                    <button onClick={()=>dispatch(closeSong())} className="button-play"><BsStopFill size={45} id="play-icon"/></button>
                )}
            </div>
            <div class="messagedefilant">
                <div>
                    <marquee>{song}</marquee>
                </div>
            </div>
        </div>
    );
}

export default SoundPlayer;
