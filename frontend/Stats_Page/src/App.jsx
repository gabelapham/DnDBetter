import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import stat_sheet from './assets/stats_sheet.png'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div id="png">
        <img src={stat_sheet} />
      </div>
    </>
  )
}

export default App
