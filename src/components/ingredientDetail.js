import React, { Fragment } from "react";
import Input from "./input";

function IngredientDetail(props) {
  return (
    <Fragment>
      <div className="ingredientDetails">
        <Input
          name="ingredient"
          label="Ingredient"
          type="text"
          placeholder="E.g. Chicken Breast"
          // value={this.state.ingredient}
          onChange={props.handleChange}
        />
        <Input
          name="purchasePrice"
          label="Purchase Price"
          type="text"
          placeholder="$0.00"
          // value={this.state.purchasePrice}
          onChange={props.handleChange}
        />
        <Input
          name="quantityPurchased"
          label="Quantity Purchased"
          type="text"
          placeholder="0"
          // value={this.state.quantityPurchased}
          onChange={props.handleChange}
        />
        <Input
          name="unitPurchased"
          label="Unit Purchased"
          type="text"
          placeholder="g, mL"
          // value={this.state.unitPurchased}
          onChange={props.handleChange}
        />
        <Input
          name="quantityUsed"
          label="Quantity used"
          type="text"
          placeholder="0"
          // value={this.state.quantityUsed}
          onChange={props.handleChange}
        />

        <Input
          name="ingredientCost"
          label="Ingredient Cost"
          type="text"
          placeholder="$0.00"
          // value={this.state.ingredientCost}
          color="bg-grey-mid"
          // onChange={this.handleChange("ingredientCost")}
        />
        {/* <Input
              name="usedCost"
              label="Total Used Cost"
              type="text"
              placeholder="$0.00"
              value={this.state.usedCost}
              color="bg-grey-mid"
              // onChange={this.handleChange("ingredientCost")}
            />
            <hr />
            <Input
              name="totalCost"
              label="Total Ingredients Cost"
              type="text"
              placeholder="$0.00"
              value={this.state.totalCost}
              color="bg-charcoal"
              // onChange={this.handleChange("ingredientCost")}
            /> */}
        {/* <p>ingredient = "{this.state.ingredient}"</p>
        <p>purchasePrice = "{this.state.purchasePrice}"</p>
        <p>quantityPurchased = "{this.state.quantityPurchased}"</p>
        <p>unitPurchased = "{this.state.unitPurchased}"</p>
        <p>quantityUsed = "{this.state.quantityUsed}"</p>
        <p>ingredientCost = "{this.state.ingredientCost}"</p> */}
      </div>
    </Fragment>
  );
}
export default IngredientDetail;
