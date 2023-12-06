/*

import React from 'react'
import { useState, useEffect } from 'react'
import "./ItemSearch.css"
import search from "../assets/search.png"
import axios from 'axios'

const client = axios.create({
    baseURL: "http://localhost:3001"
});

const Popup = ({trigger, setTrigger}) => {
    const [newItem, setNewItem] = useState("")
    const [results, setResults] = useState([])
    var response;

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
                { id: crypto.randomUUID(), title: newItem },
            ]
        })

        setNewItem("")
    }

    function handleExit() {
        setTrigger(false)
        setResults([])
    }

/*
    function toggleItem(id, completed) {
        setNewItem(currentItem => {
            return currentItem.map(newItem => {
                if (newItem.id === id) {
                    return {...newItem, completed}
                }

                return newItem
            })
        })
    }

    return (trigger) ? (
        <>
        <div className="popup">
            <div className="inside-popup">
                <div class="topnav">
                <button className="close-button" onClick={() => handleExit()}>X</button>
                <form className="item-search-form" onSubmit={searchFunc}>
                    <input 
                        id="searchbar" 
                        value={newItem}
                        type="text" 
                        placeholder="Search.."
                        onChange={e => setNewItem(e.target.value)}
                    />
                    <button id="submit-button">
                        <img id="search-png" src={search} />
                    </button>
                </form>
                </div>
                <label>
                <ul>
                    {results.map(todo => {
                        return (
                        <li key={todo.id}>
                                {todo.title}
                        </li>
                        )
                    })}
                </ul>
                </label>
            </div>
        </div>
    </>
    ) : ""
}

export default Popup
*/