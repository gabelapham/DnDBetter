import { useState } from "react";
import './FunctionalCounter.css';
import SpellLog from './SpellLog';

function FunctionalCounter(props){

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
                <button className="incr" onClick={handleDecrement}> - </button>
                <p>{counter}</p>
                <button className="decr" onClick={handleIncrement}> + </button>

            </div>
            <div className="spellContent">
                <SpellLog count={counter} />
            </div>
        </div>

        </>
    );
    

}

export default FunctionalCounter;