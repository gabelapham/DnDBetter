import React, { useState } from 'react';
import stat_sheet from './assets/stats_sheet.png';
import './StatsApp.css';
import Stats from './Stats.jsx';
import DiceRollerPopup from './DiceRollerPopup.jsx';

const StatsApp = () => {
  const [isDicePopupOpen, setDicePopupOpen] = useState(false);

  const toggleDicePopup = () => {
    setDicePopupOpen(!isDicePopupOpen);
  };

  return (
    <>
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
    </>
  );
};

export default StatsApp;
