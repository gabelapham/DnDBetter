import { useState } from 'react'
import './App.css'

const Landing = () => {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Welcome to DnDBetter!</h1>
      <h2>What is DnDBetter?</h2>
      <p>DnDBetter is a better way to play DnD! Kind of. DnDBetter is an intuitive and interactive character sheet creator and manager.</p>
      <div>
        <button>Login</button>
        <br></br>
        <br></br>
        <button>Sign Up</button>
      </div>
      <div>
        <h2>Features</h2>
        <ul>  
          <li>Comprehensive character sheet creator</li>
          <li>Intuitive editor that makes editing the character sheet easy</li>
          <li>Account management that allows users to create and store multiple character sheets</li>
        </ul>
      </div>
      <div>
        <h2>Origin</h2>
        <p>Our idea for DnDBetter was spurred on by our frustration with other character sheet creators out there that were difficult
          to use and wholly unintuitive. Our search for something better turned up empty. And so we decided to do something about it.
          Thus, the framework was set and our quest for a better way to play DnD began.
        </p>
      </div>
      <div>
        <h2>About the Founders</h2>
      </div>
    </>
  )
}

export default Landing
