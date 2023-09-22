import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://www.youtube.com/watch?v=7ODcC5z6Ca0&ab_channel=GamingSoundFX" target="_blank">
          <img src="https://emojiisland.com/cdn/shop/products/Crying_Emoji_Icon_2_1024x1024.png?v=1571606091" className="logo" alt="Vite logo" />
        </a>
        <a href="https://youtu.be/dQw4w9WgXcQ?si=9I1pkFsgNUIoyqXi" target="_blank">
          <img src="https://www.cambridge.org/elt/blog/wp-content/uploads/2019/07/Sad-Face-Emoji.png" className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Web Dev is HARD.</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          Web Dev Tears = {count}
        </button>
      </div>
      <p className="read-the-docs">
        Support the Web Dev team by giving me a 100 on this assignment please.
      </p>
    </>
  )
}

export default App
