import React from 'react'
import "./DamagePopup.css"
import dmg from './assets/damage.png'
//import search from "./assets/search.png"

const DamagePopup = ({trigger, setTrigger}) => {

    return (trigger) ? (
        <div className="popup">
            <div className="inside-popup">
                <div class="topnav">
                <button className="close-button" onClick={() => setTrigger(false)}>X</button>
                <br />
                <form>
                    <input type="number" id="dmgnum" />
                    <button id="damage_submit" type="submit"><img id="dmgpng" src={dmg} /></button>
                </form>
                </div>
            </div>
        </div>
    ) : ""
}

export default DamagePopup