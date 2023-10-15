import React from 'react';
import './SpellBackground.css';
import { useState } from 'react';
import SpellCounter from '../components/FunctionalCounter'

const SpellBackground = () =>{


    return(

        <div className='spell-bg'>
            <header className='header'>

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
                                <input className='total-slot-left' type="text" />
                                <SpellCounter />
                            </div>
                            <div className='lvl-2'>
                                <input className='total-slot-left' type="text" />
                                <SpellCounter />
                            </div>
                        </div>

                        <div className='col2'>
                            
                            <div className='lvl-3'>
                                <input className='total-slot' type="text" />
                                <SpellCounter />
                            </div>
                            <div className='lvl-4'>
                                <input className='total-slot' type="text" />
                                <SpellCounter />
                            </div>
                            <div className='lvl-5'>
                                <input className='total-slot' type="text" />
                                <SpellCounter />
                            </div>
                        </div>

                        <div className='col3'>
                            
                            <div className='lvl-6'>
                                <input className='total-slot-right' type="text" />
                                <SpellCounter />
                            </div>
                            <div className='lvl-7'>
                                <input className='total-slot-right' type="text" />
                                <SpellCounter />
                            </div>
                            <div className='lvl-8'>
                                <input className='total-slot-right' type="text" />
                                <SpellCounter />
                            </div>
                            <div className='lvl-9'>
                                <input className='total-slot-right' type="text" />
                                <SpellCounter />
                            </div>
                        </div>
                    </div>

                </section>
            </main>

        </div>

    );
}

export default SpellBackground