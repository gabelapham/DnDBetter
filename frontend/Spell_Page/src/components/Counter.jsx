/*class component with state */

import { Component } from "react"


class Counter extends Component{
    constructor() {
        //calls construtor of the Component class object
        super(); 
        this.state = {
            counter: 0, /*how we set value of a state variable */
        }
    }

    /*const increment = ()=>{} would have access to the "this" inside of increment */
    increment(){
        /*to change the value of a state you have to use the setState method */
        this.setState({
            /*we are passing in the state obj so we use {} in the setState() */
            counter: this.state.counter + 1,
        });
    }

    render() {
        return (
            <div>
                <h3>Count value is: {this.state.counter}</h3>
                <button onClick={() => this.increment()}>click</button>
            </div>
        );

    }
}

export default Counter