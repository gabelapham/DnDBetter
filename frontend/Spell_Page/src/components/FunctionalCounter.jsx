import { useState } from "react";

function FunctionalCounter(){

    /*useState() will create a State variable and its function
    you can also pass in initial value of the state variable you just created into useState */
    const [counter, setCounter] = useState(0);
    const [varname, funcname] = useState("inital value");

    const clickHandler = ()=>{
        setCounter(counter + 1);
    }

    /*element variable for conditional rendering*/
    const [display, setDisplay] = useState(true);
    let output;
    if(display){
        output = 
        <div>
            <div>The value is: {counter}</div>
            <div>
                <button onClick={clickHandler}>increment</button>
            </div>
        </div>
    }else{
        output = 
        <div>
            <div>Current Value: {counter}</div>
            <div>
                <button onClick={clickHandler}>increment</button>
            </div>
        </div>
    }

    return(
        <div>
            {output}
        </div>

    );

}

export default FunctionalCounter;