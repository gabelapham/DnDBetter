import './RestPopup.css'
import React from 'react'
import d20 from '../assets/d20.png'
//import {useState} from 'react'

const ShortRestPopup = ({srtrigger, setsrTrigger, doFunc, hd, hdrem, hdremTrigger, hpCurr, hpMax}) => {

    function doHeal(num, st) {
        if (Number(num) > Number(hdrem) || Number(num) < 0) {
            alert("Invalid Number of Hit Die.")
        } else if (Number(hpCurr) == Number(hpMax) && Number(num) > 0) {
            alert("Your HP is already full!")
        } else {
            var randomNum = 0;
            for (let i = 0; i < num; i++) {
                randomNum += (Math.floor(Math.random() * ((Number(hd)))) + 1)
            }
            const rem = (Number(hdrem) - Number(num))
            hdremTrigger(rem)
            doFunc(randomNum)
            setsrTrigger(false)
            alert('You have recovered ' + randomNum + ' health during your short rest by expending '
            + Number(num) + ' hit dice.')
        }
    }

    return (srtrigger) ? (
        <div className="popup3">
            <div className="inside-popup3">
                <div class="topnav">
                <button className="close-button3" onClick={() => setsrTrigger(false)}>X</button>
                <p className='p'>
                    Input Num of Hit Die For SHORT REST:
                </p>
                <input type="number" id="hdnum"></input>
                <button type="button" id="hdbutt" onClick={() => doHeal(hdnum.value, false)}>
                    <img id="hdimg" src={d20} /></button>
                </div>
            </div>
        </div>
    ) : ""
}

export default ShortRestPopup