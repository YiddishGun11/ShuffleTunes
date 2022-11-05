import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { URL } from '../../scripts/url'
import './FileList.scss'

import FileListItem from './FileListItem'

//import dynamic URL avoiding static "localhost" in code
const baseURL = URL + '/songs';

function NoFiles(){
    return(
        <div>
            <h1>Your File List</h1>
            <p id='error-file-list'>Your music list is empty...</p>
        </div>
    )
}

function FileList(){

    const [data, setData] = useState([]);

    //get data on DOM loading
    useEffect(() => {
        axios.get(baseURL + '/1').then((response) => {
            setData(response.data[0]);
        });

    }, []);

    return(
        <div className='filelist-section'>
            {data.length === 0 ?(
                <NoFiles />
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