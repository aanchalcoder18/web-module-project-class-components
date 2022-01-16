import React from "react";

class TodoForm extends React.Component{
    constructor(){
        super();
        this.state = {
            input: ""
        }
    }
    handleAdd = (e) =>{
        e.preventDefault();
        // console.log("add"); testing 
        this.props.handleAdd(this.state.input);
      }
    
    handleChange = (e) =>{
        this.setState({
            ...this.state,
            input: e.target.value
        });
    }

    render(){
        return(
            <form>
                <input onChange={this.handleChange} />
                <button onClick={this.handleAdd}>Add</button>
            </form>
        );
    }
   

}

export default TodoForm;