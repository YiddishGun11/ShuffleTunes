import React, {useContext, useReducer} from 'react';
import './NavBar.scss';

import { ThemeContext } from '../Context/ThemeContext';
import axios from 'axios';
import {URL} from '../../scripts/url'

//react icons
import {BsPersonLinesFill, BsGear} from 'react-icons/bs'
import {BiLogOut} from 'react-icons/bi'

//import Profil and Settings components
import Profil from '../Profil/Profil';
import Settings from '../Settings/Settings';

const displayState = {display: 0};

function reducer(state, action) {
  switch (action.type) {
    case 'settings':
        if(state.display === 1) {
            return {display: 0}
          }
          else {
            return {display : 1}
          }
    case 'profile':
        if(state.display === 2) {
            return {display: 0}
        }
        else {
            return {display : 2}
        }
    default:
      return {display: 0}
  }
}

function NavBar({setContentDisplay}){

    //useReducer to manage display between Profile and UserSettings component
    const [state, dispatch] = useReducer(reducer, displayState);

    const {theme} = useContext(ThemeContext);


    const logout = () => {
        axios.post(`${URL}/logout`, (null) , {
            withCredentials: true,
        })
        .then(() => {
            window.location = "/";
        })
    }

    return(
        <div className={theme ? 'navbar-section-dark': 'navbar-section-light'}>
            <div className='navbar-section-items'>
                <button onClick={()=>setContentDisplay(0)}><h1>ShuffleTunes</h1></button>
            </div>
            <div className='navbar-section-icons'>
                <div className='navbar-section-icons-childs'>
                    <button onClick={()=>dispatch({type: "profile"})}>
                        <BsPersonLinesFill size={20} id="navbar-icon"/>
                    </button>
                    {state.display === 2 ?(
                        <Profil />
                    ):(
                        <div></div>
                    )}
                </div>
                <div className='navbar-section-icons-childs'> 
                    <button onClick={()=>dispatch({type: "settings"})}>
                        <BsGear size={20} id="navbar-icon"/>
                    </button>
                    {state.display === 1 ?(
                        <Settings/>
                    ):(
                        <div></div>
                    )}
                </div>
                <div className='navbar-section-icons-childs'>
                    <button onClick={logout}><BiLogOut size={20} id="navbar-icon"/></button>
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