import { useState } from 'react'
import stat_sheet from './assets/stats_sheet.png'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div id="root">
        <h1>
          DnDBetter Stats Page
        </h1>
        <div id="png">
          <img src={stat_sheet} />
        </div>
        <label>
          <input id="charname" name="charName" />
        </label>
        <label>
          <input id="playname" name="playName" />
        </label>
      </div>
    </>
  )
}

export default App
