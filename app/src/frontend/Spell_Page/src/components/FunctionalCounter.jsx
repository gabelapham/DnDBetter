import { useState } from "react";
import './FunctionalCounter.css';
import SpellLog from './SpellLog';

function FunctionalCounter(props){
    const spellAdded = props.spellAdded;/*you can either pass just with props.id or set it to variable then pass */
    const handleSpellSet = props.handleSpellSet;
    const arb = props.arb;

    /*useState() will create a State variable and its function
    you can also pass in initial value of the state variable you just created into useState */
    const [counter, setCounter] = useState(0);
    // const [varname, funcname] = useState("inital value");

    const handleIncrement = ()=>{
        switch(props.id){
            case 1: case 2: case 3: case 4:
                if(counter < 13){
                    setCounter(counter + 1);
                }
                break;
            case 5: case 6: case 7:
                if(counter < 9){
                    setCounter(counter + 1);
                }
                break;
            case 8: case 9:
                if(counter < 7){
                    setCounter(counter + 1);
                }
                break;
            default:
                break;
        }

    }

    const handleDecrement = ()=>{
        if(counter > 0){
            setCounter(counter - 1);
        }
    }

    return(
        <>
        <div className="spellGrid">
            <div className="counterContainer">
                <button className="decr" onClick={handleDecrement}> - </button>
                <p className="counterFont">{counter}</p>
                <button className="incr" onClick={handleIncrement}> + </button>

            </div>
            <div className="spellContent">
                <SpellLog spellSectionID={props.id} count={counter} spellAdded={spellAdded} handleSpellSet={handleSpellSet} arb={arb}/>
            </div>
        </div>

        </>
    );
    

}

export default FunctionalCounter;