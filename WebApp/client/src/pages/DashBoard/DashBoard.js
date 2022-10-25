import React, { useState } from 'react'
import NavBar from '../../components/NavBar/NavBar';
import './DashBoard.css';
import SideBar from '../../components/SideBar/SideBar';
import FileList from '../../components/FileList/FileList';
import FavSongs from '../../components/FavSongs/FavSongs';
import SoundPlayer from '../../components/SoundPlayer/SoundPlayer';
import PlayList from '../../components/PlayList/Playlist';



//redux
import {useSelector} from 'react-redux'


function DashBoard(){

    const[contentDisplay, setContentDisplay] = useState(0);

    const[MusicBar, setMusicBar] = useState(false);

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
                                    <FileList MusicBar={MusicBar} setMusicBar={setMusicBar} />
                                )

                                case(2):
                                return(
                                    <FavSongs />
                                )

                            case(4):
                                return(
                                    <PlayList />
                                )
                            case(5):
                                return(
                                <div className='Profil'>
                                    <div className='Retour'>
                                        <label className='Retour' onClick={() => setContentDisplay(0)}>Cliquez ici pour retourner au menu</label>
                                    </div>
                                    <div className='Pseudo'>
                                        <label className='Pseudo'>Pseudo : Someone</label>
                                    </div>
                                    <div>
                                        <img className='ProfileImg' alt='' src='https://t3.ftcdn.net/jpg/03/46/83/96/360_F_346839683_6nAPzbhpSkIpb8pmAwufkC7c5eD7wYws.jpg'></img>
                                        <button className='ModifButton' type="button"> <img className='ModifImg' alt='' src="https://cdn-icons-png.flaticon.com/512/45/45250.png"/></button>
                                    </div>
                                </div>
                                
                                )

                            default: 
                                return(
                                    <div></div>
                                )
                            }

                        })()}
                    </div>
                    <div>
                        {MusicBar ?(
                            <SoundPlayer />
                        ):(
                            <p></p>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default DashBoard;