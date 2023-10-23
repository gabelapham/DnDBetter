import React from 'react';
import image from './char_sheet.jpg';

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
      <img src={image} alt="Character Sheet" />
      {positions.map((position, index) => {
        let textareaStyle = {
          fontSize: '20px', // Adjust the font size as needed
          width: '200px',   // Default width for most text areas
          height: '30px',  // Default height for most text areas
        };

        // Check if this is one of the last four text areas
        if (index === positions.length - 4) {
          textareaStyle.width = '390px';  // Adjust the width for the last four text areas
          textareaStyle.height = '550px'; // Adjust the height for the last four text areas
        }
        if (index === positions.length - 3) {
          textareaStyle.width = '400px';  // Adjust the width for the last four text areas
          textareaStyle.height = '900px'; // Adjust the height for the last four text areas
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
    </div>
  );
}

export default ImageComponent;
