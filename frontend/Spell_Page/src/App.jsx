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

    </>
  );
}

export default App
