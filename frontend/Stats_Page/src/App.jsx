import { useState } from 'react'
import './App.css'
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom"
import Landing from '/Landing_Page/src/App.jsx'
import StatsApp from './StatsApp.jsx'

function App() {
  
  return (
    <>
      <BrowserRouter>
        <div>
          <div> 
            <NavLink to="/landing" style={({ isActive }) => ({  
              color: isActive ? 'darkred' : 'white' })}> 
              Home 
            </NavLink> 
            <NavLink to="/statsapp" style={({ isActive }) => ({  
              color: isActive ? 'darkred' : 'white' })}> 
              Stats 
            </NavLink> 
          </div> 
          <Routes>
            <Route exact path='/statsapp' element={<StatsApp />} />
            <Route exact path='/landing' element={<Landing />} />
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App
