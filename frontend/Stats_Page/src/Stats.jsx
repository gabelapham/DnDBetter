import './Stats.css'

function Stats() {
return(
    <>
    <div>
    <label>
        <input id="str" type="number" step="1" pattern="\d+" name="strInt" min="1" max="20" />
    </label>
    <label>
        <input id="dex" type="number" step="1" pattern="\d+" name="dexInt" min="1" max="20" />
    </label>
    <label>
        <input id="con" type="number" step="1" pattern="\d+" name="conInt" min="1" max="20" />
    </label>
    <label>
        <input id="int" type="number" step="1" pattern="\d+" name="intInt" min="1" max="20" />
    </label>
    <label>
        <input id="wis" type="number" step="1" pattern="\d+" name="wisInt" min="1" max="20" />
    </label>
    <label>
        <input id="cha" type="number" step="1" pattern="\d+" name="chaInt" min="1" max="20" />
    </label>
    </div>
    </>
)
}

export default Stats