import React, { useState } from 'react'
import './DashBoard.scss';

import NavBar from '../../components/NavBar/NavBar';
import SideBar from '../../components/SideBar/SideBar';
import FileList from '../../components/FileList/FileList';
import FavSongs from '../../components/FavSongs/FavSongs';
import SoundPlayer from '../../components/SoundPlayer/SoundPlayer';
import PlayList from '../../components/PlayList/Playlist';


//redux
import {useSelector} from 'react-redux'


function DashBoard(){

    const[contentDisplay, setContentDisplay] = useState(0);

    const display = useSelector((state)=>state.musicReducer.display);

    return(
        <div>
            <NavBar contentDisplay={contentDisplay} setContentDisplay={setContentDisplay} />
            <div className='dashboard-section'>

                <SideBar contentDisplay={contentDisplay} setContentDisplay={setContentDisplay}/>
                <div className='components-container'>
                    <div className='main-content'>

                        {( ()=>{
                            switch(contentDisplay){
                            case(0):
                                return(
                                    <div className='dashboard-main-component'>
                                        <h1>Welcome to ShuffleTunes !</h1>
                                        <p>Use our different options to optimize your experience on our App</p>
                                        <button onClick={() => setContentDisplay(3)}>Try it now</button>
                                    </div>
                                )
                            case(1):
                                return(
                                    <FileList/>
                                )

                            case(2):
                                return(
                                    <FavSongs />
                                )

                            case(4):
                                return(
                                    <PlayList />
                                )

                            default: 
                                return(
                                    <div></div>
                                )
                            }

                        })()}
                    </div>
                    <div>
                        {display ?
                            (
                                <SoundPlayer />
                            ):
                            (
                                <div></div>
                            )
                        }
                    </div>
                </div>
            </div>
        </div>
    );
}

export default DashBoard;