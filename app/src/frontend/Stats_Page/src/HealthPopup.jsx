import React from 'react'
import "./HealthPopup.css"
//import search from "./assets/search.png"

const HealthPopup = ({trigger, setTrigger}) => {

    return (trigger) ? (
        <div className="popup">
            <div className="inside-popup">
                <div class="topnav">
                <button className="close-button" onClick={() => setTrigger(false)}>X</button>
                <form>
                    <input type="number" />
                    <button id="health_submit" type="submit"></button>
                </form>
                </div>
            </div>
        </div>
    ) : ""
}

export default HealthPopup