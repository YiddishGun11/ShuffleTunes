import './FileList.scss'

import { useState, useEffect } from 'react'
import axios from 'axios'

//importing dynamic URL
import { URL } from '../../scripts/url'
import './FileList.scss'
//redux
import {useSelector} from 'react-redux';

//import FileListItem component
import FileListItem from './FileListItem'

//redux
import { useDispatch } from 'react-redux'
import {miniListDisplay} from '../../reducers/playlistReducer'

//import dynamic URL avoiding static "localhost" in code
const baseURL = URL + '/songs';

function FileListError(props){
    return(
        <>
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
        </>
    )
}

function FileList(){

    //data from useEffect request
    const [data, setData] = useState([]);

    //redux variables
    const dispatch = useDispatch();

    //catching errors into state for error managing in UI
    const [error, setError] = useState([]);

    //get data on DOM loading
    useEffect(() => {

        //closing list of playlists on switching between components
        dispatch(miniListDisplay(0))

        try{
            axios.get(baseURL, {withCredentials: true})

                .then((response) => {
                    setData(response.data[0][0]);
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

    }, [dispatch]);

    return(
        <div data-testid="file-list-test">
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
