import { useState } from 'react'
import './Stats.css'
import './index.css'

function Stats() {
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

    const [charisma, setCharisma] = useState(0)
    const [charismaMod, setCharismaMod] = useState(0)

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
                break;
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

return(
    <>
    <div>
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
            
        </label>
        <label name="WIS Stats">
            
        </label>
        <label name="CHA Stats">
            
        </label>
    </div>
    <div>
        <label>
            <input type="checkbox" id="st_pb_str" checked={strength_st_pb} onChange={setStrFunc}/>
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
    </div>
    <div>
        
    </div>
    </>
)
}

export default Stats