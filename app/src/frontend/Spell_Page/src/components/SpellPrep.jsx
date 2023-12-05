import { useState, useEffect } from "react";
import './SpellPrep.css'

function SpellPrep(props){
    const id = props.id;
    const value = props.value;
    const onChange = props.onChange;
    const retrieveData = props.retrieveData

    const [spell1Active, set1Activation] = useState(false);
    // const [spell2Active, set2Activation] = useState(false);
    
    const handleClick = () => {
        set1Activation(!spell1Active);
    }

    const [inputElementValue, setInputElementValue] = useState('');


    const handleInputChange = (e) => {
      setInputElementValue(e.target.value);
      console.log("set child input: "  + e.target.value);
      onChange(id, e.target.value);
      /*
      - e.target.value is the new value
      */
    };

    useEffect(() => {
        setInputElementValue(value)
    }, [value]);

    const handleRetrieveData = () => {
        retrieveData(inputElementValue);
    }

    return(
        <>
            <div className="indivSpell">
                <div className="prepContainer">
                    
                    <button  className={`spellPreparation ${spell1Active ? 'active' : ''}`} onClick={handleClick}>.</button>
                    
                </div> 
                <div className="spellNameContainer">
                    <label htmlFor={`input-${id}`}> </label>
                    <input
                        className="spell"
                        type="text"
                        id={`input-${id}`}
                        onChange={handleInputChange}
                    />
                </div>
   
                {/* <div className="spellNameContainer">
                    <input className="spell" type="text"/>  
                </div> */}
            </div>   
        </>

    )

}


export default SpellPrep