import React from 'react'
import NavBar from '../../components/NavBar/NavBar';
import './DashBoard.css';
import {BsFolderPlus, BsFolder} from 'react-icons/bs'
import ProfileImage from '../../assets/profil.png'
import SoundPlayer from '../../components/SoundPlayer/SoundPlayer';


function DashBoard(){
    return(
        <div>
            <NavBar />
            <div className='dashboard-section'>

                <div className='sidebar'>
                    <div className='sidebar-item1'>
                        <BsFolder size={25} />
                        <p>Your Files</p>
                    </div>
                    <div className='sidebar-item2'>
                        <BsFolderPlus size={25}/>
                        <p>Upload new files</p>
                    </div>
                    <div className='sidebar-item3'>
                        <img src={ProfileImage} alt="profil"></img>
                        <div>
                            <p>Nom</p>
                            <p>Prenom</p>
                        </div>
                    </div>
                </div>

                <div className='main-content'>
                        <SoundPlayer/>
                </div>
            </div>
        </div>
    );
}

export default DashBoard;