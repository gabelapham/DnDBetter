/*class component with event handler */

import { Component } from "react";

class ClassComp extends Component{
    clickHandler() {
        
    }
    render(){
        const {prop1} = this.props;
        return(
            <div>
                <h1>class Component {this.props.classProp}</h1>
                <h1>class component {prop1}</h1>
                <button onClick={this.clickHandler}>class button</button>
            </div>    
        );


    }
}

export default ClassComp