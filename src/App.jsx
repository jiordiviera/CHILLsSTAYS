import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css'
import Acceuil from './pages/Acceuil';
import NosPostesRecent from './pages/NosPostesRecent';  

function App() {

  return (
    
       <><Router>
      <div className="">
        <Routes>
          <Route path="/" element={<Acceuil />} />
        </Routes>
      </div>
    </Router><Router>
        <div className="">
          <Routes>
            <Route path="/nospostesrecent" element={<NosPostesRecent />} />
          </Routes>
        </div>
      </Router></>
  )
}

export default App
