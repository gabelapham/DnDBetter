import { useState } from 'react'
import './index.css'
import placeholder from './assets/placeholder.png'
import jon from './assets/jon.png'
import gabe from './assets/gabe.png'
import triton from './assets/triton.png'
import tyler from './assets/tyler.png'
import dice from './assets/dice2.jpg'
import cooper from './assets/cooper.png'

const Landing = () => {
  const [count, setCount] = useState(0)

  return (
    <>
      <div id="root">
        <div className="header-div">

          <div className="overlay-text">Welcome to DnDBetter!</div>
        </div>
        {/* <h1>Welcome to DnDBetter!</h1> */}
        <br />
        <hr />
        <br />
        <h2>What is DnDBetter?</h2>
        <p>DnDBetter is a better way to play DnD! <i>Kind of...</i> DnDBetter is an intuitive and interactive character sheet creator and manager.</p>
        {/* <div>
        <button>Login</button>
        <br></br>
        <br></br>
        <button>Sign Up</button>
      </div> */}
        <div>
          <h2>Features</h2>
          <ul className="features">
            <li className="landing-list-items">Comprehensive character sheet creator</li>
            <li className="landing-list-items">Intuitive editor that makes editing the character sheet easy</li>
            <li className="landing-list-items">Account management that allows users to create and store multiple character sheets</li>
          </ul>
        </div>
        <div>
          <h2>Origin</h2>
          <p>Our idea for DnDBetter was spurred on by our frustration with other character sheet creators out there that were difficult
            to use and wholly unintuitive. Our search for something better turned up empty. And so we decided to do something about it.
            Thus, the framework was set and our quest for a better way to play DnD began.
          </p>
        </div>
        <br />
        <hr />
        <br />
        <div>
          <h2>Meet the Team</h2>
        </div>
        <div className="aboutme">
          <div className="founderimage">
            <img src={jon} height={150} width={150} />
          </div>
          <div className="description">
            <h2>Jonathan Clark</h2>
          </div>
        </div>
        <br />
        <div className="aboutme">
          <div className="founderimage">
            <img src={gabe} height={150} width={150} />
          </div>
          <div className="description">
            <h2>Gabe Lapham</h2>
          </div>
        </div>
        <br />
        <div className="aboutme">
          <div className="founderimage">
            <img src={triton} height={150} width={150} />
          </div>
          <div className="description">
            <h2>Triton Eden</h2>
          </div>
        </div>
        <br />
        <div className="aboutme">
          <div className="founderimage">
            <img src={tyler} height={150} width={150} />
          </div>
          <div className="description">
            <h2>Tyler Catuncan</h2>
          </div>
        </div>
        <br />
        <div className="aboutme">
          <div className="founderimage">
            <img src={cooper} height={150} width={150} />
          </div>
          <div className="description">
            <h2>Cooper Sarphie</h2>
          </div>
        </div>
        <br />
        <div className="aboutme">
          <div className="founderimage">
            <img src={placeholder} height={150} width={150} />
          </div>
          <div className="description">
            <h2>Seungwoo "Aiden" An</h2>
          </div>
        </div>
        <br />
        <div className="aboutme">
          <div className="founderimage">
            <img src={placeholder} height={150} width={150} />
          </div>
          <div className="description">
            <h2>Zichen "Frank" Fu</h2>
          </div>
        </div>
      </div>
    </>
  )
}

export default Landing
