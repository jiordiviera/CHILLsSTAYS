import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css'
import Acceuil from './pages/Acceuil';
import NosPostesRecent from './pages/NosPostesRecent';  
import AcceuilEtudiant from './pages/AcceuilEtudiant';


function App() {

  return (
    
       <><Router>
      <div className="">
        <Routes>
          <Route path="/" element={<Acceuil/>} />
          <Route path="/acceuiletudiant" element={<AcceuilEtudiant/>} />
            <Route path="/nospostesrecent" element={<NosPostesRecent />} />
          </Routes>
        </div>
      </Router></>
  )
}

export default App
