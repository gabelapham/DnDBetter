import { useState } from 'react'
import './Stats.css'
import './index.css'

function Stats() {
    const [strength, setStrength] = useState(10)
    const [strengthMod, setStrengthMod] = useState(0)

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
    }

    const [strength_st_pb, setStr] = useState(false)
    function setStrFunc(e) {
        setStr(e.target.checked)
    }

return(
    <>
    <div>
        <label>
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
    <label>
        <input id="dex" type="number" step="1" pattern="\d+" min="1" max="20" />
    </label>
    <label>
        <input id="con" type="number" step="1" pattern="\d+" min="1" max="20" />
    </label>
    <label>
        <input id="int" type="number" step="1" pattern="\d+" min="1" max="20" />
    </label>
    <label>
        <input id="wis" type="number" step="1" pattern="\d+" min="1" max="20" />
    </label>
    <label>
        <input id="cha" type="number" step="1" pattern="\d+" min="1" max="20" />
    </label>
    </div>
    <div>
        <input type="checkbox" id="st_pb_str" checked={strength_st_pb} onChange={setStrFunc}/>
        <p id="str_st">
            {strengthMod} {/*{strength_st_pb ? +2 : +0}*/}
        </p>
        <input type="checkbox" id="st_pb_dex"/>
        <input type="checkbox" id="st_pb_con"/>
        <input type="checkbox" id="st_pb_int"/>
        <input type="checkbox" id="st_pb_wis"/>
        <input type="checkbox" id="st_pb_cha"/>
    </div>
    <div>
        
    </div>
    </>
)
}

export default Stats