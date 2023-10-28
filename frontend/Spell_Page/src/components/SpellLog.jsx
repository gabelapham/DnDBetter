import "./SpellLog.css";
import { useState } from "react";

function SpellLog(props){
    
    const [isActive, setActivation] = useState(false);
    
    const handleClick = () => {
        setActivation(!isActive);
    }

    const output = [];
    for(let i = 0; i < props.count; i++){
        output.push(
            
            <div className="indivSpell">
                <div className="prepContainer">
                    <button  className={`spellPreparation ${isActive ? 'active' : ''}`} onClick={handleClick}></button>
                    
                </div>    
                <div className="spellNameContainer">
                    <input className="spell" type="text"/>  
                </div>
            </div>    
        );
    }

    return(
        <>  
            <div className="spellContainer">  
                {output}

                {/* <div className="indivSpell">
                    <div className="prepContainer">
                        <button  className={`spellPreparation ${isActive ? 'active' : ''}`} onClick={handleClick}></button>
                        
                    </div>    
                    <div className="spellNameContainer">
                        <input className="spell" type="text"/>  
                    </div>
                </div>       */}                 
                  
            </div>
        
        </>
    )

}


export default SpellLog