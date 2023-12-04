import React, { useEffect, useState } from 'react';
import axios from 'axios'
import Select from 'react-select'
// import React from 'react'


const SpellSearch = () => {
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
    const spellClass = [
        {value: 'bardSpell', label: 'bard'},
        {value: 'clericSpell', label: 'cleric'},
        {value: 'druidSpell', label: 'druid'},
        {value: 'paladinSpell', label: 'paladin'},
        {value: 'rangerSpell', label: 'ranger'},
        {value: 'sorcererSpell', label: 'sorcerer'},
        {value: 'warlockSpell', label: 'warlock'},
        {value: 'wizardSpell', label: 'wizard'},
    ];
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

    /*array of selected attribute label value pair*/
    const [classSelected, setClassSelected] = useState([]);
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
            /*
            get distinct element for select
            */
            const levels = await axios.get('http://localhost:3001/bardSpell/getLevel')
            setLevel (levels.data);

            const schools = await axios.get('http://localhost:3001/bardSpell/getSchool');
            setSchool(schools.data);

            // const ranges = await axios.get('http://localhost:3001/bardSpell/getRange');
            // setRange(ranges.data);

            const durations = await axios.get('http://localhost:3001/bardSpell/getDuration');
            setDuration(durations.data);

            const castTimes = await axios.get('http://localhost:3001/bardSpell/getCastTime');
            setCastTime(castTimes.data);
            
            /*
            retrieve data by value of select element component
            */
            
            if(classSelected.length != 0){
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

                const response = await axios.get('http://localhost:3001/bardSpell/getAllByAttribute', { params });
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

            

            // const requests = levelArray.map(async (level) => {
            //     const response = await axios.get(`http://localhost:3001/bardSpell/getAllByAttribute?classSelected=${classSelected}&level=${level}`);
            //     return response.data;
            // });

            // const responseData = await Promise.all(requests);
            // setOutPut(responseData);

            //// setOutPut((prevOutPut) => [...prevOutPut, responseData]);


        } catch (error) {
            console.error('Error fetching data:', error.message);
        }
    };
    
    
    const print = () =>{

        // console.log(levelSelected);
        // console.log(schoolSelected);
        // console.log(durationSelected);
        // console.log(castTimeSelected);
        // console.log(levelArray);
        // console.log(schoolArray);
        // console.log(outPut);

        // console.log(levelArray);
        // console.log(schoolArray);
    }
    print();

    return (
        <>
        <div className='category'>
            <p>class</p>

            <Select defaultValue={null} options={spellClass} className='class-select' onChange={(selected) => setClassSelected(selected.value)}>

            </Select>
        </div>

        <div className='category'>
            <p>Level</p>

            <Select defaultValue={null} isMulti options={levelOpt} className='level-select' onChange={(selected) => setLevelSelected(selected)}>

            </Select>
        </div>
        <div className='category'>
            <p>school</p>

            <Select defaultValue={null} isMulti options={schoolOpt} className='school-select' onChange={(selected) => setSchoolSelected(selected)}>

            </Select>
        </div>
        {/* <div className='category'>
            <p>range</p>

            <Select defaultValue={null} isMulti options={rangeOpt} className='school-select'>

            </Select>
        </div> */}
        <div className='category'>
            <p>duration</p>

            <Select defaultValue={null} isMulti options={durationOpt} className='duration-select' onChange={(selected) => setDurationSelected(selected)}>

            </Select>
        </div>
        <div className='category'>
            <p>cast time</p>

            <Select defaultValue={null} isMulti options={castingTimeOpt} className='castTime-select' onChange={(selected) => setCastTimeSelected(selected)}>

            </Select>
        </div>
        
        <div>
            <h1>Data from MySQL</h1>
            
            <table className='bardSpell'>
                <thead>
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
                <tbody>
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

        {/* <div>
            <h1>Data from MySQL</h1>
            
            <table className='bardSpell'>
                <thead>
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
                <tbody>
                    {   
                        bardSpell.map((row) => (
                            <tr key={row.id}>
                                <td>{row.level}</td>
                                <td>{row.spell_name}</td>
                                <td>{row.description}</td>
                                <td>{row.school}</td>
                                <td>{row.cast_time}</td>
                                <td>{row.range}</td>
                                <td>{row.duration}</td>
                                <td>{row.component}</td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div> */}
        </>
    );
};

export default SpellSearch;


