import React, {useState, useContext} from 'react';
import './NavBar.scss';

import { ThemeContext } from '../Context/ThemeContext';

//react icons
import {BsPersonLinesFill, BsGear} from 'react-icons/bs'
import {BiLogOut} from 'react-icons/bi'

import Settings from '../Settings/Settings';

function NavBar({setContentDisplay}){

    const {theme} = useContext(ThemeContext);

    const [display, setDisplay] = useState(false);

    const handleDisplay = () =>{
        display ? setDisplay(false) : setDisplay(true);
    }

    return(
        <div className={theme ? 'navbar-section-dark': 'navbar-section-light'}>
            <div className='navbar-section-items'>
                <h1 onClick={()=>setContentDisplay(0)}  >ShuffleTunes</h1>
            </div>
            <div className='navbar-section-icons'>
                <div className='navbar-section-icons-childs'>
                    <BsPersonLinesFill size={20} id="navbar-icon"/>
                </div>
                <div className='navbar-section-icons-childs'>      
                    <BsGear size={20} onClick={()=>handleDisplay()} id="navbar-icon"/>
                    {display ?(
                        <Settings />
                    ):(
                        <div></div>
                    )}
                </div>
                <div className='navbar-section-icons-childs'>
                    <BiLogOut size={20} id="navbar-icon"/>
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