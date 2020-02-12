import React, { Fragment } from "react";

function Input(props) {
  return (
    <Fragment>
      <div className="uk-width-1-1">
        <label className="uk-form-label" for="form-stacked-text">
          {props.label}
        </label>
        <input
          className={`uk-input ${props.color}`}
          type={props.type}
          placeholder={props.placeholder}
          value={props.value}
          onChange={props.onChange}
        />
      </div>
    </Fragment>
  );
}
Input.defaultProps = {
  label: "Input Label",
  type: "Input Type",
  placeholder: "Input Placeholder",
  // value: "Input Value",
  // onChange: "onChange",
  color: "bg-white"
};
export default Input;
