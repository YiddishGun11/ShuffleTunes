import React, { useState, useEffect } from 'react'
import axios from 'axios'
import './FileList.css'

const baseURL = 'http://localhost:5000/userFiles'

function FileList(){

    const [data, setData] = useState([]);

    useEffect(() => {
        axios.get(baseURL).then((response) => {
          setData(response.data);
        });

      }, []);

    return(
        <div className='filelist-section'>
            {data === [] ?(
                <div>
                    <h1>Your File List</h1>
                    <p>Your music list is empty</p>
                </div>
            ):(
                <div>
                    <h1>Your File List</h1>
                    <div className='test123'>
                        {data.map((item) => (
                        <p key={item}>{item}</p>
                        ))}
                    </div>
                </div>
            )}
        </div>

    );
}


export default FileList;