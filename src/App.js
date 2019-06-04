import React, { Component } from "react";
import Counter from "./Counter";
import "./App.css";
import PropTypes from "prop-types";

// const Test = props => {
//   const { str, bool, num, arraySt, objOf } = props;
//   return (
//     <div>
//       <h1>{str}</h1>
//       <h4>{bool ? "boolean" : null}</h4>
//       <h4>{num}</h4>
//       <div>
//         {objOf.map(item => (
//           <p key={item.age}>{item.name}</p>
//         ))}
//       </div>
//       <div>
//         {arraySt.map(item => (
//           <p key={item}>{item}</p>
//         ))}
//       </div>
//     </div>
//   );
// };

// Test.propTypes = {
//   str: PropTypes.string.isRequired,
//   bool: PropTypes.bool.isRequired,
//   num: PropTypes.number.isRequired,
//   arraySt: PropTypes.arrayOf(PropTypes.string),
//   objOf: PropTypes.arrayOf(
//     PropTypes.shape({
//       name: PropTypes.string,
//       age: PropTypes.number
//     })
//   )
// };

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mount: true
    };
  }

  mountHandler = () => {
    this.setState({
      mount: true
    })
  }

  unmountHandler = () => {
    this.setState({
      mount: false
    })
  }

  render() {
    const { mount } = this.state;
    return (
      <div className="App">
        {/* <Test
          str={"Neki string"} // string
          bool //boolean moze za buttone
          num={321}  //numbers
          arraySt={[1, 2, 3]}  //nizovi
          objOf={[{ name: "John", age: 21 }, { name: "Peter", age: 23 }]} //objekti
        /> */}

        <div>
          <button onClick={this.mountHandler} disabled={mount}>Mount</button>
          {
            mount ? 
              <Counter /> :
              null
          }
          <button onClick={this.unmountHandler} disabled={!mount}>Unmount</button>
        </div>
      </div>
    );
  }
}

export default App;
