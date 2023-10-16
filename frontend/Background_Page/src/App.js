// import React, { useState } from 'react';
// import './App.css';
// import ImageComponent from './ImageComponent';

// function App() {
//   const [text, setText] = useState("");

//   function handleTextChange(newText) {
//     setText(newText);
//   }

//   return (
//     <div className="container">
//       <div className="image-wrapper">
//         <ImageComponent userText={text} onUserTextChange={handleTextChange} />
//       </div>
//     </div>
//   );
// }

// export default App;

import React, { useState } from 'react';
import './App.css';
import ImageComponent from './ImageComponent';

function App() {
  const [text, setText] = useState("");
  const [image, setImage] = useState(null);

  function handleTextChange(newText) {
    setText(newText);
  }

  function handleImageChange(event) {
    const selectedImage = event.target.files[0];
    setImage(URL.createObjectURL(selectedImage));
  }

  return (
    <div className="container">
      <div className="image-wrapper">
        <input type="file" accept="image/*" onChange={handleImageChange} />
        {image && <img src={image} alt="Uploaded" />}
        <ImageComponent userText={text} onUserTextChange={handleTextChange} />
      </div>
    </div>
  );
}

export default App;
