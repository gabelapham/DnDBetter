import { useState } from 'react';

import './App.css';
import Func from './components/Functional';
import ClassComp from './components/Class';
import Counter from './components/Counter';
import SpellBackground from './components/SpellBackground';
import Navbar from './components/Navbar';

function App() {

  return (
    <>
        <div>
            <Navbar/>

           
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


    </>
  );
}

export default App
