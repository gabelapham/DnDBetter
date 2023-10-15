/*functional component with event handler */

function FunctionalComp(props){
    /*destructuring  the props object */
    const {prop1, prop2} = props;

    function clickHandler(){
        console.log("function button clicked");
    }

    return (
        <div>
            <p>
                output some prop: {prop1} {prop2} 
            {/* if we have children and want to display them
            we add: {props.children} */}
            </p> 
            <button onClick={clickHandler}>function button</button>

        </div>
        
    );


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

// const FunctionalComp = ()=> {
//     return <p>stuff</p>
// }


export default FunctionalComp