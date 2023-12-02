import React, { useEffect, useState } from 'react';
import axios from 'axios'
import Select from 'react-select'
// import React from 'react'



const BardSpells = () => {
    const [bardSpell, setBardSpell] = useState([]);
    const [level, setLevel] = useState([]);
    const [school, setSchool] = useState([]);
    // const [range, setRange] = useState([]);
    const [duration, setDuration] = useState([]);
    const [castTime, setCastTime] = useState([]);

    const [levelSelected, setLevelSelected] = useState([]);
    const [schoolSelected, setSchoolSelected] = useState([]);
    const [durationSelected, setDurationSelected] = useState([]);
    const [castTimeSelected, setCastTimeSelected] = useState([]);

    //turn label value pair into only values
    const levelArray = levelSelected.map(pair => pair.value);
    const schoolArray = schoolSelected.map(pair => pair.value);
    

    /*all current selected attribute */
    // const [attribute, setAttribute] = useState([]);
    
    /*output of set attribute */
    const [outPut, setOutPut] = useState([]);

    useEffect(() => {
        fetchData();
    }, [levelSelected]);


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
            const requests = levelArray.map(async (level) => {
                const response = await axios.get(`http://localhost:3001/bardSpell/getAllByAttribute?level=${level}`);
                return response.data;
            });

            const responseData = await Promise.all(requests);
            setOutPut(responseData);
            // setOutPut((prevOutPut) => [...prevOutPut, responseData]);

            //get request of the endpoint for getting bardSpell data
            const data = await axios.get('http://localhost:3001/bardSpell/getByAttribute?level=${}');
            setBardSpell(data.data);

        } catch (error) {
            console.error('Error fetching data:', error.message);
        }
    };
    /*
    convert column name: value pair into value label pair for select element rendering
    */
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
    
    const print = () =>{

        console.log(levelSelected);
        // console.log(schoolSelected);
        // console.log(durationSelected);
        // console.log(castTimeSelected);
        console.log(levelArray);
        // console.log(schoolArray);
        console.log(outPut);
        // console.log(levelArray);
        // console.log(schoolArray);
    }
    print();

    return (
        <>
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
                                <td>{item.cast_time}</td>
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

export default BardSpells;


// import React, { useEffect, useState } from 'react'
// import axios from 'axios'

// const BardSpells = () => {
//     const[bardSpells, setBardSpells] = useState([])

//     useEffect(()=>{
//         const fetchAllBardSpells = async ()=>{//need to be async for api request functions
//             //since we are making an api request with async function, it have res and err
//             try {
//                 const res = await axios.get("http://localhost:8800/bardSpells")
//                 console.log(res)
//                 // setBardSpells(res.data)
//             } catch (err) {
//                 console.log(err)
//             }
//             fetchAllBardSpells()
//         }
//     }, [])//dependency array is empty so it just run once

//     return (
//         <>
//             <div>
//                 <h1>bardSpells</h1>
//                 {/* <div className='bardSpells'>
//                     {bardSpells.map(bardSpell=>(
//                         <div className='spell' key={bardSpell.id}>
//                             <p>{bardSpell.level}</p>
//                             <p>{bardSpell.spell_name}</p>
//                             <p>{bardSpell.duration}</p>
//                             <p>{bardSpell.school}</p>
//                         </div>
//                     ))}
//                 </div> */}

//             </div>
//         </>
//     )
// }

// export default BardSpells
