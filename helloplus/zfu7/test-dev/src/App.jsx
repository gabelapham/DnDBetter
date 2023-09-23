import { useState } from 'react'
import './App.css'
import Navbar from './navbar'
import './navbar.css'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <Navbar />
      </div>
      <h1>DND + BETTER</h1>
      <div>
        <a href="https://www.dndbeyond.com/" target="_blank">
          <img src="https://wallpapercave.com/wp/zD18bKX.jpg" className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src="https://th.bing.com/th/id/OIP.u0cK8R43lC2ArKcPwn5XgwHaEK?w=284&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7" className="logo react" alt="React logo" />
        </a>
      </div>
      
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
