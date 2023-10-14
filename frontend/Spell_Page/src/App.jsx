import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import spell_sheet from './assets/Spell_Sheet2.png'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
        <div className='spell_sheet_container'>
            <img src={spell_sheet} className="spell_sheet" />
        </div>

        {/* <div>
        <a href="./assets/Spell_Sheet.pdf" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        </div>
        <div>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
        </div> */}
        
      
    </>
  )
}

export default App
