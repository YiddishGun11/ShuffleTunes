import React from 'react';
import './NavBar.css';
import {BsPersonLinesFill, BsGear} from 'react-icons/bs'
import {BiLogOut} from 'react-icons/bi'

function NavBar({setContentDisplay}){
    return(
        <div className='navbar-section'>
            <div className='navbar-section-items'>
                <h1 onClick={()=>setContentDisplay(0)}  >ShuffleTunes</h1>
            </div>
            <div className='navbar-section-icons'>
                
                <div className='navbar-section-icons-childs'>
                    <BsPersonLinesFill size={20} onClick={()=>affichage()}/>
                </div>
                <div className='Profil'>

                    <div className='Pseudo'>
                        <label className='Pseudo'>Pseudo : Someone</label>
                    </div>
                    <div className='Password'>
                        <label>Password : *********</label>
                        <button className='PasswordButton' type="button"> <img className='PasswordVisibility' alt='' src="https://cdn-icons-png.flaticon.com/512/38/38488.png"/></button>
                    </div>
                    <div>
                        <img className='ProfileImg' alt='' src='https://t3.ftcdn.net/jpg/03/46/83/96/360_F_346839683_6nAPzbhpSkIpb8pmAwufkC7c5eD7wYws.jpg'></img>
                        <button className='ModifButton' type="button"> <img className='ModifImg' alt='' src="https://cdn-icons-png.flaticon.com/512/45/45250.png"/></button>
                    </div>
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
function affichage(){
    var visible = document.querySelector('.Profil').style.visibility;
    console.log(visible);
    if(visible==='hidden'){
        document.querySelector('.Profil').style.visibility='visible';
    }
    else{
        document.querySelector('.Profil').style.visibility='hidden';
    }
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