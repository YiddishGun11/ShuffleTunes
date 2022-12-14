import React, {lazy, Suspense} from 'react'
import {Routes, Route} from 'react-router-dom'
import "./App.scss"

import ThemeContextProvider from '../components/Context/ThemeContext';
import axios from 'axios';
import {URL} from '../scripts/url';
import { Navigate } from 'react-router-dom';

const Home = lazy(()=> import ('./Home/Home'));
const Login = lazy(()=> import('./Connexion/ConnexionPage'));
const DashBoard = lazy(()=> import ('./DashBoard/DashBoard'));

function App() {

    async function requireAuth () {
        axios.get(`${URL}/isAuthenticated`, { withCredentials: true })
        .then((response) => {            
            return response.data
        })
        .catch(() => {
            return false
        })
    }


    return (
        <ThemeContextProvider>
            <Suspense fallback={<div className='loading-message'><h1>Loading...</h1></div>}>
                <Routes>
                    <Route path="/" element={ <Home /> } />
                    <Route path="/connexion" element={requireAuth() === true ? <Navigate to="/dashboard" replace={true} /> : <Login/> } />
                    <Route path="/dashboard" element={requireAuth() === true ? <DashBoard /> : <Navigate to="/connexion" replace={true} />}/> 
                </Routes>
            </Suspense >
        </ThemeContextProvider>
    )
}

export default App;
