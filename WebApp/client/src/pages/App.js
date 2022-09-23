import React from 'react'
import {Routes, Route} from 'react-router-dom'
import "./App.css"
import Home from "../pages/Home/Home"
import Connexion from './Connexion/Connexion'

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={ <Home /> } />
        <Route path="/connexion" element={ <Connexion/> } />
      </Routes>
    </div>
  )
}

export default App;
