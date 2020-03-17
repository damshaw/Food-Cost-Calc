import React from "react";

function State(props) {
  return (
    <div className="data">
      <p>
        Step: <strong>{props.appData.showStep}</strong>
      </p>
      <p>
        <strong>Details</strong>
      </p>
      {/* fname: <strong>{props.appData.fname}</strong> <br />
      lname: <strong>{props.appData.lname}</strong> <br /> */}
      email: <strong>{props.appData.email}</strong> <br />
      businessType: <strong>{props.appData.businessType}</strong> <br />
      {/* location: <strong>{props.appData.location}</strong> <br /> */}
      ingredientDetails:
      <ol>
        {props.appData.ingredientDetails.map((ingredientDetail, i) => (
          <li key={i}>
            ingredient: <strong>{ingredientDetail.ingredient}</strong> <br />
            purchasePrice: <strong>{ingredientDetail.purchasePrice}</strong>
            <br />
            quantityPurchased:
            <strong> {ingredientDetail.quantityPurchased}</strong> <br />
            unitPurchased: <strong>{ingredientDetail.unitPurchased}</strong>
            <br />
            {/* perUnit: <strong>{ingredientDetail.perUnit}</strong>
            <br /> */}
            quantityUsed: <strong>{ingredientDetail.quantityUsed}</strong>
            <br />
            usedCost: <strong>{ingredientDetail.usedCost}</strong>
          </li>
        ))}
      </ol>
      totalCost: <strong>{props.appData.totalCost}</strong> <br />
      marginPercent: <strong>{props.appData.marginPercent}</strong> <br />
      markUpAmount: <strong>{props.appData.markUpAmount}</strong> <br />
      menuPrice: <strong>{props.appData.menuPrice}</strong> <br />
    </div>
  );
}

export default State;
