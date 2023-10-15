import { useState } from 'react'
import './Stats.css'
import './index.css'

function Stats() {
    const [strength, setStrength] = useState(0)
    function setStrengthFunc(e) {
        if (e.target.checked > 20) {
            setStrength(20)
        } else {
            setStrength(e.target.checked)
        }
    }

    const [strength_st_pb, setStr] = useState(false)
    function setStrFunc(e) {
        setStr(e.target.checked)
    }

return(
    <>
    <div>
        <label>
            <button id="str_inc" onClick={() => setStrength(strength + 1)}>
                +
            </button>
            <button id="str_dec" onClick={() => setStrength(strength - 1)}>
                -
            </button>
            <p id="str">
                {strength}
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
            {strength} {/*{strength_st_pb ? +2 : +0}*/}
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