import React, { Component, Fragment } from "react";
import NumberFormat from "react-number-format";

import SignIn from "../pages/signin";
import MarginPricing from "../pages/marginPricing";
import Summary from "../pages/summary";
import Email from "../pages/email";

import "antd/dist/antd.css";
import { Collapse, Input, Col, Row, Radio } from "antd";
// import Input from "../components/input";
// import IngredientDetail from "../components/ingredientDetail";

import State from "../components/state";
import Button from "../components/button";

class Form extends Component {
  constructor() {
    super();
    this.state = {
      fname: "",
      lname: "",
      email: "",
      businessType: "",
      location: "",
      termsCheck: "",
      showStep: "Start",
      ingredientDetails: [
        // {
        //   ingredient: "",
        //   purchasePrice: 0,
        //   quantityPurchased: 0,
        //   unitPurchased: "",
        //   quantityUsed: 0,
        //   perUnit: 0,
        //   usedCost: 0
        // }
      ],
      totalCost: 0,
      marginPercent: 0,
      markUpAmount: 0,
      menuPrice: 0

      // fname: "Adam",
      // lname: "Shaw",
      // email: "damshaw@gmail.com",
      // businessType: "cafe",
      // location: "NSW",
      // termsCheck: "",
      // // showStep: "showIngred",
      // bgColor: "#F8F8F8",
      // ingredientDetails: [
      //   {
      //     ingredient: "Chicken",
      //     purchasePrice: 120,
      //     quantityPurchased: 10,
      //     unitPurchased: "Grams",
      //     quantityUsed: 5,
      //     perUnit: 0,
      //     usedCost: 0
      //   },
      //   {
      //     ingredient: "Garlic",
      //     purchasePrice: 10,
      //     quantityPurchased: 5,
      //     unitPurchased: "Grams",
      //     quantityUsed: 2,
      //     perUnit: 0,
      //     usedCost: 0
      //   }
      // ],
      // totalCost: 0,
      // marginPercent: 0,
      // markUpAmount: 0,
      // menuPrice: 0
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange = (e, i) => {
    e.preventDefault();
    let { name, value } = e.target;
    let ingredientDetails = [...this.state.ingredientDetails];
    let totalCost = 0;
    let menuPrice = 0;

    ingredientDetails[i] = {
      ...ingredientDetails[i],
      [name]: value
    };

    let calcUsedCost = ingredientDetails.map(
      ingD => (ingD.purchasePrice / ingD.quantityPurchased) * ingD.quantityUsed
    );

    for (let i = 0; i < calcUsedCost.length; i++) {
      totalCost += calcUsedCost[i];
    }

    ingredientDetails[i] = {
      ...ingredientDetails[i],
      [name]: value,
      usedCost: calcUsedCost[i]
    };
    // if (
    //   Object.keys(this.state.ingredientDetails[i].ingredient[i]).length === 0
    // ) {
    //   console.log("no ingred", this.state.ingredientDetails[i].ingredient[i]);
    // }
    this.setState({
      [name]: value,
      ingredientDetails,
      totalCost,
      menuPrice
    });
  };
  handleSignIn = e => {
    // e.preventDefault();
    this.setState({
      showStep: "showIngred",
      bgColor: "#ffffff"
    });
  };
  handleIngred = e => {
    e.preventDefault();
    this.setState({
      showStep: "showMargin",
      bgColor: "#F8F8F8"
    });
  };
  handleMargin = e => {
    e.preventDefault();
    this.setState({
      showStep: "showSummary",
      bgColor: "#DBF6F2"
    });
  };
  handleSummary = e => {
    e.preventDefault();
    this.setState({
      showStep: "showEmail",
      bgColor: "#DBF6F2"
    });
  };
  handleAddIngredient = e => {
    e.preventDefault();

    this.setState(prevState => ({
      ingredientDetails: [
        ...prevState.ingredientDetails,
        {
          ingredient: "",
          purchasePrice: 0,
          quantityPurchased: 0,
          unitPurchased: "",
          quantityUsed: 0,
          perUnit: 0,
          usedCost: 0
        }
      ]
    }));
  };
  onMarginChange = value => {
    let { marginPercent, totalCost, markUpAmount, menuPrice } = this.state;
    markUpAmount = (marginPercent / 100) * totalCost;
    menuPrice = totalCost + markUpAmount;
    console.log("markUpAmount", markUpAmount);
    this.setState({
      marginPercent: value,
      markUpAmount,
      menuPrice
    });
  };

  renderSwitch(param) {
    const { Panel } = Collapse;
    const radioStyle = {
      height: "48px",
      lineHeight: "48px",
      flex: "auto",
      textAlign: "center",
      borderRadius: "0"
    };

    switch (param) {
      case "showSignIn":
        return (
          <SignIn
            data={this.state}
            handleChange={this.handleChange}
            handleSignIn={this.handleSignIn}
          />
        );
      case "showIngred":
        return (
          <Fragment>
            <form onSubmit={this.handleSummary}>
              <Col
                className="calc-wrap"
                xs={{ span: 24 }}
                md={{ span: 12, offset: 6 }}
              >
                <h3>Add your ingredients</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Facilisi morbi eget tincidunt integer amet neque.
                </p>

                <Collapse expandIconPosition="right">
                  {this.state.ingredientDetails.map((ingredientDetail, i) => (
                    <Panel
                      header={`Ingredient: ${ingredientDetail.ingredient}`}
                      key={i}
                    >
                      <Fragment>
                        <div className="ingredientDetails">
                          <Input
                            name="ingredient"
                            addonBefore="Ingredient"
                            type="text"
                            defaultValue="E.g. Chicken Breast"
                            value={ingredientDetail.ingredient}
                            onChange={e => this.handleChange(e, i)}
                          />
                          <Row gutter={[12, 12]}>
                            <Col span={12}>
                              <Input
                                name="purchasePrice"
                                addonBefore="Purchase Price"
                                type="number"
                                prefix="$"
                                defaultValue="0.00"
                                value={ingredientDetail.purchasePrice}
                                onChange={e => this.handleChange(e, i)}
                              />
                            </Col>
                            <Col span={12}>
                              <Input
                                name="quantityPurchased"
                                addonBefore="Quantity Purchased"
                                type="number"
                                defaultValue="0"
                                value={ingredientDetail.quantityPurchased}
                                onChange={e => this.handleChange(e, i)}
                              />
                            </Col>
                          </Row>
                          <label>Unit Purchased</label>
                          <Radio.Group
                            name="unitPurchased"
                            value={ingredientDetail.unitPurchased}
                            onChange={e => this.handleChange(e, i)}
                            className="unitPurchased"
                          >
                            <Radio.Button value="unit" style={radioStyle}>
                              unit
                            </Radio.Button>
                            <Radio.Button value="g" style={radioStyle}>
                              g
                            </Radio.Button>
                            <Radio.Button value="mL" style={radioStyle}>
                              mL
                            </Radio.Button>
                          </Radio.Group>
                          <Input
                            name="quantityUsed"
                            addonBefore="Quantity used"
                            type="number"
                            defaultValue="0"
                            value={ingredientDetail.quantityUsed}
                            onChange={e => this.handleChange(e, i)}
                          />
                          <label>Ingredient Cost</label>
                          <NumberFormat
                            value={ingredientDetail.usedCost}
                            displayType={"text"}
                            decimalScale={2}
                            thousandSeparator={true}
                            prefix={"$"}
                            renderText={value => (
                              <div className="price-display bg-grey-mid used-cost">
                                {value}
                              </div>
                            )}
                          />

                          {/* <Input
                              name="usedCost"
                              addonBefore="Ingredient Cost"
                              className="usedCost"
                              type="number"
                              prefix="$"
                              defaultValue="0.00"
                              value={ingredientDetail.usedCost}
                              color="bg-grey-mid"
                            /> */}
                          {/* Price:{ingredientDetail.purchasePrice} /
                        <br />
                        Quantity:
                        {ingredientDetail.quantityPurchased}
                        <br />
                        PerUnit:{" "}
                        {ingredientDetail.purchasePrice /
                          ingredientDetail.quantityPurchased}{" "}
                        *
                        <br />
                        Used: {ingredientDetail.quantityUsed} = <br />
                        Cost:{" "}
                        {(ingredientDetail.purchasePrice /
                          ingredientDetail.quantityPurchased) *
                          ingredientDetail.quantityUsed}
                        <br />
                        usedCost: {ingredientDetail.usedCost} */}
                        </div>
                      </Fragment>
                    </Panel>
                  ))}
                </Collapse>
                {/* <label>Total Cost</label>
                  <NumberFormat
                    value={this.state.totalCost}
                    displayType={"text"}
                    decimalScale={2}
                    thousandSeparator={true}
                    prefix={"$"}
                    style={{ width: "100%" }}
                    renderText={value => (
                      <div className="price-display bg-grey-mid total-cost">
                        {value}
                      </div>
                    )}
                  /> */}

                {/* <InputNumber
                defaultValue={0}
                value={this.state.totalCost}
                formatter={value =>
                  `$ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ",")
                }
                parser={value => value.replace(/\$\s?|(,*)/g, "")}
                min={0}
                step={0.05}
                style={{ width: "100%" }}
                name="totalCost"
              /> */}
                <hr />
                <Button
                  onClick={this.handleAddIngredient}
                  text="Add ingredient"
                  color="bg-green-light"
                />
              </Col>
              {/* <Button text="View Margins & Pricing" color="bg-orange-light" /> */}

              {/* <IngredientList
                          data={this.state}
              handleAddIngredient={this.handleAddIngredient}
              // ingredientDetails={this.state.ingredientDetails}
              handleIngred={this.handleIngred}
              handleChange={this.handleChange}
            /> */}
              <MarginPricing
                data={this.state}
                handleChange={this.handleChange}
                onMarginChange={this.onMarginChange}
                handleMargin={this.handleMargin}
              />

              <Summary
                data={this.state}
                handleChange={this.handleChange}
                handleSummary={this.handleSummary}
              />
            </form>
          </Fragment>
        );
      case "showMargin":
        return (
          <MarginPricing
            data={this.state}
            handleChange={this.handleChange}
            onMarginChange={this.onMarginChange}
            handleMargin={this.handleMargin}
          />
        );
      case "showSummary":
        return (
          <Summary
            data={this.state}
            handleChange={this.handleChange}
            handleSummary={this.handleSummary}
          />
        );
      case "showEmail":
        return (
          <Email
            data={this.state}
            handleChange={this.handleChange}
            handleEmail={this.handleEmail}
          />
        );
      default:
        return (
          <SignIn
            data={this.state}
            handleChange={this.handleChange}
            handleSignIn={this.handleSignIn}
          />
        );
    }
  }
  render() {
    console.log("render", this.state);

    return (
      <Fragment>
        {this.renderSwitch(this.state.showStep)}
        {/* <State data={this.state} /> */}
      </Fragment>
    );
  }
}

export default Form;