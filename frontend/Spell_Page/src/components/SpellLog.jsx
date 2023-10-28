import "./SpellLog.css";
import { useState } from "react";

function SpellLog(prop){
    
    const [isActive, setActivation] = useState(false);
    
    const handleClick = () => {
        setActivation(!isActive);
    }

    const output = [];
    for(let i = 0; i < prop; i++){
        output.push(<input className="spell" type="text" />);
    }

    return(
        <>
            <div className="spellContainer">  

                <div className="indivSpell">
                    <div className="prepContainer">
                        <button  className={`spellPreparation ${isActive ? 'active' : ''}`} onClick={handleClick}></button>
                        
                    </div>    
                    <div className="spellNameContainer">
                        <input className="spell" type="text"/>  
                    </div>
                </div>      

                 
                  
            </div>
        
        </>
    )

}


export default SpellLog