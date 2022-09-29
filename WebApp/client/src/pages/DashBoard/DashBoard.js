import React from 'react'
import NavBar from '../../components/NavBar/NavBar';
import './DashBoard.css';
import {BsFolderPlus, BsFolder} from 'react-icons/bs'
import {AiOutlineHeart} from 'react-icons/ai'
import {MdOutlinePlaylistAdd} from 'react-icons/md'
import ProfileImage from '../../assets/profil.png'


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
                    <div className='sidebar-item2'>
                        <MdOutlinePlaylistAdd size={25}/>
                        <p>Your PlayList</p>
                    </div>
                    <div className='sidebar-item2'>
                        <AiOutlineHeart size={25}/>
                        <p>Favorites Songs</p>
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
                    <div className='dashboard-main-component'>
                        <h1>Welcom to ShuffleTunes !</h1>
                        <p>Use our different options to optimize your experience on our App</p>
                        <button>Try it now</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default DashBoard;