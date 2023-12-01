import React from 'react'
import { useState, useEffect } from 'react'
import "./ItemSearch.css"
import search from "../assets/search.png"
import axios from 'axios'

const client = axios.create({
    baseURL: "http://localhost:3001"
});

const Popup = ({trigger, setTrigger}) => {
    const [results, setResults] = useState([])
    const [newItem, setNewItem] = useState("")
    useEffect(() => {
        async function getItems() {

        }
        getItems();
    })

    function searchFunc(e) {
        e.preventDefault();

        setResults(currentResult => {
            return [
                ...currentResult,
                {id: crypto.randomUUID(), title: newItem, completed: false},
            ]
        })

        setNewItem("")
    }

    function toggleFoundItem(id, completed) {
        setNewItem(currentNewItem => {
            return currentNewItem.map(newItem => {
                if (newItem.id === id) {
                    return {...newItem, completed}
                }

                return newItem
            })
        })
    }

    return (trigger) ? (
        <div className="popup">
            <div className="inside-popup">
                <div class="topnav">
                <button className="close-button" onClick={() => setTrigger(false)}>X</button>
                    <input id="searchbar" type="text" placeholder="Search.."/>
                    <button id="submit-button" type="button" onClick={() => searchFunc(searchbar.value)}>
                        <img id="search-png" src={search} />
                    </button>
                </div>
                {results.map(foundItem => {
                    <li key={foundItem.id}>
                        <label>
                            <input
                            type='checkbox'
                            checked={foundItem.add}
                            onChange={e => toggleFoundItem(foundItem.id, e.target.checked)}
                            />
                            {foundItem.title}
                        </label>
                        <button className="btn-btn-danger">Delete</button>
                    </li>
                })}
                <p className='p'></p>
            </div>
        </div>
    ) : ""
}

export default Popup