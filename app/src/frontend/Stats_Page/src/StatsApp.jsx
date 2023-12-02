import React, { useState, useEffect } from 'react';
import stat_sheet from './assets/stats_sheet.png';
import './StatsApp.css';
import Stats from './Stats.jsx';
import DiceRoller from './components/DiceRoller.jsx';
import DiceRollerPopup from './components/DiceRollerPopup.jsx';

const StatsApp = () => {
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
      {isLoggedIn ? (
        <div id="root">
          <br />
          <div id="png">
            <img src={stat_sheet} />
            <button id="diceRollerButton" onClick={toggleDicePopup}>
              Open Dice Roller
            </button>
            {isDicePopupOpen && <DiceRollerPopup onClose={() => setDicePopupOpen(false)} />}
            <Stats />
          </div>
          <button type="button" onClick={handleSaving} style={{
            position: 'fixed',
            bottom: '2%',
            left: '2%'
          }}>Save</button>
        </div>
      ) : (
        <div id="root">
          <br />
          <div id="png">
            <img src={stat_sheet} />
            <button id="diceRollerButton" onClick={toggleDicePopup}>
              Open Dice Roller
            </button>
            {isDicePopupOpen && <DiceRollerPopup onClose={() => setDicePopupOpen(false)} />}
            <Stats />
          </div>
        </div>
      )}

    </>
  );
};

export default StatsApp;
