import { useState } from 'react'
import './Stats.css'
import './index.css'

function Stats() {
    const [level, setLevel] = useState(1)

    const [strength, setStrength] = useState(10)
    const [strengthMod, setStrengthMod] = useState(0)

    const [dexterity, setDexterity] = useState(10)
    const [dexterityMod, setDexterityMod] = useState(0)

    const [constitution, setConstitution] = useState(10)
    const [constitutionMod, setConstitutionMod] = useState(0)

    const [intelligence, setIntelligence] = useState(10)
    const [intelligenceMod, setIntelligenceMod] = useState(0)

    const [wisdom, setWisdom] = useState(10)
    const [wisdomMod, setWisdomMod] = useState(0)

    const [charisma, setCharisma] = useState(10)
    const [charismaMod, setCharismaMod] = useState(0)

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
            case 1:
                return(-5)
            case 2:
            case 3:
                return(-4)
            case 4:
            case 5:
                return(-3)
            case 6:
            case 7:
                return(-2)
            case 8:
            case 9:
                return(-1)
            case 10:
            case 11:
                return(0)
            case 12:
            case 13:
                return(+1)
            case 14:
            case 15:
                return(+2)
            case 16:
            case 17:
                return(+3)
            case 18:
            case 19:
                return (+4)
            case 20:
                return (+5)
            default:
                break
        }
    }

    function setStrengthFunc(e) {
        if (e > 20) {
            setStrength(20)
            return;
        } else if (e < 1) {
            setStrength(1)
            return;
        } else {
            setStrength(e)
        }
        setStrengthMod(Mod(e))
        return;
    }

    const [strength_st_pb, setStr] = useState(false)
    function setStrFunc(e) {
        setStr(e.target.checked)
    }

    function setDexterityFunc(e) {
        if (e > 20) {
            setDexterity(20)
            return;
        } else if (e < 1) {
            setDexterity(1)
            return;
        } else {
            setDexterity(e)
        }
        setDexterityMod(Mod(e))
        return;
    }
    function setConstitutionFunc(e) {
        if (e > 20) {
            setConstitution(20)
            return;
        } else if (e < 1) {
            setConstitution(1)
            return;
        } else {
            setConstitution(e)
        }
        setConstitutionMod(Mod(e))
        return;
    }
    function setIntelligenceFunc(e) {
        if (e > 20) {
            setIntelligence(20)
            return;
        } else if (e < 1) {
            setIntelligence(1)
            return;
        } else {
            setIntelligence(e)
        }
        setIntelligenceMod(Mod(e))
        return;
    }
    function setWisdomFunc(e) {
        if (e > 20) {
            setWisdom(20)
            return;
        } else if (e < 1) {
            setWisdom(1)
            return;
        } else {
            setWisdom(e)
        }
        setWisdomMod(Mod(e))
        return;
    }
    function setCharismaFunc(e) {
        if (e > 20) {
            setCharisma(20)
            return;
        } else if (e < 1) {
            setCharisma(1)
            return;
        } else {
            setCharisma(e)
        }
        setCharismaMod(Mod(e))
        return;
    }

