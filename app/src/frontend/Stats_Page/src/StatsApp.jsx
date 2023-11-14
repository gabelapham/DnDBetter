import { useState } from 'react'
import stat_sheet from './assets/stats_sheet.png'
import './StatsApp.css'
import Stats from './Stats.jsx'
import DiceRoller from './DiceRoller.jsx'


const StatsApp = () => {

  return (
    <>
      <div id="root">
        <br />
        <div id="png">
          <img src={stat_sheet} />
          //
          <DiceRoller /> {/* Render the DiceRoller component here */}
          //
        <Stats />
        </div>
      </div>
    </>
  )
}

export default StatsApp
