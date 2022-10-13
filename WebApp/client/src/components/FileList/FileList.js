import React, { useState, useEffect } from 'react'
import axios from 'axios'
import './FileList.css'

import { URL } from '../../scripts/url'

import FileListItem from './FileListItem'

const baseURL = URL + '/userFiles';

function FileList({setMusicBar}){

    const [data, setData] = useState([]);

    useEffect(() => {
        axios.get(baseURL).then((response) => {
            setData(response.data);
        });

    }, []);

    return(
        <div className='filelist-section'>
            {data.length === 0 ?(
                <div>
                    <h1>Your File List</h1>
                    <p>Your music list is empty</p>
                </div>
            ):(
                <div>
                    <h1>Your File List</h1>
                    <p onClick={() =>setMusicBar(true)}>MUSIC ITEM</p>
                    <p onClick={() =>setMusicBar(false)}>HIDE BAR</p>
                </div>
            )}
        </div>

    );
}

/*
    <div className='test123'>
        {data.map((item) => (
        <p key={item}>{item}</p>
        ))}
    </div>
*/



export default FileList;