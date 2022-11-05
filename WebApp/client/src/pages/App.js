import React, {lazy, Suspense} from 'react'
import {Routes, Route} from 'react-router-dom'
import "./App.scss"

import ThemeContextProvider from '../components/Context/ThemeContext';

const Home = lazy(()=> import ('./Home/Home'));
const Login = lazy(()=> import('./Connexion/ConnexionPage'));
const DashBoard = lazy(()=> import ('./DashBoard/DashBoard'));

function App() {
    return (
        <ThemeContextProvider>
            <Suspense fallback={<h1 className='loading-message'>Loading...</h1>}>
                <Routes>
                    <Route path="/" element={ <Home /> } />
                    <Route path="/connexion" element={ <Login/> } />
                    <Route path="/dashboard" element={<DashBoard />} />
                </Routes>
            </Suspense >
        </ThemeContextProvider>
    )
}

export default App;
