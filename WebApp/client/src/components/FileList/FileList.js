import React, { useState, useEffect } from 'react'
import axios from 'axios'
import './FileList.scss'

import { URL } from '../../scripts/url'

import FileListItem from './FileListItem'

const baseURL = URL + '/songs';

function FileList(){

    const [data, setData] = useState([]);

    useEffect(() => {
        axios.get(baseURL + '/1').then((response) => {
            setData(response.data[0]);
        });

    }, []);

    return(
        <div className='filelist-section'>
            {data.length === 0 ?(
                <div>
                    <h1>Your File List</h1>
                    <p id='error-file-list'>Your music list is empty...</p>
                </div>
            ):(
                <div>
                    <h1>Your File List</h1>
                    <div className='music-list-items'>
                        {data.map((item) => (
                            <FileListItem item={item.musicTitle} key={item.musicId} itemId={item.musicId}/>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
}




export default FileList;