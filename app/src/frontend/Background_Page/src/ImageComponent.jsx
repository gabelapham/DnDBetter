import React from 'react';
import image from './char_sheet.jpg';
import './ImageComponent.css'

function ImageComponent({ userText, onUserTextChange }) {
  const positions = [
    { top: '8%', left: '10%', width: '20%', height: '3%' },
    { top: '6%', left: '43%', width: '15%', height: '3%' },
    { top: '6%', left: '60%', width: '15%', height: '3%' },
    { top: '6%', left: '75%', width: '15%', height: '3%' },
    { top: '9.5%', left: '43%', width: '15%', height: '3%' },
    { top: '9.5%', left: '60%', width: '15%', height: '3%' },
    { top: '9.5%', left: '75%', width: '15%', height: '3%' },
    { top: '19%', left: '70%', width: '15%', height: '3%' },
    { top: '16%', left: '38%', width: '25%', height: '28%'},
    { top: '48%', left: '6%', width: '25%', height: '45%'},
    { top: '47%', left: '37%', width: '55%', height: '25%'},
    { top: '76%', left: '37%', width: '55%', height: '20%'},
  ];

  return (
    <div className="image-container">
      <img src={image} alt="Character Sheet" id="png"/>
      {positions.map((position, index) => {
        let textareaStyle = {
          fontSize: '20px', // Adjust the font size as needed
          width: '180px',   // Default width for most text areas
          height: '30px',  // Default height for most text areas
        };

        // Check if this is one of the last four text areas
        if (index === positions.length - 4) {
          textareaStyle.width = '360px';  // Adjust the width for the last four text areas
          textareaStyle.height = '460px'; // Adjust the height for the last four text areas
        }
        if (index === positions.length - 3) {
          textareaStyle.width = '330px';  // Adjust the width for the last four text areas
          textareaStyle.height = '780px'; // Adjust the height for the last four text areas
        }
        if (index === positions.length - 2) {
          textareaStyle.width = '850px';  // Adjust the width for the last four text areas
          textareaStyle.height = '500px'; // Adjust the height for the last four text areas
        }
        if (index === positions.length - 1) {
          textareaStyle.width = '850px';  // Adjust the width for the last four text areas
          textareaStyle.height = '375px'; // Adjust the height for the last four text areas
        }
        return (
          <div className="text-box" style={position} key={index}>
            <textarea
              style={textareaStyle}
              placeholder={`Enter text ${index + 1}`}
              value={userText[index]}
              onChange={(e) => onUserTextChange(index, e.target.value)}
            />
          </div>
        );
      })}
      <p contentEditable id="character_name"></p>
      <p contentEditable id="age"></p>
      <p contentEditable id="eyes"></p>
      <p contentEditable id="character_height"></p>
      <p contentEditable id="skin"></p>
      <p contentEditable id="weight"></p>
      <p contentEditable id="hair"></p>
    </div>
  );
}

export default ImageComponent;
