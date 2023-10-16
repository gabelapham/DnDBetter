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
          <input id="charname" name="charName" maxLength={25} />
        </label>
        <label>
          <input id="playname" name="playName" maxLength={15} />
        </label>
      </div>
    </>
  )
}

export default App
