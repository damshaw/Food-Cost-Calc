import React, { Component, Fragment } from "react";
import { useHistory } from "react-router-dom";

import "antd/dist/antd.css";
import { Collapse, Checkbox } from "antd";
import Input from "../components/input";

import Button from "../components/button";
import IngredientDetail from "../components/ingredientDetail";

const { Panel } = Collapse;

function IngredientList(props) {
  const history = useHistory();

  function handleClick() {
    history.push("/margin");
  }

  return (
    <Fragment>
      <h3>Input your ingredients</h3>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Facilisi morbi
        eget tincidunt integer amet neque.
      </p>
      <Collapse defaultActiveKey="1">
        {/* {props.ingredientDetails.map((item, i) => (
            <Panel header={"Ingredient " + i} key={i}>
              <IngredientDetail />
            </Panel>
          ))} */}
      </Collapse>

      <Input
        name="totalCost"
        label="Total Cost"
        type="text"
        placeholder="$0.00"
        // value={props.totalCost}
      />
      <Button
        onClick={props.handleAddIngredient}
        text="Add ingredient"
        color="bg-grey"
      />
      <Button
        text="View Margins & Pricing"
        color="bg-orange-light"
        onClick={handleClick}
      />
    </Fragment>
  );
}
export default IngredientList;
