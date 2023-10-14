import { Component } from "react";

class Form extends Component{
    /*create a state object/variable to hold input*/
    state = {
        inputVal: "",
        secInput: "",
    };

    handleChange = (event) => {
        /*pass in state obj to change its value with the setState */
        this.setState({
            /*the event.target.value refers to user input */
            inputVal: event.target.value,
        })
    }
    
    handleSecInput = (event) => {

        this.setState({
            secInput: event.target.value,
        })
    }

    handleSubmit =(event) =>{
        event.preventDefault(); /*prevent web page from refreshing and losing all states */
        
    }
    
    render(){
         
        <div>
            Form
            {/* form have a event onSubmit */}
            <form onSubmit={this.handleSubmit}>
                {/*whenever you create input feed, you need to
                create a state variable to hold its value */}
                <input 
                    onChange={this.handleChange} 
                    type="text" 
                    value={this.state.inputVal}
                ></input>

                <input value={this.state.secInput} type="text" onChange={this.handleSecInput}>

                </input>

                <button type="submit">Submit form</button>
            </form>
        </div>
    }
}