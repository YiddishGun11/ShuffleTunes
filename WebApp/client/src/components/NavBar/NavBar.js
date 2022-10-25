import React from 'react';
import './NavBar.css';
import {BsPersonLinesFill, BsGear} from 'react-icons/bs'
import {BiLogOut} from 'react-icons/bi'

function NavBar({contentDisplay, setContentDisplay}){
    return(
        <div className='navbar-section'>
            <div className='navbar-section-items'>
                <h1 onClick={()=>setContentDisplay(0)}  >ShuffleTunes</h1>
            </div>
            <div className='navbar-section-icons'>
                
                <div className='navbar-section-icons-childs'>
                    <BsPersonLinesFill size={20} onClick={()=>setContentDisplay(5)} /></div>
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