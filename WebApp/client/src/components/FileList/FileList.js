import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { URL } from '../../scripts/url'
import './FileList.scss'

import FileListItem from './FileListItem'

//import dynamic URL avoiding static "localhost" in code
const baseURL = URL + '/songs';

function FileListError(props){
    return(
        <React.Fragment>
            {props.error === 'no-file' ?(
                <div>
                    <h1>Your File List</h1>
                    <p id='no-file-list'>Your music list is empty...</p>
                </div>
            ):(
                <div id='error-file-list'>
                    <h1>Your File List</h1>
                    <p>An error just occured...</p>
                </div>
            )}
        </React.Fragment>
    )
}

function FileList(){

    const [data, setData] = useState([]);

    //catching errors into state for error managing in UI
    const [error, setError] = useState([]);

    //get data on DOM loading
    useEffect(() => {
        try{
            axios.get(baseURL + '/1')

                .then((response) => {
                    setData(response.data[0]);
                })
                .catch((error)=>{
                    setError(error)
                    console.clear();
                });
        }

        catch(error) {
            setError(error);
            console.clear()
        }

    }, []);

    return(
        <div>
            {error.length === 0 ?(
                <div className='filelist-section'>
                    {data.length === 0 ?(
                        <FileListError error={'no-file'} />
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
            ):(
                <FileListError error={''} />
            )}
        </div>
    );
}




export default FileList;