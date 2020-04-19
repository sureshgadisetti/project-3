import React from 'react';

class Main extends React.Component 
{
    constructor(props) {
        super(props)
        this.state = { 
            number1: '', 
            number2: '',
            number3:'',
            button: 'Button'
        }            
      }
      changeHandler1 = (event) => {
        this.setState({number1: event.target.value});
      }
      changeHandler2 = (event) => {
        this.setState({number2: event.target.value});
      }

      changeHandlerIncrement = (event) => {
        const increment = this.state.button;
        if(increment != "Increment"){
        this.setState({button: "Increment"});
        }
      }

      changeHandlerDecrement = (event) => {
        const decrement = this.state.button;
        if(decrement != "Decrement"){
        this.setState({button: "Decrement"});
        }
      }


      clickHandler = (event) => {
        this.setState({ total: parseInt(this.state.number1) + parseInt(this.state.number2) })
      }
      render() {
    return (
    <div className="mainpage">
            <h2> Main Page</h2>
            <h4>Number1 : {this.state.number1}</h4>
            <input type="number"  value={this.state.number1} onChange={this.changeHandler1} />
            <h4>Number2 : {this.state.number2}</h4>
            <input type="number"  value={this.state.number2} onChange={this.changeHandler2} />    
            <input type="submit"  value="Submit" onClick={this.clickHandler} /> 
            <div>total : {this.state.total}</div>
            <input type="button"  value="Increment" onClick={this.changeHandlerIncrement} />
            <input type="button"  value="Decrement" onClick={this.changeHandlerDecrement} />
            <input type="number"  value={this.state.number3} />      
            <input type="button"  value={this.state.button} />   
            
    </div>
    );
}
}
export default Main;