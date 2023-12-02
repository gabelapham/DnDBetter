import React, { useState, useEffect } from 'react';
import './SpellApp.css';
import SpellBackground from './components/SpellBackground';
import SpellDiceRoller from './components/DiceRoller'; // Adjust the path based on your folder structure

function App() {
  const [isDicePopupOpen, setDicePopupOpen] = useState(false);

  const toggleDicePopup = () => {
    setDicePopupOpen(!isDicePopupOpen);
  };

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [auth, setAuth] = useState(null);

  useEffect(() => {
    const storedAuth = localStorage.getItem('auth');
    if (storedAuth) {
      setAuth(JSON.parse(storedAuth));
      setIsLoggedIn(true); // Make sure to set the logged-in state
    }
  }, []);

  const handleSaving = () => {
    // Handle saving logic here
    console.log('Saving data...');
  }

  return (
    <>
      <br />
      {isLoggedIn ? (
        <div>
          <button onClick={toggleDicePopup}>Open Spell Dice Roller</button>
          {isDicePopupOpen && <SpellDiceRoller onClose={() => setDicePopupOpen(false)} />}
          <SpellBackground />
          {<button type="button" onClick={handleSaving} style={{
            position: 'fixed',
            bottom: '2%',
            left: '2%'
          }}>Save</button>}
        </div>
      ) : (
        <div>
          <button onClick={toggleDicePopup}>Open Spell Dice Roller</button>
          {isDicePopupOpen && <SpellDiceRoller onClose={() => setDicePopupOpen(false)} />}
          <SpellBackground />
          {/* Other components or content */}
        </div>
      )}


    </>
  );
}

export default App;
