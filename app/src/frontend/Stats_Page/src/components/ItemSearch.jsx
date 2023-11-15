import React from 'react'
import "./ItemSearch.css"
import search from "../assets/search.png"

const Popup = ({trigger, setTrigger}) => {

    return (trigger) ? (
        <div className="popup">
            <div className="inside-popup">
                <div class="topnav">
                <button className="close-button" onClick={() => setTrigger(false)}>X</button>
                <form>
                    <input id="search-bar" type="text" placeholder="Search.." />
                    <button id="submit-button" type="submit"><img id="search-png" src={search} /></button>
                </form>
                </div>
            </div>
        </div>
    ) : ""
}

export default Popup