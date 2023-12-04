import './CreatePage.css'
import React, { useEffect, useState } from 'react';
import axios from 'axios'
import Select from 'react-select'


function CreatePage(props){
    const classSelected = props.classSelected

    /*distinct attribute array in mysql title value format */
    const [level, setLevel] = useState([]);
    const [school, setSchool] = useState([]);
    // const [range, setRange] = useState([]);
    const [duration, setDuration] = useState([]);
    const [castTime, setCastTime] = useState([]);
    /*
    convert column name: value pair into value label pair for select element rendering
    */
    /*array with distinct attribute in value label pair format*/
    const levelOpt = level.map(obj => ({
        value: obj.level,
        label: obj.level,
    }));
    const schoolOpt = school.map(obj => ({
        value: obj.school,
        label: obj.school,
    }));

    // const rangeOpt = range.map(obj => ({
    //     value: obj.range,
    //     label: obj.range,
    // }));

    const durationOpt = duration.map(obj => ({
        value: obj.duration,
        label: obj.duration,
    }));

    const castingTimeOpt = castTime.map(obj => ({
        value: obj.casting_time,
        label: obj.casting_time,
    }));


    /*data fetch based on user spell attribute selection */
    /*array of selected attribute label value pair*/
    // const [classSelected, setClassSelected] = useState([]);
    const [levelSelected, setLevelSelected] = useState([]);
    const [schoolSelected, setSchoolSelected] = useState([]);
    const [durationSelected, setDurationSelected] = useState([]);
    const [castTimeSelected, setCastTimeSelected] = useState([]);


    /*array of selected attribute in values only*/
    const levelArray = levelSelected.map(pair => pair.value);
    const schoolArray = schoolSelected.map(pair => pair.value);
    const durationArray = durationSelected.map(pair => pair.value);
    const castTimeArray = castTimeSelected.map(pair => pair.value);
    // console.log("selected level array" + levelArray + "length" + levelArray.length);
    // console.log("selected school array" + schoolArray + "length" + schoolArray.length);
    // console.log("selected duration array" + durationArray + "length" + durationArray.length);
    // console.log("selected cast time array" + castTimeArray + "length" + castTimeArray.length);

    
    /*output of set attribute */
    const [outPut, setOutPut] = useState([]);

    useEffect(() => {
        fetchData();
    }, [classSelected, levelSelected, schoolSelected, durationSelected, castTimeSelected]);


    const fetchData = async () => {
        try {
            
            // const result = await axios('http://localhost:3001/bardSpell');
            // setBardSpell(result.data);
            // console.log(result)

            // const array = JSON.parse(result)
            // const [bardSpell, setBardSpell] = useState(array);
            if(classSelected.length != 0){
                /*
                get distinct element for select
                */
                const levels = await axios.get(`http://localhost:3001/Spell/getLevel?classSelected=${classSelected}`);
                setLevel (levels.data);

                const schools = await axios.get(`http://localhost:3001/Spell/getSchool?classSelected=${classSelected}`);
                setSchool(schools.data);

                // const ranges = await axios.get(`http://localhost:3001/bardSpell/getRange?classSelected=${classSelected}`);
                // setRange(ranges.data);

                const durations = await axios.get(`http://localhost:3001/Spell/getDuration?classSelected=${classSelected}`);
                setDuration(durations.data);

                const castTimes = await axios.get(`http://localhost:3001/Spell/getCastTime?classSelected=${classSelected}`);
                setCastTime(castTimes.data);
                

                /*
                retrieve data by value of select element component
                */  
                console.log("class Selected: " + classSelected + "length: " + classSelected.length);
                console.log("level Selected: " + levelArray + "length: " + levelArray.length);
                console.log("school Selected: " + schoolArray + "length: " + schoolArray.length);
                console.log("duration Selected: " + durationArray + "length: " + durationArray.length);
                console.log("cast time Selected: " + castTimeArray + "length: " + castTimeArray.length);

                const params = {
                    classSelected: JSON.stringify(classSelected),
                    levelArray: JSON.stringify(levelArray),
                    schoolArray: JSON.stringify(schoolArray),
                    durationArray: JSON.stringify(durationArray),
                    castTimeArray: JSON.stringify(castTimeArray),
                }

                const response = await axios.get('http://localhost:3001/Spell/getAllByAttribute', { params });
                setOutPut(response.data);
                

                console.log("output result: " + JSON.stringify(outPut));

                //     const getSpell = async () => {
                //         const requests = [];
                    
                //      for (const level of levelArray) {
                //         for (const school of defaultSchoolArray) {
                //             for (const duration of defaultDurationArray) {
                //             for (const castTime of defaultCastTimeArray) {
                //                 const response = await axios.get(`http://localhost:3001/bardSpell/getAllByAttribute?classSelected=${classSelected}&level=${level}&school=${school}&duration=${duration}&castTime=${castTime}`);
                //                 requests.push(response.data);
                //             }
                //             }
                //         }
                //         }
                    
                //         const responseData = await Promise.all(requests);
                //         setOutPut(responseData);
                //     };
                //     getSpell();
                //     console.log("output: " + outPut);
            
            }

        } catch (error) {
            console.error('Error fetching data:', error.message);
        }
    };

        // const levelopt = [
        //     {value: '1st', label: '1st'},
        //     {value: '2nd', label: '2nd'},
        //     {value: '3rd', label: '3rd'},
        //     {value: '4th', label: '4th'},
        //     {value: '5th', label: '5th'},
        //     {value: '6th', label: '6th'},
        //     {value: '7th', label: '7th'},
        // ]
        // const schoolopt = [
        //     {value: "Abjuration", label: "Abjuration"},
        //     {value: "Evocation", label: "Evocation"},
        //     {value: "Enchantment", label: "Enchantment"},
        //     {value: "Conjuration", label: "Conjuration"},
        //     {value: "Transmutation", label: "Transmutation"},
        //     {value: "Illusion", label: "Illusion"},
        //     {value: "Divination", label: "Divination"},
        //     {value: "Necromancy", label: "Necromancy"},
        // ]
        // const durationopt = [
        //     {value: "Instantaneous", label: "Instantaneous"},
        //     {value: "Concentration up to minutes", label: "Concentration up to minutes"},
        //     {value: "minutes", label: "minutes"},
        //     {value: "hours", label: "hours"},
        // ]
        // const casttimeopt = [
        //     {value: "1 Action", label: "1 Action"},
        //     {value: "1 Action R", label: "1 Action R"},
        //     {value: "1 minutes", label: "1 minutes"},
        //     {value: "10 minutes", label: "10 minutes"},
        //     {value: "1 hour", label: "1 hour"},
        // ]
    

    return (props.trigger) ? (
       
        <div className='pageContainer'>

            <div className='pageInner'>
                <div className='pageSection'>
                    <div>
                        <button className='close-btn' onClick={() => props.setTrigger(false)}>close</button>
                        {props.children}

                    </div>
                </div>
                <div className='pageSection'>
                    <div className='category'>
                        <p className='attributeTitle'>Level</p>
                        <Select defaultValue={null} isMulti options={levelOpt} className='level-select' onChange={(selected) => setLevelSelected(selected)}>

                        </Select>
                    </div>
                    <div className='category'>
                        <p className='attributeTitle'>School</p>
                        <Select defaultValue={null} isMulti options={schoolOpt} className='school-select' onChange={(selected) => setSchoolSelected(selected)}>

                        </Select>
                    </div>
                </div>
                <div className='pageSection'>
                    <div className='category'>
                        <p className='attributeTitle'>duration</p>
                        <Select defaultValue={null} isMulti options={durationOpt} className='duration-select' onChange={(selected) => setDurationSelected(selected)}>

                        </Select>
                    </div>
                    <div className='category'>
                        <p className='attributeTitle'>Casting Time</p>
                        <Select defaultValue={null} isMulti options={castingTimeOpt} className='castTime-select' onChange={(selected) => setCastTimeSelected(selected)}>

                        </Select>
                    </div>
                </div>

                <div className='spellInfo'>
                    <h1 className='tableTitle'>Spells Attributes</h1>
                    
                    <table className='Spell'>
                        <thead className='tableAttribute'>
                            <tr>
                                <th>level</th>
                                <th>spell_name</th>
                                <th>description</th>
                                <th>school</th>
                                <th>cast_time</th>
                                <th>range</th>
                                <th>duration</th>
                                <th>component</th>
                            </tr>
                        </thead>
                        <tbody className='tableContent'>
                            {outPut.map((innerArray, outerIndex) => (
                                innerArray.map((item, innerIndex) => (
                                    <tr key={`${outerIndex}-${innerIndex}`}>
                                        <td>{item.level}</td>
                                        <td>{item.spell_name}</td>
                                        <td>{item.description}</td>
                                        <td>{item.school}</td>
                                        <td>{item.casting_time}</td>
                                        <td>{item.range}</td>
                                        <td>{item.duration}</td>
                                        <td>{item.component}</td>
                                    </tr>
                                ))
                            ))}
                        </tbody>
                    </table>
                </div>
                

            </div>
        </div>

    ) : "";

}

export default CreatePage