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

/*NOTE with async
if you need to use a useState variable in same function right after it's set to new value
YOU NEED to use the set function of that useState variable to access the previous version:
 setMyVar(prevVar => {
    console.log('previous state: ', prevVar)
}) */

function SpellLog(props){
    const spellAdded = props.spellAdded;
    const spellSectionID = props.spellSectionID;
    const handleSpellSet = props.handleSpellSet;
    const arb = props.arb;

    const [inputValues, setInputValues] = useState([]);

    /*note since children would have made this call back function, the id would acctually
    be the "inputValueOfInputElement-id" so its actual id*/
    const changeInput = (id, value) =>{
        console.log("adding value: " + value + " to id: " + id);

        /*if we use the setInputValues function it forces the inputValues to be updated before
        proceeding to work with the inputValues array */
        setInputValues((prevData) => {
            const index = prevData.findIndex((item) => item.id == id);//findIndex return index of first element that satisfies condition or -1 on fail
            
            /*if component exist it's updated */
            if(index != -1){
                return prevData.map((item) =>
                    item.id == id ? { ...item, value: value } : item
                );
                // setInputValues((prevData) => {
                //     const updatedData = [...prevData];
                //     updatedData[index].value = value;
                //     // return updatedData;
                //     setInputValues(updatedData);
                // })
            }else{/*if component doesn't exist it's added */
                return [...prevData, { id: id, value: value }];
                // setInputValues((prevData) => [
                //     ...prevData,
                //     {
                //         id: id,
                //         value: value,
                //     },
                // ]);
            }
        })

        /*use the id passed in by the children */
        console.log("values right after set: ", inputValues);

    };
    /*the change input is a 2 way relationship 
    1. if parent call the change function it will change the value when rendering spellPrep and passing the value, which 
    will cause the children to call its setElementInput function thus reflect the change for the children
    2. the children input will call handleInputChange onchange(when input changes) thus the call back function
    will set the values for the parent */


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

    let add = true;
    let haveSpace = false;
    let location;
    let foundLocation = false;
    let inProcess = true;

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
            console.log("check input to be add: " + spellAdded.spellToBeAdd + " curChecking value: " + obj.value + " with id: " + obj.id);
            // value = retrieveData(obj.id);
            // console.log(`retrieve data for ID ${obj.id}: ${obj.value}`);
            // console.log("retrieve data for ID: " + obj.id + " value: " + obj.value);
            if(obj.value == spellAdded.spellToBeAdd){
                add = false;
            }
            if(obj.value == ''){
                console.log("running set location")
                haveSpace = true;
                if(!foundLocation){/*so only find the first empty space */
                    location = obj.id;
                    foundLocation = true;
                }
            }

        })
        inProcess = false;
     }

    if(spellAdded.spellToBeAdd != '' && spellAdded.spellToBeAdd != undefined){
        console.log("start checking...");
        
        if(spellSectionID == spellAdded.level){
            if(inputValues.length != 0){
                handleCheckInputValues();
                if(add == true && haveSpace == true){
                    changeInput(location, spellAdded.spellToBeAdd);
                    console.log("calling spell set function");
                    handleSpellSet();
                    // spellAdded.spellToBeAdd = '';
                }else{
                    console.log('spell already added or no space to append');
                }
            }else{
                console.log('no space to append');
            }
        }else{
            console.log("not section: " + spellSectionID);
        }
    }



    const printInput = () => {
        if(inputValues.length != 0){
            console.log("input has length: " + inputValues.length);
            inputValues.map((obj) =>{
                console.log("input section: " + spellSectionID + " ID: " + obj.id + " value: " + obj.value);
            })
        }else{
            console.log("input section: " + spellSectionID + " have input value length 0");
        }
    }

   
    useEffect(() => {
        console.log("updated values", inputValues);

        // indexRange.map((obj) => (
        //     output.push(
        //     <SpellPrep 
        //         key={obj.id} 
        //         id={obj.id} 
        //         value={inputValues.find((item) => item.id == obj.id)?.value || ''}
        //         whenChange={changeInput} 
        //         whenRetrieve={retrieveData}
        //     />
        //     )
        // ))
        
        // if(add == true && haveSpace == true){
        //     changeInput(location.id, spellAdded.spellToBeAdd);
        //     spellAdded.spellToBeAdd = undefined;
        // }
        // console.log("input value updated: ", inputValues);
        // console.log("add value updated: ", add);
        // console.log("have space value updated: ", haveSpace);
        // console.log("location value updated: ", location);
        printInput();
    }, [inputValues]);

    // useEffect(() => {
    //     const interval = setInterval(() => {
    //       // Simulate updating inputValues
    //     }, 1000);
    
    //     // Cleanup the interval on component unmount
    //     return () => clearInterval(interval);
    // }, [inputValues]); // Run this effect only once on component mount
    

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
                        whenChange={changeInput} 
                        whenRetrieve={retrieveData}
                        handleSpellSet={handleSpellSet}
                        inProcess={inProcess}
                        arb={arb}
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