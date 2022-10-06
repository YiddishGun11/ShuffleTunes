import React, { useState } from 'react'
import NavBar from '../../components/NavBar/NavBar';
import './DashBoard.css';
import SideBar from '../../components/SideBar/SideBar';
import FileList from '../../components/FileList/FileList';
import FavSongs from '../../components/FavSongs/FavSongs';
//import SoundPlayer from '../../components/SoundPlayer/SoundPlayer';


function DashBoard(){

    const[contentDisplay, setContentDisplay] = useState(0);


    return(
        <div>
            <NavBar contentDisplay={contentDisplay} setContentDisplay={setContentDisplay} />
            <div className='dashboard-section'>

                <SideBar contentDisplay={contentDisplay} setContentDisplay={setContentDisplay}/>
                <div className='test1'>
                    <div className='main-content'>

                        {( ()=>{
                            switch(contentDisplay){
                                case(0):
                                return(
                                    <div className='dashboard-main-component'>
                                        <h1>Welcome to ShuffleTunes !</h1>
                                        <p>Use our different options to optimize your experience on our App</p>
                                        <button>Try it now</button>
                                    </div>
                                )
                                case(1):
                                return(
                                    <FileList />
                                )

                                case(2):
                                return(
                                    <FavSongs />
                                )

                                default: 
                                return(
                                    <div></div>
                                )
                            }

                        })()}
                    </div>
                    <div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default DashBoard;