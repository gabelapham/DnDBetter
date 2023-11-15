import React from 'react';
import './SpellBackground.css';
import { useState } from 'react';
import SpellCounter from '../components/FunctionalCounter';
import SpellCreate from './SpellCreate';

const SpellBackground = () =>{


    return(

        <div className='spell-bg'>
            

            <header className='header'>
                <div className='info'>
                    <div className='left-section'>
                        <input className="spell-class" type="text"/>
                    </div>
                    <div className='right-section'>
                        <div className='right-input'>
                            <input className='spell-ability' type="text" />
                        </div>
                        <div className='right-input'>
                            <input className='save-dc' type="text" />
                        </div>
                        <div className='right-input'>
                            <input className='attack-bonus' type="text" />
                        </div>
                    </div>
                </div>

                <div className='spell-create-div'>
                    <SpellCreate />

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
                                    <SpellCounter id={1}/>

                                </div>
                            </div>

                            <div className='lvl-2'>
                                <div className='lvl-header'>
                                    <input className='total-slot-left' type="text" />
                                    <SpellCounter id={2}/>

                                </div>
                            </div>

                        </div>

                        <div className='col2'>
                            
                            <div className='lvl-3'>
                                <div className='lvl-header'>
                                    <input className='total-slot' type="text" />
                                    <SpellCounter id={3}/>

                                </div>
                            </div>

                            <div className='lvl-4'>
                                <div className='lvl-header'>
                                    <input className='total-slot' type="text" />
                                    <SpellCounter id={4}/>

                                </div>
                            </div>

                            <div className='lvl-5'>
                                <div className='lvl-header'>
                                    <input className='total-slot' type="text" />
                                    <SpellCounter id={5}/>

                                </div>
                            </div>

                        </div>

                        <div className='col3'>
                            
                            <div className='lvl-6'>
                                <div className='lvl-header'>
                                    <input className='total-slot-right' type="text" />
                                    <SpellCounter id={6}/>
                                </div>
                            </div>
                            <div className='lvl-7'>
                            <div className='lvl-header'>
                                    <input className='total-slot-right' type="text" />
                                    <SpellCounter id={7}/>
                                </div>
                            </div>
                            <div className='lvl-8'>
                            <div className='lvl-header'>
                                    <input className='total-slot-right' type="text" />
                                    <SpellCounter id={8}/>

                                </div>
                            </div>
                            <div className='lvl-9'>
                            <div className='lvl-header'>
                                    <input className='total-slot-right' type="text" />
                                    <SpellCounter id={9}/>

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