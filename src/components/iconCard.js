import React from "react";

function IconCard(props) {
  return (
    <div>
      <div className="uk-card uk-card-default uk-card-body">
        <div className="svg-icon">{props.cardIcon}</div>
        <div className="card-title">{props.cardTitle}</div>
      </div>
    </div>
  );
}
IconCard.defaultProps = {
  cardIcon: "",
  cardTitle: "Card Title"
};
export default IconCard;
