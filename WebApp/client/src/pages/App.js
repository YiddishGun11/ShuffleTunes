import React from 'react'
import {Routes, Route} from 'react-router-dom'
import "./App.css"
import Home from "../pages/Home/Home"
import ConnexionPage from './Connexion/ConnexionPage'
import DashBoard from './DashBoard/DashBoard'

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={ <Home /> } />
        <Route path="/connexion" element={ <ConnexionPage/> } />
        <Route path="/dashboard" element={<DashBoard />} />
      </Routes>
    </div>
  )
}

export default App;
