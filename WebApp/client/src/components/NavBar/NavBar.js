import React from 'react';
import './NavBar.css';
import {BsPersonLinesFill, BsGear} from 'react-icons/bs'
import {BiLogOut} from 'react-icons/bi'

function NavBar(){
    return(
        <div className='navbar-section'>
            <div className='navbar-section-items'>
                <h1>ShuffleTunes</h1>
                <p>Favoris</p>
                <p>Playlist</p>
            </div>
            <div className='navbar-section-icons'>
                <div className='navbar-section-icons-childs'>
                    <BsPersonLinesFill size={20} />
                </div>
                <div className='navbar-section-icons-childs'>      
                    <BsGear size={20} />
                </div>
                <div className='navbar-section-icons-childs'>
                    <BiLogOut size={20}/>
                </div>
            </div>
        </div>
    );
}

export default NavBar;


/*
    <div>
        <BsPersonLinesFill size={25} />
    </div>
    <div>       
        <BsGear size={25} />
    </div>
    <div>
        <BiLogOut size={25}/>
    </div>

*/