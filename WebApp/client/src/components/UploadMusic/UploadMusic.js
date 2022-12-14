import './UploadMusic.css'
import React, { useRef, useState } from 'react';
import {NotificationContainer, NotificationManager} from 'react-notifications';
import {ImCross} from 'react-icons/im'
import axios from 'axios';

import {URL} from '../../scripts/url'

const MAX_MUSIC = 20;

function UploadMusic () {

    const [musicNameList, setMusicNameList] = useState([]);
    const musicFilesList = useRef([]);

    function onInputChange (event) {

        const newMusicFiles = Object.entries(event.target.files).map(entry => entry[1])
        newMusicFiles.forEach(musicFile => {
            // Check if the song already exist into the queue
            if (musicNameList.findIndex(musicName => {return musicName === musicFile.name}) === -1) {
                // Check if not over the music cap
                if (musicNameList.length >= MAX_MUSIC) {
                    return NotificationManager.info(`You can't have more than ${MAX_MUSIC} into the queue`, 'Too much songs', 5000);
                }
                // Add the music into the queue
                setMusicNameList( current => [...current, musicFile.name]);
                musicFilesList.current.push(musicFile);
            }
        });
    }

    function deleteMusicFromQueue (event) {
        event.preventDefault();
        const musicToDelete = event.currentTarget.value;
        setMusicNameList(current => current.filter(musicName => musicName !== musicToDelete));
        musicFilesList.current.filter(musicFile => musicFile.name !== musicToDelete);
        return NotificationManager.info(`The music ${musicToDelete} has been deleted from the queue`, 'Successfull delete', 5000);
    }

    function deleteQueue () {
        if(musicNameList.length) {
            setMusicNameList([]);
            musicFilesList.current = [];
            return NotificationManager.info(`The queue has been cleared`, 'Successfull clear', 5000);
        }
    }

    function onSubmit (event) {
        event.preventDefault();
        if (musicFilesList.current.length) {
            // Prepare the data to be send
            const data = new FormData();
            for (const musicFile of musicFilesList.current ) {
                data.append('musicFile', musicFile)
            }
            NotificationManager.info("Please wait", "You've send the music", 5000);
            axios.post(`${URL}/uploadMusic`, data, {
                headers: {"Content-Type": "multipart/form-data"},
                withCredentials : true
            })
                .then(() => {
                    NotificationManager.success('You are now free to use what you\'ve uploaded', 'Upload succes', 5000);
                })
                .catch(() => {
                    NotificationManager.error('Please retry later', 'Something went wrong', 5000);
                })
        }
    }

    return (
        <div>
            <NotificationContainer/>
            <form onSubmit={onSubmit}>
                <input type={'file'} multiple={true} accept={'.mp3, .wav'} id={'musicFileInput'} className='music-file-input' onChange={onInputChange}/>
                <label htmlFor='musicFileInput'>
                    <div className='music-file-input-content'>
                        {
                            musicNameList.length === 0 ? (
                                    <p> Click here to load your musics </p>
                                ) : (
                                    musicNameList.map(musicName => {
                                        return (
                                            <div key={musicName}>
                                                📁 {musicName}
                                                <button type='button'className='delete-music-from-queue' value={musicName} onClick={deleteMusicFromQueue}><ImCross className='delete-music-from-queue'/></button>
                                            </div>
                                        )
                                    })
                                )
                        }
                    </div>
                </label>
                <div className='form-control-button'>
                    <button type='button' onClick={deleteQueue}> Cancel </button>
                    <button type='submit'> Submit </button>
                </div>
            </form>
        </div>
    )
}

export default UploadMusic