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
      return {display: 1};
    case 'profile':
      return {display: 2};
    default:
      return {display: 0}
  }
}

function NavBar({setContentDisplay}){

    //useReducer to manage display between Profile and UserSettings component
    const [state, dispatch] = useReducer(reducer, displayState);

    const {theme} = useContext(ThemeContext);

    const [display, setDisplay] = useState(false);

    const handleDisplay = () =>{
        display ? setDisplay(false) : setDisplay(true);
    }

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
                <h1 onClick={()=>setContentDisplay(0)}  >ShuffleTunes</h1>
            </div>
            <div className='navbar-section-icons'>
                <div className='navbar-section-icons-childs'>
                    <BsPersonLinesFill size={20}  onClick={()=>dispatch({type: "profile"})} id="navbar-icon"/>
                    {state.display === 2 ?(
                        <Profil />
                    ):(
                        <div></div>
                    )}
                </div>
                <div className='navbar-section-icons-childs'>      
                    <BsGear size={20} onClick={()=>dispatch({type: "settings"})} id="navbar-icon"/>
                    {state.display === 1 ?(
                        <Settings/>
                    ):(
                        <div></div>
                    )}
                </div>
                <div className='navbar-section-icons-childs'>
                    <BiLogOut size={20} onClick={logout} id="navbar-icon"/>
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