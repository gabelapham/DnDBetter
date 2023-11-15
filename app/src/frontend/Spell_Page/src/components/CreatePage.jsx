import './CreatePage.css'
import React from 'react'
import Select from 'react-select'

function CreatePage(props){

        const levelopt = [
            {value: '1st', label: '1st'},
            {value: '2nd', label: '2nd'},
            {value: '3rd', label: '3rd'},
            {value: '4th', label: '4th'},
            {value: '5th', label: '5th'},
            {value: '6th', label: '6th'},
            {value: '7th', label: '7th'},
        ]
        const schoolopt = [
            {value: "Abjuration", label: "Abjuration"},
            {value: "Evocation", label: "Evocation"},
            {value: "Enchantment", label: "Enchantment"},
            {value: "Conjuration", label: "Conjuration"},
            {value: "Transmutation", label: "Transmutation"},
            {value: "Illusion", label: "Illusion"},
            {value: "Divination", label: "Divination"},
            {value: "Necromancy", label: "Necromancy"},
        ]
        const durationopt = [
            {value: "Instantaneous", label: "Instantaneous"},
            {value: "Concentration up to minutes", label: "Concentration up to minutes"},
            {value: "minutes", label: "minutes"},
            {value: "hours", label: "hours"},
        ]
        const casttimeopt = [
            {value: "1 Action", label: "1 Action"},
            {value: "1 Action R", label: "1 Action R"},
            {value: "1 minutes", label: "1 minutes"},
            {value: "10 minutes", label: "10 minutes"},
            {value: "1 hour", label: "1 hour"},
        ]
    

    return (props.trigger) ? (
       
        <div className='pageContainer'>

            <div className='pageInner'>
                <div>
                    <button className='close-btn' onClick={() => props.setTrigger(false)}>close</button>
                    {props.children}

                </div>

                <div className='category'>
                    <p>Level</p>
                    
                    <Select defaultValue={null} isMulti options={levelopt} className='level-select'>
                        
                    </Select>
                </div>
                <div className='category'>
                    <p>School</p>
                    <Select defaultValue={null} isMulti options={schoolopt} className='school-select'>

                    </Select>
                </div>
                <div className='category'>
                    <p>duration</p>
                    <Select defaultValue={null} isMulti options={schoolopt} className='duration-select'>
                    
                    </Select>
                </div>
                <div className='category'>
                    <p>Casting Time</p>
                    <Select defaultValue={null} isMulti options={casttimeopt} className='cast-time-select'>
                    
                    </Select>
                </div>
                
            </div>
        </div>

    ) : "";

}

export default CreatePage