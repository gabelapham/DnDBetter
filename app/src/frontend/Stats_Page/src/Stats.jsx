import { useState } from 'react'
import './Stats.css'
import Popup from './ItemSearch.jsx'
import search from './assets/search.png'

function Stats() {

    
    const [playerClass, setClass] = useState("Barbarian")
    const [playerBackground, setBackground] = useState("Acolyte")
    const [playerRace, setRace] = useState("Dragonborn")
    const [playerSubRace, setSubRace] = useState("Black")
    const [playerAlignment, setAlignment] = useState("LG")
    const [playerSpeed, setSpeed] = useState("30")
    const [playerHitDice, setHitDice] = useState(12)

    const [buttonPopup, setButtonPopup] = useState(false)

    const [level, setLevel] = useState(1)

    
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

    const [strength, setStrength] = useState(10)
    const [strengthMod, setStrengthMod] = useState(0)
    const [strength_st_pb, setStrPB] = useState(false)
    function setStrFunc(e) {
        setStrPB(e.target.checked)
    }

    const [dexterity, setDexterity] = useState(10)
    const [dexterityMod, setDexterityMod] = useState(0)
    const [dexterity_st_pb, setDexPB] = useState(false)
    function setDexFunc(e) {
        setDexPB(e.target.checked)
    }

    const [constitution, setConstitution] = useState(10)
    const [constitutionMod, setConstitutionMod] = useState(0)
    const [constitution_st_pb, setConPB] = useState(false)
    function setConFunc(e) {
        setConPB(e.target.checked)
    }

    const [intelligence, setIntelligence] = useState(10)
    const [intelligenceMod, setIntelligenceMod] = useState(0)
    const [intelligence_st_pb, setIntPB] = useState(false)
    function setIntFunc(e) {
        setIntPB(e.target.checked)
    }

    const [wisdom, setWisdom] = useState(10)
    const [wisdomMod, setWisdomMod] = useState(0)
    const [wisdom_st_pb, setWisPB] = useState(false)
    function setWisFunc(e) {
        setWisPB(e.target.checked)
    }

    const [charisma, setCharisma] = useState(10)
    const [charismaMod, setCharismaMod] = useState(0)
    const [charisma_st_pb, setChaPB] = useState(false)
    function setChaFunc(e) {
        setChaPB(e.target.checked)
    }

    const [pb, setPb] = useState(2)

    function pbFunc(lvl) {
        setLevel(lvl)
        switch(lvl) {
            case "1":
            case "2":
            case "3":
            case "4":
                setPb(2)
                break
            case "5":
            case "6":
            case "7":
            case "8":
                setPb(3)
                break
            case "9":
            case "10":
            case "11":
            case "12":
                setPb(4)
                break
            case "13":
            case "14":
            case "15":
            case "16":
                setPb(5)
                break
            case "17":
            case "18":
            case "19":
            case "20":
                setPb(6)
                break
            default:
                break
        }
    }

    function Mod(e) {
        switch(e) {
            case '1':
                return(-5)
            case '2':
            case '3':
                return(-4)
            case '4':
            case '5':
                return(-3)
            case '6':
            case '7':
                return(-2)
            case '8':
            case '9':
                return(-1)
            case '10':
            case '11':
                return(0)
            case '12':
            case '13':
                return(+1)
            case '14':
            case '15':
                return(+2)
            case '16':
            case '17':
                return(+3)
            case '18':
            case '19':
                return(+4)
            case '20':
                return(+5)
            default:
                break
        }
    }

    function setStrengthFunc(e) {
        setStrength(e)
        setStrengthMod(Mod(e))
        return;
    }
    function setDexterityFunc(e) {
        setDexterity(e)
        setDexterityMod(Mod(e))
        return;
    }
    function setConstitutionFunc(e) {
        setConstitution(e)
        setConstitutionMod(Mod(e))
        return;
    }
    function setIntelligenceFunc(e) {
        setIntelligence(e)
        setIntelligenceMod(Mod(e))
        return;
    }
    function setWisdomFunc(e) {
        setWisdom(e)
        setWisdomMod(Mod(e))
        return;
    }
    function setCharismaFunc(e) {
        setCharisma(e)
        setCharismaMod(Mod(e))
        return;
    }

    const [acrobatics_pb, setAcrobaticsPB] = useState(false)
    function setAcrobaticsFunc(e) {
        setAcrobaticsPB(e.target.checked)
    }
    const [animal_handling_pb, setAnimalHandlingPB] = useState(false)
    function setAnimalHandlingFunc(e) {
        setAnimalHandlingPB(e.target.checked)
    }
    const [arcana_pb, setArcanaPB] = useState(false)
    function setArcanaFunc(e) {
        setArcanaPB(e.target.checked)
    }
    const [athletics_pb, setAthleticsPB] = useState(false)
    function setAthleticsFunc(e) {
        setAthleticsPB(e.target.checked)
    }
    const [deception_pb, setDeceptionPB] = useState(false)
    function setDeceptionFunc(e) {
        setDeceptionPB(e.target.checked)
    }
    const [history_pb, setHistoryPB] = useState(false)
    function setHistoryFunc(e) {
        setHistoryPB(e.target.checked)
    }
    const [insight_pb, setInsightPB] = useState(false)
    function setInsightFunc(e) {
        setInsightPB(e.target.checked)
    }
    const [intimidation_pb, setIntimidationPB] = useState(false)
    function setIntimidationFunc(e) {
        setIntimidationPB(e.target.checked)
    }
    const [investigation_pb, setInvestigationPB] = useState(false)
    function setInvestigationFunc(e) {
        setInvestigationPB(e.target.checked)
    }
    const [medicine_pb, setMedicinePB] = useState(false)
    function setMedicineFunc(e) {
        setMedicinePB(e.target.checked)
    }
    const [nature_pb, setNaturePB] = useState(false)
    function setNatureFunc(e) {
        setNaturePB(e.target.checked)
    }
    const [perception_pb, setPerceptionPB] = useState(false)
    function setPerceptionFunc(e) {
        setPerceptionPB(e.target.checked)
    }
    const [performance_pb, setPerformancePB] = useState(false)
    function setPerformanceFunc(e) {
        setPerformancePB(e.target.checked)
    }
    const [persuasion_pb, setPersuasionPB] = useState(false)
    function setPersuasionFunc(e) {
        setPersuasionPB(e.target.checked)
    }
    const [religion_pb, setReligionPB] = useState(false)
    function setReligionFunc(e) {
        setReligionPB(e.target.checked)
    }
    const [sleight_of_hand_pb, setSleightOfHandPB] = useState(false)
    function setSleightOfHandFunc(e) {
        setSleightOfHandPB(e.target.checked)
    }
    const [stealth_pb, setStealthPB] = useState(false)
    function setStealthFunc(e) {
        setStealthPB(e.target.checked)
    }
    const [survival_pb, setSurvivalPB] = useState(false)
    function setSurvivalFunc(e) {
        setSurvivalPB(e.target.checked)
    }

    const [ds_success, setSuccess] = useState(0)
    function successFunc(e) {
        if (e.target.checked == 0) {
            if (ds_success == 0) {
                return;
            } else if (ds_success == 3) {
                setSuccess(0)
            } else if (ds_success > 0) {
                setSuccess(ds_success-1)
            }
        } else if (e.target.checked == 1) {
            setSuccess(ds_success+1)
        }
    }
    const [ds_fail, setFail] = useState(0)
    function failFunc(e) {
        if (e.target.checked == 0) {
            if (ds_fail == 0) {
                return;
            } else if (ds_fail == 3) {
                setFail(0)
            } else if (ds_fail > 0) {
                setFail(ds_fail-1)
            }
        } else if (e.target.checked == 1) {
            setFail(ds_fail+1)
        }
    }

    function classFunc(e) {
        setClass(e);
        switch(e)
        {
            case "Barbarian":
                setHitDice(12);
                break;
            case "Paladin":
            case "Fighter":
                setHitDice(10);
                break;
            case 'Bard':
            case 'Cleric':
            case 'Druid':
            case 'Monk':
            case 'Rogue':
            case 'Warlock':
                setHitDice(8);
                break;
            case 'Sorcerer':
            case 'Wizard':
                setHitDice(6);
                break;
            default:
                setHitDice(-1);
                break;
        }
    }

return(
    <>
    <div id="core">
    <div>
        <label name="Player Stats" />
            <select id="level_select" onChange={() => pbFunc(level_select.value)}>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
                <option value="8">8</option>
                <option value="9">9</option>
                <option value="10">10</option>
                <option value="11">11</option>
                <option value="12">12</option>
                <option value="13">13</option>
                <option value="14">14</option>
                <option value="15">15</option>
                <option value="16">16</option>
                <option value="17">17</option>
                <option value="18">18</option>
                <option value="19">19</option>
                <option value="20">20</option>
            </select>
    </div>
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

          <select id="thisclass" onChange={() => classFunc(thisclass.value)}>
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
    <div>
        <label name="Prof Bonus" />
            <p id="pb">
                +{pb}
            </p>
    </div>
    {/* CORE STATS */}
    <div>
        <label name="STR Stats" />
            <select defaultValue={strength} id="str_select" onChange={() => setStrengthFunc(str_select.value)}>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
                <option value="8">8</option>
                <option value="9">9</option>
                <option value="10">10</option>
                <option value="11">11</option>
                <option value="12">12</option>
                <option value="13">13</option>
                <option value="14">14</option>
                <option value="15">15</option>
                <option value="16">16</option>
                <option value="17">17</option>
                <option value="18">18</option>
                <option value="19">19</option>
                <option value="20">20</option>
            </select>
            <p id="str_mod">
                {strengthMod}
            </p>
    </div>
    <div>
        <label name="DEX Stats" />
            <select defaultValue={dexterity} id="dex_select" onChange={() => setDexterityFunc(dex_select.value)}>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                    <option value="7">7</option>
                    <option value="8">8</option>
                    <option value="9">9</option>
                    <option value="10">10</option>
                    <option value="11">11</option>
                    <option value="12">12</option>
                    <option value="13">13</option>
                    <option value="14">14</option>
                    <option value="15">15</option>
                    <option value="16">16</option>
                    <option value="17">17</option>
                    <option value="18">18</option>
                    <option value="19">19</option>
                    <option value="20">20</option>
                </select>
            <p id="dex_mod">
                {dexterityMod}
            </p>
    </div>
    <div>
        <label name="CON Stats" />
            <select defaultValue={constitution} id="con_select" onChange={() => setConstitutionFunc(con_select.value)}>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                    <option value="7">7</option>
                    <option value="8">8</option>
                    <option value="9">9</option>
                    <option value="10">10</option>
                    <option value="11">11</option>
                    <option value="12">12</option>
                    <option value="13">13</option>
                    <option value="14">14</option>
                    <option value="15">15</option>
                    <option value="16">16</option>
                    <option value="17">17</option>
                    <option value="18">18</option>
                    <option value="19">19</option>
                    <option value="20">20</option>
                </select>
            <p id="con_mod">
                {constitutionMod}
            </p>
    </div>
    <div>
        <label name="INT Stats" />
            <select defaultValue={intelligence} id="int_select" onChange={() => setIntelligenceFunc(int_select.value)}>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                    <option value="7">7</option>
                    <option value="8">8</option>
                    <option value="9">9</option>
                    <option value="10">10</option>
                    <option value="11">11</option>
                    <option value="12">12</option>
                    <option value="13">13</option>
                    <option value="14">14</option>
                    <option value="15">15</option>
                    <option value="16">16</option>
                    <option value="17">17</option>
                    <option value="18">18</option>
                    <option value="19">19</option>
                    <option value="20">20</option>
                </select>
            <p id="int_mod">
                {intelligenceMod}
            </p>
    </div>
    <div>
        <label name="WIS Stats" />
            <select defaultValue={wisdom} id="wis_select" onChange={() => setWisdomFunc(wis_select.value)}>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                    <option value="7">7</option>
                    <option value="8">8</option>
                    <option value="9">9</option>
                    <option value="10">10</option>
                    <option value="11">11</option>
                    <option value="12">12</option>
                    <option value="13">13</option>
                    <option value="14">14</option>
                    <option value="15">15</option>
                    <option value="16">16</option>
                    <option value="17">17</option>
                    <option value="18">18</option>
                    <option value="19">19</option>
                    <option value="20">20</option>
                </select>
            <p id="wis_mod">
                {wisdomMod}
            </p>
    </div>
    <div>
        <label name="CHA Stats" />
        <select defaultValue={charisma} id="cha_select" onChange={() => setCharismaFunc(cha_select.value)}>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
                <option value="8">8</option>
                <option value="9">9</option>
                <option value="10">10</option>
                <option value="11">11</option>
                <option value="12">12</option>
                <option value="13">13</option>
                <option value="14">14</option>
                <option value="15">15</option>
                <option value="16">16</option>
                <option value="17">17</option>
                <option value="18">18</option>
                <option value="19">19</option>
                <option value="20">20</option>
            </select>
            <p id="cha_mod">
                {charismaMod}
            </p> 
    </div>
        {/* SAVING THROWS + PB CHECKBOXES */}
    <div>
        <p id="str_st">
            {strengthMod+(strength_st_pb*pb)}
        </p>
            <input type="checkbox" id="st_pb_str" checked={strength_st_pb} onChange={setStrFunc}/>
        <p id="dex_st">
            {dexterityMod+(dexterity_st_pb*pb)}
        </p>
        <input type="checkbox" id="st_pb_dex" checked={dexterity_st_pb} onChange={setDexFunc}/>
        <p id="con_st">
            {constitutionMod+(constitution_st_pb*pb)}
        </p>
        <input type="checkbox" id="st_pb_con" checked={constitution_st_pb} onChange={setConFunc}/>
        <p id="int_st">
            {intelligenceMod+(intelligence_st_pb*pb)}
        </p>
        <input type="checkbox" id="st_pb_int" checked={intelligence_st_pb} onChange={setIntFunc}/>
        <p id="wis_st">
            {wisdomMod+(wisdom_st_pb*pb)}
        </p>
        <input type="checkbox" id="st_pb_wis" checked={wisdom_st_pb} onChange={setWisFunc}/>
        <p id="cha_st">
            {charismaMod+(charisma_st_pb*pb)}
        </p>
        <input type="checkbox" id="st_pb_cha" checked={charisma_st_pb} onChange={setChaFunc}/>
    </div>
        {/* SKILLS */}
    <div>
            <p id="acrobatics">
                {dexterityMod+(acrobatics_pb*pb)}
            </p>
            <input type="checkbox" id="acrobatics_pb" checked={acrobatics_pb} onChange={setAcrobaticsFunc}/>

            <p id="animal_handling">
                {wisdomMod+(animal_handling_pb*pb)}
            </p>
            <input type="checkbox" id="animal_handling_pb" checked={animal_handling_pb} onChange={setAnimalHandlingFunc}/>

            <p id="arcana">
                {intelligenceMod+(arcana_pb*pb)}
            </p>
            <input type="checkbox" id="arcana_pb" checked={arcana_pb} onChange={setArcanaFunc}/>

            <p id="athletics">
                {strengthMod+(athletics_pb*pb)}
            </p>
            <input type="checkbox" id="athletics_pb" checked={athletics_pb} onChange={setAthleticsFunc}/>

            <p id="deception">
                {charismaMod+(deception_pb*pb)}
            </p>
            <input type="checkbox" id="deception_pb" checked={deception_pb} onChange={setDeceptionFunc}/>

            <p id="history">
                {intelligenceMod+(history_pb*pb)}
            </p>
            <input type="checkbox" id="history_pb" checked={history_pb} onChange={setHistoryFunc}/>

            <p id="insight">
                {wisdomMod+(insight_pb*pb)}
            </p>
            <input type="checkbox" id="insight_pb" checked={insight_pb} onChange={setInsightFunc}/>

            <p id="intimidation">
                {charismaMod+(intimidation_pb*pb)}
            </p>
            <input type="checkbox" id="intimidation_pb" checked={intimidation_pb} onChange={setIntimidationFunc}/>

            <p id="investigation">
                {intelligenceMod+(investigation_pb*pb)}
            </p>
            <input type="checkbox" id="investigation_pb" checked={investigation_pb} onChange={setInvestigationFunc}/>

            <p id="medicine">
                {wisdomMod+(medicine_pb*pb)}
            </p>
            <input type="checkbox" id="medicine_pb" checked={medicine_pb} onChange={setMedicineFunc}/>

            <p id="nature">
                {intelligenceMod+(nature_pb*pb)}
            </p>
            <input type="checkbox" id="nature_pb" checked={nature_pb} onChange={setNatureFunc}/>

            <p id="perception">
                {wisdomMod+(perception_pb*pb)}
            </p>
            <input type="checkbox" id="perception_pb" checked={perception_pb} onChange={setPerceptionFunc}/>

            <p id="performance">
                {charismaMod+(performance_pb*pb)}
            </p>
            <input type="checkbox" id="performance_pb" checked={performance_pb} onChange={setPerformanceFunc}/>

            <p id="persuasion">
                {charismaMod+(persuasion_pb*pb)}
            </p>
            <input type="checkbox" id="persuasion_pb" checked={persuasion_pb} onChange={setPersuasionFunc}/>

            <p id="religion">
                {intelligenceMod+(religion_pb*pb)}
            </p>
            <input type="checkbox" id="religion_pb" checked={religion_pb} onChange={setReligionFunc}/>

            <p id="sleight_of_hand">
                {dexterityMod+(sleight_of_hand_pb*pb)}
            </p>
            <input type="checkbox" id="sleight_of_hand_pb" checked={sleight_of_hand_pb} onChange={setSleightOfHandFunc}/>

            <p id="stealth">
                {dexterityMod+(stealth_pb*pb)}
            </p>
            <input type="checkbox" id="stealth_pb" checked={stealth_pb} onChange={setStealthFunc}/>

            <p id="survival">
                {wisdomMod+(survival_pb*pb)}
            </p>
            <input type="checkbox" id="survival_pb" checked={survival_pb} onChange={setSurvivalFunc}/>
    </div>
        {/* OTHER SKILLS */}
        <div>
            <p id="passive_perception">
                {10+wisdomMod+pb}
            </p>
        </div>
        <div>
            <p id="initiative">
                {dexterityMod}
            </p>
        </div>
        <div>
            <p id="ac">

            </p>
        </div>
        <div>
            <p id="curr_hp">

            </p>
            <input type="number" id="temp_hp"></input>
        </div>
        <div>
            <input type="number" id="hit_die_num"></input>
            <p id="hit_die">
                {level}d{playerHitDice}
            </p>
        </div>
        <div>
            <input type='checkbox' id="ds_success_1" disabled={ds_success > 1} checked={ds_success >= 1} onClick={successFunc}/>
            <input type='checkbox' id="ds_success_2" disabled={ds_success < 1 || ds_success == 3} checked={ds_success >= 2} onClick={successFunc}/>
            <input type='checkbox' id="ds_success_3" disabled={ds_success < 2} checked={ds_success == 3} onClick={successFunc}/>
            <input type='checkbox' id="ds_fail_1" disabled={ds_fail > 1} checked={ds_fail >= 1} onClick={failFunc}/>
            <input type='checkbox' id="ds_fail_2" disabled={ds_fail < 1 || ds_fail == 3} checked={ds_fail >= 2} onClick={failFunc}/>
            <input type='checkbox' id="ds_fail_3" disabled={ds_fail < 2} checked={ds_fail == 3} onClick={failFunc}/>
        </div>
        <p contentEditable id="personality"></p>
        <p contentEditable id="ideals"></p>
        <p contentEditable id="bonds"></p>
        <p contentEditable id="flaws"></p>

        <input type="number" id="cp"></input>
        <input type="number" id="sp"></input>
        <input type="number" id="ep"></input>
        <input type="number" id="gp"></input>
        <input type="number" id="pp"></input>

        <input type="checkbox" id="inspiration"></input>

        <button id="item-search-button" onClick={() => setButtonPopup(true)}><img id="search-button" src={search} /></button>
        <Popup trigger={buttonPopup} setTrigger={setButtonPopup}/>
        </div>
    </>
)
}

export default Stats