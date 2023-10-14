import { useState } from 'react'
import stat_sheet from './assets/stats_sheet.png'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div>
      <h1>
        DnDBetter Stats Page
      </h1>
      </div>
      <div id="png">
        <img src={stat_sheet} />
      </div>
    </>
  )
}

export default App
