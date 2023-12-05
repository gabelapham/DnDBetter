import "./SpellLog.css";
import { useState } from "react";
import SpellPrep from "./SpellPrep"
import React, { useEffect } from 'react';

/*so we create change children input value function in parent HERE, then
when ever we want to change the input value of children or when children need to
check onChange: then children just call the call back function we passed into it which
is teh change children input value function we create HERE. */

/*basically reach children through function passed in, call back functions is a way for
children to pass value back to parent component */

function SpellLog(props){
    const spellAdded = props.spellAdded;
    const spellSectionID = props.spellSectionID;

    const [inputValues, setInputValues] = useState([]);

    /*note since children would have made this call back function, the id would acctually
    be the "inputValueOfInputElement-id" so its actual id*/
    const changeInput = (id, value) =>{
        const index = inputValues.findIndex((item) => item.id == id);//findIndex return index of first element that satisfies condition or -1 on fail

        /*update value if component exist */
        if(index != -1){
            setInputValues((prevData) => {
                const updatedData = [...prevData];
                updatedData[index].value = value;
                return updatedData;
            })
        }else{/*if component doesn't exist it's added to the array */
            setInputValues((prevData) => [
                ...prevData,
                {
                    id: id,
                    value: value,
                },
            ]);
        }
        /*use the id passed in by the children */
        // retrieveData(id);
    };


    const retrieveData = (id) => {
    // const retrieveData = () => {
        // inputValues.map((obj) => {
        //     console.log("id: " + obj.id + " value: " + obj.value);
        // })
        const result = inputValues.find((item) => item.id == id);//true of success and false on fail
        
        if(inputValues){
            console.log(`retrieve data for ID ${id}: ${result.value}`);
        }
        return result.value;
    }

    /*set up index to create each spell slot component */
    const indexRange = [];
    for(let i = 0; i < props.count; i++){
        indexRange.push({id: i});
    }  
    // /*go through and create indexRange number of spell slot */
    // const output = [];
    // indexRange.map((obj) => (
    //     output.push(
    //         <SpellPrep 
    //             key={obj.id} 
    //             id={obj.id} 
    //             value={inputValues.find((item) => item.id == obj.id)?.value || ''}
    //             changeInput={changeInput} 
    //             retrieveData={retrieveData}
    //         />
    //     )
    // ));

    const [add, setAdd] = useState(true);
    const [haveSpace, setHaveSpace] = useState(false);
    const [location, setLocation] = useState([]);

    // /*loop through and get any input elements by id*/
    // /*check if spell already added, and if there is space */
    // const handleCheckInputValues = () => {
    //     const inputValues = indexRange.map((obj) => {
    //         // Assuming each object in the array has a unique identifier like 'id'
    //         const inputValue = document.getElementById(`input-${obj.id}`).value;
    //         if(inputValue == spellAdded.spellToBeAdd){
    //             setAdd(false);
    //         }
    //         if(inputValue == ''){
    //             setHaveSpace(true);
    //             if(location.length == 0){
    //                 setLocation({id: obj.id, value: inputValue});
    //             }
    //         }
    //         return { id: obj.id, value: inputValue };
    //     });
    //     console.log('Input values:', JSON.stringify(inputValues));
    // };
    
    // useEffect(() => {
    //     const inputValue = handleCheckInputValues();
    // }, [spellAdded]);

    /*problem is that it only store id: value: pair that actually contain data and not empty slot?? */
    const handleCheckInputValues = () => {
        inputValues.map((obj) =>{
            // value = retrieveData(obj.id);
            console.log(`retrieve data for ID ${obj.id}: ${obj.value}`);
            console.log("retrieve method2 data for ID" + obj.id + " value: " + obj.value);

            if(obj.value == spellAdded.spellToBeAdd){
                setAdd(false);
            }
            if(obj.value == ''){
                setHaveSpace(true);
                if(location.length == 0){/*so only find the first empty space */
                    setLocation({id: obj.id, value: obj.value});
                }
            }

        })
        console.log("setAdd: " + add + " space " + haveSpace + " location: " + location);
    }

    if(spellSectionID == spellAdded.level){
        handleCheckInputValues();
        if(add == true && haveSpace == true){
            changeInput(location.id, spellAdded.spellToBeAdd);
        }
    }else{

    }
 
    

            // <div className="indivSpell" id={i}>
            //     <div className="prepContainer">
                    
            //         <button  className={`spellPreparation ${spell1Active ? 'active' : ''}`} onClick={handleClick}>.</button>
                    
            //     </div>    
            //     <div className="spellNameContainer">
            //         <input className="spell" type="text"/>  
            //     </div>
            // </div>    
        
    // }


    return(
        <>  
            <div className="spellContainer">
                {indexRange.map((obj) => (
                    <SpellPrep 
                        key={obj.id} 
                        id={obj.id} 
                        value={inputValues.find((item) => item.id == obj.id)?.value || ''}
                        onChange={changeInput} 
                        retrieveData={retrieveData}
                    />
                ))}
            </div>
            {/* <div className="spellContainer">  
                {output}               
                  
            </div> */}
        
        </>
    )

}


export default SpellLog