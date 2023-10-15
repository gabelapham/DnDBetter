import { useState } from 'react'
import stat_sheet from './assets/stats_sheet.png'
import './App.css'
import './App.jsx'

function Stats() {
    return (
        <>
        <input id="str" type="number" step="1" pattern="\d+" name="strInt" min="1" max="20" />
        <input id="dex" type="number" step="1" pattern="\d+" name="dexInt" min="1" max="20" />
        <input id="con" type="number" step="1" pattern="\d+" name="conInt" min="1" max="20" />
        <input id="int" type="number" step="1" pattern="\d+" name="intInt" min="1" max="20" />
        <input id="wis" type="number" step="1" pattern="\d+" name="wisInt" min="1" max="20" />
        <input id="cha" type="number" step="1" pattern="\d+" name="chaInt" min="1" max="20" />
        </>
    )
}