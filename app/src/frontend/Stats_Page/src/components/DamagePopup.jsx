import React from 'react'
import "./DamagePopup.css"
import dmgimage from '../assets/damage.png'

const DamagePopup = ({dtrigger, setdTrigger, setDmg}) => {

    function doDamage(num, st) {
        setDmg(num)
        setdTrigger(st)
    }

    return (dtrigger) ? (
        <div className="popup2">
            <div className="inside-popup2">
                <div class="topnav">
                <button className="close-button2" onClick={() => setdTrigger(false)}>X</button>
                <br />
                <p id="dmgamnt">DAMAGE RECIEVED:</p>
                <input type="number" id="dmgnum"/>
                <button id="damage_submit" type="button" onClick={() => doDamage(dmgnum.value, false)}><img id="dmgpng" src={dmgimage} /></button>
                </div>
            </div>
        </div>
    ) : ""
}

export default DamagePopup