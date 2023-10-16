import React from 'react';
import image from './char_sheet.jpg';

function ImageComponent({ userText, onUserTextChange }) {
  const positions = [
    { top: '3%', left: '5%' },
    { top: '0.8%', left: '37%' },
    { top: '0.8%', left: '55%' },
    { top: '0.8%', left: '70%' },
    { top: '4%', left: '37%' },
    { top: '4%', left: '55%' },
    { top: '4%', left: '70%' },
    { top: '14%', left: '65%' },
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
