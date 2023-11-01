import { useState } from "react";
import './SpellPrep.css'

function SpellPrep(){
    const [spell1Active, set1Activation] = useState(false);
    // const [spell2Active, set2Activation] = useState(false);
    
    const handleClick = () => {
        set1Activation(!spell1Active);
    }

    return(
        <>
            <div className="indivSpell">
                <div className="prepContainer">
                    
                    <button  className={`spellPreparation ${spell1Active ? 'active' : ''}`} onClick={handleClick}>.</button>
                    
                </div>    
                <div className="spellNameContainer">
                    <input className="spell" type="text"/>  
                </div>
            </div>   
        </>

    )

}


export default SpellPrep