import React, { useState } from 'react';
import './App.css';
import ImageComponent from './ImageComponent';

function App() {
  const [text, setText] = useState("");
  const [image1, setImage1] = useState(null);
  const [image2, setImage2] = useState(null); // Add a state for the second image

  function handleTextChange(newText) {
    setText(newText);
  }

  function handleImageChange1(event) {
    const selectedImage = event.target.files[0];
    setImage1(URL.createObjectURL(selectedImage));
  }

  function handleImageChange2(event) { // Add a handler for the second image
    const selectedImage = event.target.files[0];
    setImage2(URL.createObjectURL(selectedImage));
  }

  return (
    <>
    <br></br>
      <div className="container">
        <div className="image-wrapper">
          <div className="image-box1">
            {image1 && <img src={image1} alt="Uploaded" className="resized-image" />}
          </div>
          <div className="file-upload-button1">
            <input type="file" accept="image/*" onChange={handleImageChange1} />
          </div>
        </div>
        <div className="image-wrapper">
          <div className="image-box2">
            {image2 && <img src={image2} alt="Uploaded" className="resized-image" />}
          </div>
          <div className="file-upload-button2">
            <input type="file" accept="image/*" onChange={handleImageChange2} />
          </div>
        </div>
        <ImageComponent userText={text} onUserTextChange={handleTextChange} />
      </div>
    </>
  );
}

export default App;
