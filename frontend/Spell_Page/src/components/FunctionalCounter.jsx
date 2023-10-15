import { useState } from "react";
import './FunctionalCounter.css';

function FunctionalCounter(){

    /*useState() will create a State variable and its function
    you can also pass in initial value of the state variable you just created into useState */
    const [counter, setCounter] = useState(0);
    // const [varname, funcname] = useState("inital value");

    const handleIncrement = ()=>{
        setCounter(counter + 1);
    }

    const handleDecrement = ()=>{
        if(counter > 0){
            setCounter(counter - 1);
        }
    }

    return(
        <div className="counterContainer">
            <button className="incr" onClick={handleDecrement}> - </button>
            <p>{counter}</p>
            <button className="decr" onClick={handleIncrement}> + </button>
        </div>
    );
    

}

export default FunctionalCounter;