return(
    <>
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

        <label name="Prof Bonus" />
            <p id="pb">
                Prof Bonus:{pb} <br></br>
                Level: {level}
            </p>
        <label name="STR Stats">
            <button id="str_inc" checked={strength} onClick={() => setStrengthFunc(strength + 1)}>
                +
            </button>
            <button id="str_dec" checked={strength} onClick={() => setStrengthFunc(strength - 1)}>
                -
            </button>
            <p id="str">
                {strength}
            </p>
            <p id="str_mod">
                {strengthMod}
            </p>
        </label>
        <label name="DEX Stats">
            <button id="dex_inc" checked={dexterity} onClick={() => setDexterityFunc(dexterity + 1)}>
                +
            </button>
            <button id="dex_dec" checked={dexterity} onClick={() => setDexterityFunc(dexterity - 1)}>
                -
            </button>
            <p id="dex">
                {dexterity}
            </p>
            <p id="dex_mod">
                {dexterityMod}
            </p>
        </label>
        <label name="CON Stats">
            <button id="con_inc" checked={constitution} onClick={() => setConstitutionFunc(constitution + 1)}>
                +
            </button>
            <button id="con_dec" checked={constitution} onClick={() => setConstitutionFunc(constitution - 1)}>
                -
            </button>
            <p id="con">
                {constitution}
            </p>
            <p id="con_mod">
                {constitutionMod}
            </p>
        </label>
        <label name="INT Stats">
            <button id="int_inc" checked={intelligence} onClick={() => setIntelligenceFunc(intelligence + 1)}>
                +
            </button>
            <button id="int_dec" checked={intelligence} onClick={() => setIntelligenceFunc(intelligence - 1)}>
                -
            </button>
            <p id="int">
                {intelligence}
            </p>
            <p id="int_mod">
                {intelligenceMod}
            </p>
        </label>
        <label name="WIS Stats">
            <button id="wis_inc" checked={wisdom} onClick={() => setWisdomFunc(wisdom + 1)}>
                +
            </button>
            <button id="wis_dec" checked={wisdom} onClick={() => setWisdomFunc(wisdom - 1)}>
                -
            </button>
            <p id="wis">
                {wisdom}
            </p>
            <p id="wis_mod">
                {wisdomMod}
            </p>
        </label>
        <label name="CHA Stats">
            <button id="cha_inc" checked={charisma} onClick={() => setCharismaFunc(charisma + 1)}>
                +
            </button>
            <button id="cha_dec" checked={charisma} onClick={() => setCharismaFunc(charisma - 1)}>
                -
            </button>
            <p id="cha">
                {charisma}
            </p>
            <p id="cha_mod">
                {charismaMod}
            </p> 
        </label>
    </div>
    <div>
        <label>
            {/*<input type="checkbox" id="st_pb_str" checked={strength_st_pb} onChange={setStrFunc}/>*/}
            <p id="str_st">
                {strengthMod}
            </p>
        </label>
        <p id="dex_st">
            {dexterityMod}
        </p>
        <p id="con_st">
            {constitutionMod}
        </p>
        <p id="int_st">
            {intelligenceMod}
        </p>
        <p id="wis_st">
            {wisdomMod}
        </p>
        <p id="cha_st">
            {charismaMod}
        </p>
        {/*}
        <input type="checkbox" id="st_pb_dex"/>
        <input type="checkbox" id="st_pb_con"/>
        <input type="checkbox" id="st_pb_int"/>
        <input type="checkbox" id="st_pb_wis"/>
        <input type="checkbox" id="st_pb_cha"/>
        */}


        {/*<input type="checkbox" id="st_pb_str" checked={strength_st_pb} onChange={setStrFunc}/>*/}

        {/* SKILLS */}
            <p id="acrobatics">
                {dexterityMod}
            </p>
            <p id="animal_handling">
                {wisdomMod}
            </p>
            <p id="arcana">
                {intelligenceMod}
            </p>
            <p id="athletics">
                {strengthMod}
            </p>
            <p id="deception">
                {charismaMod}
            </p>
            <p id="history">
                {intelligenceMod}
            </p>
            <p id="insight">
                {wisdomMod}
            </p>
            <p id="intimidation">
                {charismaMod}
            </p>
            <p id="investigation">
                {intelligenceMod}
            </p>
            <p id="medicine">
                {wisdomMod}
            </p>
            <p id="nature">
                {intelligenceMod}
            </p>
            <p id="perception">
                {wisdomMod}
            </p>
            <p id="performance">
                {charismaMod}
            </p>
            <p id="persuasion">
                {charismaMod}
            </p>
            <p id="religion">
                {intelligenceMod}
            </p>
            <p id="sleight_of_hand">
                {dexterityMod}
            </p>
            <p id="stealth">
                {dexterityMod}
            </p>
            <p id="survival">
                {wisdomMod}
            </p>
        {/* OTHER SKILLS */}
            <p id="passive_perception">
                {10+wisdomMod+pb}
            </p>
            <p id="initiative">
                {dexterityMod}
            </p>

    </div>
    <div>
        
    </div>
    </>
)
}

export default Stats