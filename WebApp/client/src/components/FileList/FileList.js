import React, { useState, useEffect } from 'react'
import axios from 'axios'
import './FileList.css'

import { URL } from '../../scripts/url'

import FileListItem from './FileListItem'

const baseURL = URL + '/userFiles';

function FileList(){

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
                    <div className='music-list-items'>
                        {data.map((item) => (
                        <FileListItem item={item} key={item}/>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
}




export default FileList;