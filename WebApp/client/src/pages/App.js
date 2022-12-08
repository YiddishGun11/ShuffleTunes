import React, {lazy, Suspense, useEffect, useState} from 'react'
import {Routes, Route} from 'react-router-dom'
import "./App.scss"

import ThemeContextProvider from '../components/Context/ThemeContext';
import axios from 'axios';
import {URL} from '../scripts/url';
import { Navigate } from 'react-router-dom';

//import loading component
import Loading from '../components/Loading/Loading';

const Home = lazy(()=> import ('./Home/Home'));
const Login = lazy(()=> import('./Connexion/ConnexionPage'));
const DashBoard = lazy(()=> import ('./DashBoard/DashBoard'));
const NoPages = lazy(()=> import('./NoPages/NoPages'));

function App() {

    const [isConnected, setIsConnected] = useState(false);
   
    useEffect(() => {
        async function requireAuth () {
            const response = await axios.get(`${URL}/isAuthenticated`, { withCredentials: true })
            setIsConnected(response.data);
        }

        requireAuth()
    });


    return (
        <ThemeContextProvider>
            <Suspense fallback={<Loading />}>
                <Routes>
                    <Route path="/" element={ <Home /> } />
                    <Route path="/connexion" element={isConnected ? <Navigate to="/dashboard" replace={true} /> : <Login/> } />
                    <Route path="/dashboard" element={isConnected ? <DashBoard /> : <Navigate to="/connexion" replace={true} />}/> 

                </Routes>
            </Suspense >
        </ThemeContextProvider>
    )
}

export default App;
