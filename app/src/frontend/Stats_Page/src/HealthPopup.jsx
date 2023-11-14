import React from 'react'
import "./HealthPopup.css"
import healimage from './assets/heal.png'

const HealthPopup = ({trigger, setTrigger, setHeal}) => {

    function doHeal(num, st) {
        setHeal(num)
        setTrigger(st)
    }

    return (trigger) ? (
        <div className="popup">
            <div className="inside-popup">
                <div class="topnav">
                <button className="close-button" onClick={() => setTrigger(false)}>X</button>
                <br />
                <input type="number" id="healnum"/>
                <button id="heal_submit" type="button" onClick={() => doHeal(healnum.value, false)}><img id="healpng" src={healimage} /></button>
                </div>
            </div>
        </div>
    ) : ""
}

export default HealthPopup