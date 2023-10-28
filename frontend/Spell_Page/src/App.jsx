import { useState } from 'react';

import './App.css';
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
