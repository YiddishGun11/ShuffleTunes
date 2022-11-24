import "./SoundPlayer.css";

//import musicSample1 from "link";
//import musicSample2 from "link";

import { useState } from "react";
import AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";

//redux
import {useSelector} from 'react-redux';



//(nomMusic) => {
//    axios.post(URL + '/launchSong', nomMusic);

//    BACK => bash (nomMusic = request.body.data, request.user) //utilisé middelware confirm token 
//}

function SoundPlayer() {
    const song = useSelector((state) => state.musicReducer.song)

    /*function getMusicName(path){
    return (path.split('/').pop()).split('.')[0];
    }*/


    const musicTracks = [
        {
            name: song,
            src: "http://shuffletunes.local:81/Gazo_BECTE.mp3"
        },

        
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
        <div className="sound-player" onClick={()=>console.log(musicTracks)}>
            <AudioPlayer
                style={{ borderRadius: "1rem", backgroundColor: "#322c2c", padding: "10px 0px", boxShadow: "0 0 0px 0"}}
                src={musicTracks[trackIndex].src}
                showSkipControls={true}
                showJumpControls={false}
                header={` ${musicTracks[trackIndex].name}`}
                showFilledProgress={true}
                showDownloadProgress={false}
                onClickPrevious={handleClickPrevious}
                onClickNext={handleClickNext}
                onEnded={handleClickNext}
                autoPlayAfterSrcChange={true}
                //layout='stacked-reverse'
            />
        </div>
    );
}

export default SoundPlayer;
