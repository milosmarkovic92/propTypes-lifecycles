// import React, { Component } from 'react';

// export default class Form extends Component {
//     inputChangeHandler = (event) => {
//         const { name, value } = event.target;
//         console.log(name, '=>', value);
//     }
//     render() {
//         const { name, label } = this.props;
//         return (
//             <div>
//                 <label htmlFor={name}> {label} </label>
//                 <input type="text" name={name} id={name} onChange={this.inputChangeHandler}/>
//             </div>
//         )
//     }
// }

import React from "react";
import PropTypes from "prop-types";

const inputChangeHandler = event => {
  const { name, value } = event.target;
  console.log(name, "=>", value);
};

const Form = (props) => {
  const { name, label } = props;
  return (
    <div>
      <label htmlFor={name}> {label} </label>
      <input
        type="text"
        name={name}
        id={name}
        onChange={inputChangeHandler}
      />
    </div>
  );
}

Form.propTypes = {
  name: PropTypes.number.isRequired
};

export default Form;