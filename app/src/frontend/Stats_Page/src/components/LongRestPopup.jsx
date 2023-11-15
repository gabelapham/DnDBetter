import './RestPopup.css'
import React from 'react'
import healimage from '../assets/heal.png'

const LongRestPopup = ({lrtrigger, setlrTrigger, doFunc}) => {

    function doHeal(num, st) {
        doFunc(num)
        setlrTrigger(st)
    }

    return (lrtrigger) ? (
        <div className="popup3">
            <div className="inside-popup3">
                <div class="topnav">
                <p className='p'>
                    Would you like to take a LONG REST?
                </p>
                <button id="yes" type="button" onClick={() => doHeal(9999, false)}>
                    <p>YES</p>
                </button>
                <button id="no" type="button" onClick={() => doHeal(0, false)}>
                    <p>NO</p>
                </button>
                </div>
            </div>
        </div>
    ) : ""
}

export default LongRestPopup