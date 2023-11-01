import "./SpellLog.css";
import { useState } from "react";
import SpellPrep from "./SpellPrep"

function SpellLog(props){

    const output = [];
    for(let i = 0; i < props.count; i++){
        output.push(
            <SpellPrep />
            // <div className="indivSpell" id={i}>
            //     <div className="prepContainer">
                    
            //         <button  className={`spellPreparation ${spell1Active ? 'active' : ''}`} onClick={handleClick}>.</button>
                    
            //     </div>    
            //     <div className="spellNameContainer">
            //         <input className="spell" type="text"/>  
            //     </div>
            // </div>    
        );
    }

    return(
        <>  
            <div className="spellContainer">  
                {output}               
                  
            </div>
        
        </>
    )

}


export default SpellLog