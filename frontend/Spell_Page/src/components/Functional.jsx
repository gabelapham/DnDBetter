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
}

// const FunctionalComp = ()=> {
//     return <p>stuff</p>
// }


export default FunctionalComp