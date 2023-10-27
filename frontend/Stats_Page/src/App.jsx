import { useState } from 'react'
import stat_sheet from './assets/stats_sheet.png'
import './App.css'
import Stats from './Stats.jsx'

function App() {
  const [playerClass, setClass] = useState("Barbarian")
  const [playerBackground, setBackground] = useState("Acolyte")
  const [playerRace, setRace] = useState("Dragonborn")
  const [playerSubRace, setSubRace] = useState("Black")
  const [playerAlignment, setAlignment] = useState("LG")
  const [playerSpeed, setSpeed] = useState("30")

  function raceFunc(e) {
    setRace(e)
    switch(e) {
      case "Dragonborn":
        setRace("Dragonborn")
        subrace.value = "Black"
        setSubRace("Black")
        setSpeed("30")
        return;
      case "Dwarf":
        setRace("Dwarf")
        subrace.value = "Hill"
        setSubRace("Hill")
        setSpeed("25")
        return;
      case "Elf":
        setRace("Elf")
        subrace.value = "High"
        setSubRace("High")
        setSpeed("30")
        return;
      case "Gnome":
        setRace("Gnome")
        subrace.value = "Rock"
        setSubRace("Rock")
        setSpeed("25")
        return;
      case "Half-Elf":
        setRace("Half-Elf")
        subrace.value = "NA"
        setSubRace("NA")
        setSpeed("30")
        return;
      case "Halfling":
        setRace("Halfling")
        subrace.value = "Lightfoot"
        setSubRace("Lightfoot")
        setSpeed("25")
        return;
      case "Half-Orc":
        setRace("Half-Orc")
        subrace.value = "NA"
        setSubRace("NA")
        setSpeed("30")
        return;
      case "Human":
        setRace("Human")
        subrace.value = "Normal"
        setSubRace("Normal")
        setSpeed("30")
        return;
      case "Tiefling":
        setRace("Tiefling")
        subrace.value = "NA"
        setSubRace("NA")
        return;
      default:
        subrace.value = "NA"
        setSubRace("NA")
        setSpeed("30")
        return;
    }
  }
  return (
    <>
      <div id="root">
        <div>
        <button id="leftbutton">Background <br /> ←</button>
        <button id="rightbutton">Spells <br /> →</button>
        </div>
        <h1>
          Character Stats
        </h1>
        <div id="png">
          <img src={stat_sheet} />
          <button id="shortRest">
            Short Rest
          </button>
          <button id="longRest">
            Long Rest
          </button>
          <input id="charName" />
          <input id="playName" />
          <input type="number" id="exp" />
          <p id="speed">{playerSpeed}ft</p>

          <select id="class">
          <option value="Barbarian">Barbarian</option>
          <option value="Bard">Bard</option>
          <option value="Cleric">Cleric</option>
          <option value="Druid">Druid</option>
          <option value="Fighter">Fighter</option>
          <option value="Monk">Monk</option>
          <option value="Paladin">Paladin</option>
          <option value="Ranger">Ranger</option>
          <option value="Rogue">Rogue</option>
          <option value="Sorcerer">Sorcerer</option>
          <option value="Warlock">Warlock</option>
          <option value="Wizard">Wizard</option>
        </select>

        <select id="background">
          <option value="Acolyte">Acolyte</option>
          {/*}
          <option value="Charlatan">Charlatan</option>
          <option value="Criminal/Spy">Criminal/Spy</option>
          <option value="Entertainer">Entertainer</option>
          <option value="Folk Hero">Folk Hero</option>
          <option value="Gladiator">Gladiator</option>
          <option value="Guild Merchant">Guild Merchant</option>
          <option value="Hermit">Hermit</option>
          <option value="Knight">Knight</option>
          <option value="Noble">Noble</option>
          <option value="Outlander">Outlander</option>
          <option value="Pirate">Pirate</option>
          <option value="Sage">Sage</option>
          <option value="Sailor">Sailor</option>
          <option value="Soldier">Soldier</option>
          <option value="Urchin">Urchin</option>
  */}
        </select>

        <select id="race" onChange={() => raceFunc(race.value)}>
          <option value="Dragonborn">Dragonborn</option>
          <option value="Dwarf">Dwarf</option>
          <option value="Elf">Elf</option>
          <option value="Gnome">Gnome</option>
          <option value="Half-Elf">Half-Elf</option>
          <option value="Halfling">Halfling</option>
          <option value="Half-Orc">Half-Orc</option>
          <option value="Human">Human</option>
          <option value="Tiefling">Tiefling</option>
        </select>

        <select id="subrace" onChange={() => setSubRace(subrace.value)}>
          <option disabled={(playerRace != "Dragonborn")} value="Black">Black</option>
          <option disabled={(playerRace != "Dragonborn")} value="Blue">Blue</option>
          <option disabled={(playerRace != "Dragonborn")} value="Brass">Brass</option>
          <option disabled={(playerRace != "Dragonborn")} value="Bronze">Bronze</option>
          <option disabled={(playerRace != "Dragonborn")} value="Copper">Copper</option>
          <option disabled={(playerRace != "Dragonborn")} value="Gold">Gold</option>
          <option disabled={(playerRace != "Dragonborn")} value="Green">Green</option>
          <option disabled={(playerRace != "Dragonborn")} value="Red">Red</option>
          <option disabled={(playerRace != "Dragonborn")} value="Silver">Silver</option>
          <option disabled={(playerRace != "Dragonborn")} value="White">White</option>

          <option disabled={(playerRace != "Dwarf")} value="Hill">Hill</option>
          <option disabled={(playerRace != "Dwarf")} value="Mountain">Mountain</option>

          <option disabled={(playerRace != "Elf")} value="High">High</option>
          <option disabled={(playerRace != "Elf")} value="Wood">Wood</option>

          <option disabled={(playerRace != "Gnome")} value="Rock">Rock</option>

          <option disabled={(playerRace != "Halfling")} value="Lightfoot">Lightfoot</option>
          <option disabled={(playerRace != "Halfling")} value="Stout">Stout</option>

          <option disabled={(playerRace != "Human")} value="Normal">Normal</option>
          <option disabled={(playerRace != "Human")} value="Variant">Variant</option>

          <option disabled={(playerRace != "Half-Elf" || playerRace != "Half-Orc" || playerRace != "Tiefling")} value="NA">N/A</option>
        </select>

        <select id="alignment">
          <option value="LG">Lawful Good</option>
          <option value="NG">Neutral Good</option>
          <option value="CG">Chaotic Good</option>
          <option value="LN">Lawful Neutral</option>
          <option value="TN">True Neutral</option>
          <option value="CN">Chaotic Neutral</option>
          <option value="LE">Lawful Evil</option>
          <option value="NE">Neutral Evil</option>
          <option value="CE">Chaotic Evil</option>
        </select>
        <Stats />
        <p contentEditable id="personality"></p>
        <p contentEditable id="ideals"></p>
        <p contentEditable id="bonds"></p>
        <p contentEditable id="flaws"></p>
        </div>
      </div>
    </>
  )
}

export default App
