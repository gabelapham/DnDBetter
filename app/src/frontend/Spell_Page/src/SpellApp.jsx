import React, { useState } from 'react';
import './SpellApp.css';
import SpellBackground from './components/SpellBackground';
import Navbar from './components/Navbar';
import SpellDiceRoller from './components/DiceRoller'; // Adjust the path based on your folder structure

function App() {
  const [isDicePopupOpen, setDicePopupOpen] = useState(false);

  const toggleDicePopup = () => {
    setDicePopupOpen(!isDicePopupOpen);
  };

  return (
    <>
      <br />
      <div>
        <button onClick={toggleDicePopup}>Open Spell Dice Roller</button>
        {isDicePopupOpen && <SpellDiceRoller onClose={() => setDicePopupOpen(false)} />}
        <SpellBackground />
        {/* Other components or content */}
      </div>
    </>
  );
}

export default App;
