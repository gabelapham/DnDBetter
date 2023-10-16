import React, { useState } from 'react';
import './App.css';
import ImageComponent from './ImageComponent';

function App() {
  const [text, setText] = useState("");

  function handleTextChange(newText) {
    setText(newText);
  }

  return (
    <div className="container">
      <div className="image-wrapper">
        <ImageComponent userText={text} onUserTextChange={handleTextChange} />
      </div>
    </div>
  );
}

export default App;
