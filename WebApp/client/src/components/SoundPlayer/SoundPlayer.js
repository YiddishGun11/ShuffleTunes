import "./SoundPlayer.css";

//import musicSample1 from "link";
//import musicSample2 from "link";

import { useState } from "react";
import AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";

//redux
import {useSelector} from 'react-redux'


function SoundPlayer() {

    /*function getMusicName(path){
        return (path.split('/').pop()).split('.')[0];
    }*/

    const musicTracks = [
        {
            name: "MusicSample",
            src: "https://samplelib.com/lib/preview/mp3/sample-15s.mp3"
        }
        /*{
          name: getMusicName(musicSample1),
          src: musicSample1
        },
        {
          name: getMusicName(musicSample2),
          src: musicSample2
        },*/
    ];
  
    const [trackIndex, setTrackIndex] = useState(0);
  
    const handleClickPrevious = () => {
        setTrackIndex((currentTrack) =>
            currentTrack === 0 ? musicTracks.length - 1 : currentTrack - 1
        );
    };
  
    const handleClickNext = () => {
        setTrackIndex((currentTrack) =>
            currentTrack < musicTracks.length - 1 ? currentTrack + 1 : 0
        );
    };
  
    return (
        <div className="sound-player">
            <AudioPlayer
                style={{ borderRadius: "1rem", backgroundColor: "#1B1919", padding: "10px 0px", boxShadow: "0 0 0px 0"}}
                src={musicTracks[trackIndex].src}
                showSkipControls={true}
                showJumpControls={false}
                header={` ${musicTracks[trackIndex].name}`}
                onClickPrevious={handleClickPrevious}
                onClickNext={handleClickNext}
                onEnded={handleClickNext}
            />
        </div>
    );
}

export default SoundPlayer;
  