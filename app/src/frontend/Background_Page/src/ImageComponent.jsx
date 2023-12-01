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
      {}
      <p contentEditable id="character_name"></p>
      <p contentEditable id="age"></p>
      <p contentEditable id="eyes"></p>
      <p contentEditable id="character_height"></p>
      <p contentEditable id="skin"></p>
      <p contentEditable id="weight"></p>
      <p contentEditable id="hair"></p>
      <p contentEditable id="symbol_name"></p>
      <p contentEditable id="allies_and_organizations"></p>
      <p contentEditable id="character_backstory"></p>
      <p contentEditable id="additional_features_traits"></p>
      <p contentEditable id="treasure"></p>
      
      
    </div>
  );
}

export default ImageComponent;
