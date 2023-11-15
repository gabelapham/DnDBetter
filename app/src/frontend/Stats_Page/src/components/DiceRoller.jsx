import React, { useState } from 'react';

const DiceRoller = () => {
  const [result, setResult] = useState(null);

  const rollDice = (sides) => {
    const min = 1;
    const max = sides;
    const randomValue = Math.floor(Math.random() * (max - min + 1)) + min;
    return randomValue;
  };

  const handleRollClick = (sides) => {
    const rolledValue = rollDice(sides);
    setResult(`You rolled a ${rolledValue} on a ${sides}-sided die.`);
  };

  return (
    <div>
      <button onClick={() => handleRollClick(4)}>Roll D4</button>
      <button onClick={() => handleRollClick(6)}>Roll D6</button>
      <button onClick={() => handleRollClick(8)}>Roll D8</button>
      <button onClick={() => handleRollClick(10)}>Roll D10</button>
      <button onClick={() => handleRollClick(12)}>Roll D12</button>
      <button onClick={() => handleRollClick(20)}>Roll D20</button>
      {result && <p>{result}</p>}
    </div>
  );
};

export default DiceRoller;
