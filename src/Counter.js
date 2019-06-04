import React, { Component } from "react";

class Counter extends Component {
  constructor(props) {
    console.log('Constructor');
    console.log('----------------');
    super(props);
    this.state = {
      counter: 0,
    }
  }

  incrementHandler = () => {
    this.setState({
      counter: this.state.counter + 1
    })
  } 
  
  decrementHandler = () => {
    this.setState({
      counter: this.state.counter - 1
    })
  } 

  componentDidMount() {
    console.log('Component Did Mount');
    console.log('----------------');
  }


  render() {
    const { counter } = this.state;
    console.log('Render');
    console.log('----------------');
    return (
      <div className="Counter">
        <div>
           <button onClick={this.decrementHandler}>-1</button>
           <h4>Counter: {counter}</h4>
           <button onClick={this.incrementHandler}>+1</button>
        </div>

      </div>
    );
  }
  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log("Component Did Update: ");
    console.log('----------------');
  }

  componentWillUnmount() {
      console.log("Component Will Unmount");
      console.log('----------------');
    }
}

export default Counter;
