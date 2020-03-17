import React from "react";
function Button(props) {
  return (
    <div className="uk-width-1-1">
      <button className={`kbutton ${props.color}`} onClick={props.onClick}>
        {props.text}
      </button>
    </div>
  );
}

Button.defaultProps = {
  text: "Button Text",
  // onClick: "",
  color: "bg-grey"
};

export default Button;
