import React from 'react'
import { useState } from 'react'
import "./ItemSearch.css"
import search from "../assets/search.png"

const Popup = ({trigger, setTrigger}) => {

    const [results, setResults] = useState("")
    function searchFunc(val) {
        setResults(val)
    }

    return (trigger) ? (
        <div className="popup">
            <div className="inside-popup">
                <div class="topnav">
                <button className="close-button" onClick={() => setTrigger(false)}>X</button>
                    <input id="searchbar" type="text" placeholder="Search.." />
                    <button id="submit-button" type="button" onClick={() => searchFunc(searchbar.value)}>
                        <img id="search-png" src={search} />
                    </button>
                </div>
                <p className='p'>{results}</p>
            </div>
        </div>
    ) : ""
}

export default Popup