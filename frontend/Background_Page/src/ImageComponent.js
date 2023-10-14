// import React from 'react';
// import image from './char_sheet.jpg'

// function ImageComponent() {
//   return (
//     <div>
//       <img src={image} alt="Character Sheet" />
//     </div>
//   );
// }

// export default ImageComponent;


import React from 'react';
import image from './char_sheet.jpg';

function ImageComponent() {
  return (
    <div className="image-container">
      <img src={image} alt="Character Sheet" />
    </div>
  );
}

export default ImageComponent;
