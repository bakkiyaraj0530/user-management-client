import React from 'react';

function Input(props) {
  return (
      <input
        className="form-control form-control-lg"
        name={props.name}
        type={props.inputType}
        value={props.email}
        onChange={props.onChange}
        placeholder={props.placeholder}
      />
  );
}

export default Input;
