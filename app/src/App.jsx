import './App.css'
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom"
import Landing from './frontend/Landing_Page/src/App.jsx'
import Spells from './frontend/Spell_Page/src/SpellApp.jsx'
import StatsApp from './frontend/Stats_Page/src/StatsApp.jsx'
import Background from './frontend/Background_Page/src/App.jsx'
import Login from './frontend/Login_Page/src/App.jsx'
import d20 from './assets/d20.png'

function App() {

  return (
    <>
      <BrowserRouter id="nav">
        <div>
          <div>
            <nav>
            <NavLink to="/landing" id="d20">
              <img src={d20} />
            </NavLink>
            <NavLink id="link" to="/login" style={({ isActive }) => ({  
              color: isActive ? 'red' : 'white' })}> 
              Login
            </NavLink>
            <NavLink id="link" to="/statsapp" style={({ isActive }) => ({  
              color: isActive ? 'red' : 'white' })}> 
              Stats
            </NavLink>
            <NavLink id="link" to="/spells" style={({ isActive }) => ({  
              color: isActive ? 'red' : 'white' })}> 
              Spells 
            </NavLink> 
            <NavLink id="link" to="/background" style={({ isActive }) => ({  
              color: isActive ? 'red' : 'white' })}> 
              Background 
            </NavLink>
            </nav>
          </div> 
          <Routes>
            <Route exact path='/statsapp' element={<StatsApp />} />
            <Route exact path='/landing' element={<Landing />} />
            <Route exact path='/spells' element={<Spells />} />
            <Route exact path='/background' element={<Background />} />
            <Route exact path='/login' element={<Login />} />
          </Routes>
        </div>
      </BrowserRouter>
    </>
  )
}

export default App
