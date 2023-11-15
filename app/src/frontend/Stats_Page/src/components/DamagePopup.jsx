import React from 'react'
import "./DamagePopup.css"
import dmgimage from '../assets/damage.png'

const DamagePopup = ({dtrigger, setdTrigger, setDmg}) => {

    function doDamage(num, st) {
        setDmg(num)
        setdTrigger(st)
    }

    return (dtrigger) ? (
        <div className="popup">
            <div className="inside-popup">
                <div class="topnav">
                <button className="close-button" onClick={() => setdTrigger(false)}>X</button>
                <br />
                <input type="number" id="dmgnum"/>
                <button id="damage_submit" type="button" onClick={() => doDamage(dmgnum.value, false)}><img id="dmgpng" src={dmgimage} /></button>
                </div>
            </div>
        </div>
    ) : ""
}

export default DamagePopup