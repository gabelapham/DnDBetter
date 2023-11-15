import React from 'react';
import DiceRoller from './DiceRoller';

const DiceRollerPopup = ({ onClose }) => {
  return (
    <div className="dice-popup">
      <div className="dice-popup-content">
        <button onClick={onClose}>Close</button>
        <DiceRoller />
      </div>
    </div>
  );
};

export default DiceRollerPopup;
