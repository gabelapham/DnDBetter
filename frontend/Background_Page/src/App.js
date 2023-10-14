

import React from 'react';
import './App.css'; // Your existing CSS file
import ImageComponent from './ImageComponent';

function App() {
  const [text, setText] = React.useState("")

  function handleText(event) {
    const newText = event.target.value
    setText(newText)
  }

  return (
    <div classname="container">
        <input type="text" placeholder="Type text here" classname="input" onChange={handleText}
        value={text}/>
        <div classname="image-wrapper">
         <ImageComponent/> {}
          </div>
        </div>
  )
}

export default App;
