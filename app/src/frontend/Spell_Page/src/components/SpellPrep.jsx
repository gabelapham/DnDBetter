import { useState, useEffect } from "react";
import './SpellPrep.css'

function SpellPrep(props){
    const id = props.id;
    const value = props.value;
    const whenChange = props.whenChange;
    // const whenRetrieve = props.whenRetrieve;
    const handleSpellSet = props.handleSpellSet;
    const inProcess = props.inProcess;
    const arb = props.arb;

    if(!inProcess){
        console.log("arb is: ", arb);
        handleSpellSet();
    }

    const [spell1Active, set1Activation] = useState(false);
    // const [spell2Active, set2Activation] = useState(false);
    
    const handleClick = () => {
        set1Activation(!spell1Active);
    }

    const [inputElementValue, setInputElementValue] = useState('');

    useEffect(() => {
        setInputElementValue(value)
        console.log("passed value: ", value)
        console.log('input value of child', inputElementValue);
    }, [value, inputElementValue]);

    
    const handleInputChange = (e) => {
      setInputElementValue(e.target.value);
      console.log("set child input: "  + inputElementValue);
      whenChange(id, e.target.value);
      /*
      - e.target.value is the new value
      */
    };

    useEffect(() =>{
        handleInputChange
    }, [id, value])

    const handleRetrieveData = () => {
        whenRetrieve(inputElementValue);
    }

    /*use useEffect so that it will initially call the on change function and append all empty string input parent inputValues array*/
    useEffect(() => {
        // let isMounted = true;

        // if(isMounted){
        whenChange(id, inputElementValue);
        // }
        // return () => {
        //     isMounted = false;
        // };
    }, []);


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
                        value={inputElementValue}
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