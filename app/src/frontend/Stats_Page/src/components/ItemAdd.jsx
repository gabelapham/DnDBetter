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
    const [select, setSelect] = useState("")
    const [ammoItem, setAmmo] = useState([])
    const [armorItem, setArmor] = useState([])
    const [equipItem, setEquip] = useState([])
    const [equipTools, setTools] = useState([])
    const [equipWeapons, setWeapons] = useState([])

    var ammoResponse, armorResponse, equipResponse, toolsResponse, weaponsResponse;

    useEffect(() => {
        async function getItems()
        {
        ammoResponse = await client.get("/items/ammo");
        for (var i = 0; i < 3; i++) {
            setAmmo(previous => [
                    ...previous,
                    { id: crypto.randomUUID(), title: ammoResponse.data[i].ammo,
                    cost: ammoResponse.data[i].cost, weight: ammoResponse.data[i].weight },
                ])
        }
        /*
        setAmmo(currentResult => {
            return [
                ...currentResult,
                { id: crypto.randomUUID(), title: ammoResponse.data[0].ammo },
            ]
        })
        */

        armorResponse = await client.get("/items/armor");
        setArmor(currentResult => {
            return [
                ...currentResult,
                { id: crypto.randomUUID(), title: armorResponse.data[0] },
            ]
        })

        equipResponse = await client.get("/items/equipment");
        setEquip(currentResult => {
            return [
                ...currentResult,
                { id: crypto.randomUUID(), title: equipResponse.data[0] },
            ]
        })

        toolsResponse = await client.get("/items/tools");
        setTools(currentResult => {
            return [
                ...currentResult,
                { id: crypto.randomUUID(), title: toolsResponse.data[0] },
            ]
        })

        weaponsResponse = await client.get("/items/weapons");
        setWeapons(currentResult => {
            return [
                ...currentResult,
                { id: crypto.randomUUID(), title: weaponsResponse.data[0] },
            ]
        })
        }
        getItems();
    }, []);
    /*
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
*/
    function handleExit() {
        setTrigger(false)
        setResults([])
        setSelect("")
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
*/
    return (trigger) ? (
        <>
        <div className="popup">
            <div className="inside-popup">
                <div class="topnav">
                <button className="close-button" onClick={() => handleExit()}>X</button>
                <button id="itembutton" onClick={() => setSelect("Ammo")}>Ammo</button>
                |||||
                <button id="itembutton" onClick={() => setSelect("Armor")}>Armor</button>
                |||||
                <button id="itembutton" onClick={() => setSelect("Equipment")}>Equipment</button>
                |||||
                <button id="itembutton" onClick={() => setSelect("Tools")}>Tools</button>
                |||||
                <button id="itembutton" onClick={() => setSelect("Weapons")}>Weapons</button>
                </div>
                <label>
                <table>
                    <tr>
                        <th>Ammo</th>
                        <th>Cost</th>
                        <th>Weight</th>
                    </tr>
                    {ammoItem.map((val) => {
                        return (
                        <tr key={val.id}>
                            <td>{val.title}</td>
                            <td>{val.cost}</td>
                            <td>{val.weight}</td>
                        </tr>
                        )
                    })}
                </table>
                </label>
            </div>
        </div>
    </>
    ) : ""
}

export default Popup