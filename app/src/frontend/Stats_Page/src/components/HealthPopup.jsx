import React from 'react'
import "./HealthPopup.css"
import healimage from '../assets/heal.png'

const HealthPopup = ({htrigger, sethTrigger, setHeal}) => {

    function doHeal(num, st) {
        setHeal(num)
        sethTrigger(st)
    }

    return (htrigger) ? (
        <div className="popup1">
            <div className="inside-popup1">
                <div class="topnav">
                <button className="close-button1" onClick={() => sethTrigger(false)}>X</button>
                <br />
                <p id="healamnt">HEALTH RECIEVED:</p>
                <input type="number" id="healnum"/>
                <button id="heal_submit" type="button" onClick={() => doHeal(healnum.value, false)}><img id="healpng" src={healimage} /></button>
                </div>
            </div>
        </div>
    ) : ""
}

export default HealthPopup