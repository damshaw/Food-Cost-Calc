import React from "react";

function State(props) {
  return (
    <div className="data">
      <p>
        Step: <strong>{props.data.showStep}</strong>
      </p>
      <p>
        <strong>Details</strong>
      </p>
      fname: <strong>{props.data.fname}</strong> <br />
      lname: <strong>{props.data.lname}</strong> <br />
      email: <strong>{props.data.email}</strong> <br />
      businessType: <strong>{props.data.businessType}</strong> <br />
      location: <strong>{props.data.location}</strong> <br />
      ingredientDetails:
      <ol>
        {props.data.ingredientDetails.map((ingredientDetail, i) => (
          <li key={i}>
            ingredient: <strong>{ingredientDetail.ingredient}</strong>
            <br />
            purchasePrice: <strong>{ingredientDetail.purchasePrice}</strong>
            <br />
            quantityPurchased:{" "}
            <strong> {ingredientDetail.quantityPurchased}</strong>
            <br />
            unitPurchased: <strong> {ingredientDetail.unitPurchased}</strong>
            <br />
            perUnit: <strong>{ingredientDetail.perUnit}</strong>
            <br />
            quantityUsed: <strong>{ingredientDetail.quantityUsed}</strong>
            <br />
            usedCost: <strong>{ingredientDetail.usedCost}</strong>
          </li>
        ))}
      </ol>
      totalCost: <strong>{props.data.totalCost}</strong> <br />
      marginPercent: <strong>{props.data.marginPercent}</strong> <br />
      markUpAmount: <strong>{props.data.markUpAmount}</strong> <br />
      menuPrice: <strong>{props.data.menuPrice}</strong> <br />
    </div>
  );
}

export default State;
