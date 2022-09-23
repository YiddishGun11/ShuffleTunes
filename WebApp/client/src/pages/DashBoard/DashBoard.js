import React from 'react'
import NavBar from '../../components/NavBar/NavBar';
import './DashBoard.css';


function DashBoard(){
    return(
        <div>
            <NavBar />
            <h1 className='test'>DashBoard</h1>
        </div>
    );
}

export default DashBoard;