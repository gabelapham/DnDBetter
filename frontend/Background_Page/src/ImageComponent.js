import React from 'react';
import image from './char_sheet.jpg';

function ImageComponent({ userText, onUserTextChange }) {
  const positions = [
    { top: '8%', left: '10%' },
    { top: '6%', left: '43%' },
    { top: '6%', left: '60%' },
    { top: '6%', left: '75%' },
    { top: '9.5%', left: '43%' },
    { top: '9.5%', left: '60%' },
    { top: '9.5%', left: '75%' },
    { top: '19%', left: '70%' },
  ];

  return (
    <div className="image-container">
      <img src={image} alt="Character Sheet" />
      {positions.map((position, index) => (
        <div className="text-box" style={position} key={index}>
          <input
            type="text"
            placeholder={`Enter text ${index + 1}`}
            value={userText[index]}
            onChange={(e) => onUserTextChange(index, e.target.value)}
          />
        </div>
      ))}
    </div>
  );
}

export default ImageComponent;
