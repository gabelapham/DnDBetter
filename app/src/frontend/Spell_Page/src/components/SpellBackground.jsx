import './SpellBackground.css';
import React, { useState, useEffect } from 'react';
import SpellCounter from '../components/FunctionalCounter';
import SpellCreate from './SpellCreate';
import axios from 'axios'
import spell_sheet from '../assets/Spell_Sheet2.png';
import Select from 'react-select'


const SpellBackground = () =>{

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

    const [classSelected, setClassSelected] = useState([]);


    const [spellAdded, setSpellAdded] = useState([]);


    const handleAdd = (spellToBeAdd, level) =>{
        setSpellAdded({spellToBeAdd, level});
        
    }

    useEffect(() => {
        console.log("grandparent level: " + spellAdded.level + " spell to be add: " + spellAdded.spellToBeAdd);

    }, [spellAdded]);
    
    // console.log("grandparent level and spell to be added: " + JSON.stringify(spellAdded));

    // const [bardSpell, setBardSpell] = useState([]);

    // useEffect(() => {
    //     fetchData();
    // }, []);

    // const fetchData = async () => {
    //     try {
    //         const response = await axios.get('http://localhost:3001/bardSpell/addAll');    
    //         setBardSpell(response.data);
        
    //         console.log(bardSpell);

    //     } catch (error) {
    //         console.error('Error fetching data:', error.message);
    //     }
    // }

    return(


        
        <div className='spell-bg'>

                <div id="spell_page">
                    <img src={spell_sheet}/>
                </div>

            <header /*className='header'*/>
               
                <div /*className='info'*/>
                    
                    
                    <div /*className='right-section'*/>
                        <div /*className='right-input'*/>
                            <input className='spell-ability' type="text" />
                        </div>
                        <div /*className='right-input'*/>
                            <input className='save-dc' type="text" />
                        </div>
                        <div /*className='right-input'*/>
                            <input className='attack-bonus' type="text" />
                        </div>
                    </div>
                </div>
                <div className='spell-class-div'>
                    <Select placeholder="Select Class..." defaultValue={null} options={spellClass} className='spell-class' onChange={(selected) => setClassSelected(selected.value)}>

                    </Select>
                </div>
                <div className='spell-create-div'>
                    <SpellCreate classSelected={classSelected} handleAdd={handleAdd}/>

                </div>

            </header>
            

            <main>
                <section>

                    <div className='spell-content'>
                        <div className='col1'>
                            
                            <div className='lvl-0'>
                                {/* <input className='total-slot-left' type="text" />
                                <button className='decrement-0'> - </button>
                                    num
                                <button className='increment-0'> + </button> */}
                            </div>

                            <div className='lvl-1'>
                                <div className='lvl-header'>
                                    <input className='total-slot-left' type="text" />
                                    <SpellCounter id={1} spellAdded={spellAdded}/>

                                </div>
                            </div>

                            <div className='lvl-2'>
                                <div className='lvl-header'>
                                    <input className='total-slot-left' type="text" />
                                    <SpellCounter id={2} spellAdded={spellAdded}/>

                                </div>
                            </div>

                        </div>

                        <div className='col2'>
                            
                            <div className='lvl-3'>
                                <div className='lvl-header'>
                                    <input className='total-slot' type="text" />
                                    <SpellCounter id={3} spellAdded={spellAdded}/>

                                </div>
                            </div>

                            <div className='lvl-4'>
                                <div className='lvl-header'>
                                    <input className='total-slot' type="text" />
                                    <SpellCounter id={4} spellAdded={spellAdded}/>

                                </div>
                            </div>

                            <div className='lvl-5'>
                                <div className='lvl-header'>
                                    <input className='total-slot' type="text" />
                                    <SpellCounter id={5} spellAdded={spellAdded}/>

                                </div>
                            </div>

                        </div>

                        <div className='col3'>
                            
                            <div className='lvl-6'>
                                <div className='lvl-header'>
                                    <input className='total-slot-right' type="text" />
                                    <SpellCounter id={6} spellAdded={spellAdded}/>
                                </div>
                            </div>
                            <div className='lvl-7'>
                            <div className='lvl-header'>
                                    <input className='total-slot-right' type="text" />
                                    <SpellCounter id={7} spellAdded={spellAdded}/>
                                </div>
                            </div>
                            <div className='lvl-8'>
                            <div className='lvl-header'>
                                    <input className='total-slot-right' type="text" />
                                    <SpellCounter id={8} spellAdded={spellAdded}/>

                                </div>
                            </div>
                            <div className='lvl-9'>
                            <div className='lvl-header'>
                                    <input className='total-slot-right' type="text" />
                                    <SpellCounter id={9} spellAdded={spellAdded}/>

                                </div>
                            </div>
                        </div>
                    </div>

                </section>
            </main>
            
        </div>

    );
}

export default SpellBackground