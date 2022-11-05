import React, {lazy, Suspense} from 'react'
import {Routes, Route} from 'react-router-dom'
import "./App.scss"

const Home = lazy(()=> import ('./Home/Home'));
const Login = lazy(()=> import('./Connexion/ConnexionPage'));
const DashBoard = lazy(()=> import ('./DashBoard/DashBoard'));

function App() {
    return (
        <div className="App">
            <Suspense fallback={<h1 className='loading-message'>Loading...</h1>}>
                <Routes>
                    <Route path="/" element={ <Home /> } />
                    <Route path="/connexion" element={ <Login/> } />
                    <Route path="/dashboard" element={<DashBoard />} />
                </Routes>
            </Suspense >
        </div>
    )
}

export default App;
