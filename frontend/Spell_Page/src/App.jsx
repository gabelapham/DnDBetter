import { useState } from 'react';

import './App.css';
import Func from './components/Functional';
import ClassComp from './components/Class';
import Counter from './components/Counter';
import SpellBackground from './components/SpellBackground';

function App() {

  return (
    <>
        <div>
            <SpellBackground />
        </div>

        
        {/* <input type="text" placeholder='input bar' value={text} onChange={setText}/> */}
        
        

        {/* <Func prop1 = "pass prop value" prop2="2nd prop"/> */}

        {/* how you pass children */}
        {/* <Func>
            <h2> this is a children</h2>
        </Func> */}

        {/* class component prop */}
        {/* <ClassComp classProp="some properties"/> */}


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
  );
}

export default App
