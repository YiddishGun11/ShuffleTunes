import React, { useState, useEffect } from 'react'
import axios from 'axios'
import './FileList.css'

import FileListItem from './FileListItem'

const baseURL = 'http://localhost:5000/userFiles'

function FileList(){

    const [data, setData] = useState([]);

    //temporaire : test de passage de données entre les 2 composants
    const [test, setTest] = useState([]);

    const Additem = (item, liked) =>{
        if(liked === false){
            test.push(item);
            console.log(test);
        }
        else{
            test.pop(item);
            console.log(test);
        }
    }

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
                        <FileListItem item={item} key={item} Additem={Additem} />
                        ))}
                    </div>
                </div>
            )}
        </div>

    );
}



export default FileList;