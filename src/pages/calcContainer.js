import React, { Component, Fragment } from "react";
import NumberFormat from "react-number-format";

import SignIn from "../pages/signin";
import MarginPricing from "../components/margin";
import Summary from "../components/summary";
import Email from "../pages/email";
import Header from "../components/header";
import Footer from "../components/footer";

import "antd/dist/antd.css";
import { Collapse, Input, Col, Row, Select, Radio } from "antd";
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
      // showStep: "showIngred",
      // showStep: "showEmail",
      // ingredientDetails: [],
      // {
      //   ingredient: "",
      //   purchasePrice: 0,
      //   quantityPurchased: 0,
      //   unitPurchased: "",
      //   quantityUsed: 0,
      //   perUnit: 0,
      //   usedCost: 0
      // }
      // ],
      totalCost: "",
      marginPercent: "",
      markUpAmount: "",
      menuPrice: "",

      // fname: "Adam",
      // lname: "Shaw",
      // email: "damshaw@gmail.com",
      // businessType: "cafe",
      // location: "NSW",
      // termsCheck: "",
      // showStep: "showIngred",
      // bgColor: "#F8F8F8",
      ingredientDetails: [
        // {
        // ingredient: "Garlic"
        //   purchasePrice: 120,
        //   quantityPurchased: 10,
        //   unitPurchased: "Grams",
        //   quantityUsed: 5,
        //   perUnit: 0,
        //   usedCost: 45
        // },
        // {
        // ingredient: "Onoin"
        //   purchasePrice: 10,
        //   quantityPurchased: 5,
        //   unitPurchased: "Grams",
        //   quantityUsed: 2,
        //   perUnit: 0,
        //   usedCost: 56
        // },
        // {
        // ingredient: "Tomato"
        //   purchasePrice: 30,
        //   quantityPurchased: 20,
        //   unitPurchased: "Grams",
        //   quantityUsed: 12,
        //   perUnit: 0,
        //   usedCost: 20
        // }
      ]
      // totalCost: 0,
      // marginPercent: 0,
      // markUpAmount: 0,
      // menuPrice: 0
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange = (e, i) => {
    console.log("1", e.target);
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
    e.preventDefault();
    this.setState({
      showStep: "showIngred",
      bgColor: "#ffffff"
    });
    const { businessType } = this.state;
    if (businessType === "Cafe") {
      this.setState(prevState => ({
        ingredientDetails: [
          ...prevState.ingredientDetails,
          {
            ingredient: "Oil"
          },
          {
            ingredient: "Eggs"
          }
        ]
      }));
    }
    if (businessType === "Bar") {
      this.setState(prevState => ({
        ingredientDetails: [
          ...prevState.ingredientDetails,
          {
            ingredient: "Lime"
          },
          {
            ingredient: "Vodka"
          }
        ]
      }));
    }
    if (businessType === "Restaurant") {
      this.setState(prevState => ({
        ingredientDetails: [
          ...prevState.ingredientDetails,
          {
            ingredient: "Garlic"
          },
          {
            ingredient: "Onion"
          }
        ]
      }));
    }
    if (businessType === "Food Retail") {
      this.setState(prevState => ({
        ingredientDetails: [
          ...prevState.ingredientDetails,
          {
            ingredient: "Plain Flour"
          }
        ]
      }));
    }
    if (businessType === "Brewery") {
      this.setState(prevState => ({
        ingredientDetails: [
          ...prevState.ingredientDetails,
          {
            ingredient: "Yeast"
          }
        ]
      }));
    }

    window.scrollTo(0, this.scrollPosition);
  };
  handleIngred = e => {
    // e.preventDefault();
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
          purchasePrice: "",
          quantityPurchased: "",
          unitPurchased: "",
          quantityUsed: "",
          perUnit: "",
          usedCost: ""
        }
      ]
    }));
  };
  handleRemoveIngredient = e => {
    e.preventDefault();
    this.setState({
      ingredientDetails: this.state.ingredientDetails.slice(0, -1)
    });
  };
  onClickBack = e => {
    e.preventDefault();
    this.setState({
      showStep: "showIngred"
    });
  };
  onClickBackHome = e => {
    e.preventDefault();
    this.setState({
      showStep: "showSignIn"
    });
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
    const { Option } = Select;
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
            appData={this.state}
            handleChange={this.handleChange}
            handleSignIn={this.handleSignIn}
          />
        );
      case "showIngred":
        return (
          <Fragment>
            <form onSubmit={this.handleSummary}>
              <Header className={this.state.showStep} />

              <Row className="calc-wrap">
                <Col xs={{ span: 24 }} md={{ span: 12, offset: 6 }}>
                  <h3>Add your ingredients</h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Facilisi morbi eget tincidunt integer amet neque.
                  </p>
                  <Collapse
                    defaultActiveKey={[this.state.ingredientDetails.length - 1]}
                    activeKey={[this.state.ingredientDetails.length - 1]}
                    expandIconPosition="right"
                    accordion="false"
                  >
                    {console.log("open", this.state.ingredientDetails.length)}

                    {this.state.ingredientDetails.map((ingredientDetail, i) => (
                      <Panel
                        header={`Ingredient: ${ingredientDetail.ingredient}`}
                        key={i}
                        className={[i]}
                      >
                        <Fragment>
                          <div className="ingredientDetails">
                            <Input
                              name="ingredient"
                              addonBefore="Ingredient"
                              type="text"
                              placeholder="E.g. Chicken Breast"
                              value={ingredientDetail.ingredient}
                              onChange={e => this.handleChange(e, i)}
                            />
                            <Row gutter={[12, 12]}>
                              <Col span={12}>
                                <Input
                                  name="quantityPurchased"
                                  addonBefore="Purchase Quantity"
                                  type="number"
                                  placeholder="0"
                                  value={ingredientDetail.quantityPurchased}
                                  onChange={e => this.handleChange(e, i)}
                                />
                              </Col>
                              <Col span={12}>
                                <label>Units</label>
                                <select
                                  name="unitPurchased"
                                  style={{ width: "100%" }}
                                  value={ingredientDetail.unitPurchased}
                                  onChange={e => this.handleChange(e, i)}
                                  className="unitPurchased"
                                  // labelInValue="true"
                                >
                                  <option value="" disabled selected>
                                    Choose unit purchased
                                  </option>
                                  <option value="Units">Units</option>
                                  <option value="grams">Grams</option>
                                  <option value="Kilograms">Kilograms</option>
                                  <option value="Millilitres">
                                    Millilitres
                                  </option>
                                  <option value="Litres">Litres</option>
                                </select>
                                {/* <Radio.Group
                                name="unitPurchased"
                                value={ingredientDetail.unitPurchased}
                                onChange={e => this.handleChange(e, i)}
                                className="unitPurchased"
                              >
                                <Radio.Button value="Units" style={radioStyle}>
                                  Unit
                                </Radio.Button>
                                <Radio.Button value="Grams" style={radioStyle}>
                                  Grams
                                </Radio.Button>
                                <Radio.Button
                                  value="Kilograms"
                                  style={radioStyle}
                                >
                                  Kilograms
                                </Radio.Button>
                                <Radio.Button
                                  value="Millilitres"
                                  style={radioStyle}
                                >
                                  Millilitres
                                </Radio.Button>
                                <Radio.Button value="Litres" style={radioStyle}>
                                  Litres
                                </Radio.Button>
                              </Radio.Group> */}
                              </Col>
                            </Row>
                            <Input
                              name="purchasePrice"
                              addonBefore="Purchase Price"
                              type="number"
                              prefix="$"
                              placeholder="0.00"
                              value={ingredientDetail.purchasePrice}
                              onChange={e => this.handleChange(e, i)}
                            />

                            <Input
                              name="quantityUsed"
                              addonBefore={`${
                                ingredientDetail.unitPurchased
                              } Used`}
                              type="number"
                              placeholder={ingredientDetail.unitPurchased}
                              value={ingredientDetail.quantityUsed}
                              onChange={e => this.handleChange(e, i)}
                            />
                            {/* <label>Ingredient Cost</label>
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
                          /> */}
                            <hr />
                            <Button
                              onClick={this.handleRemoveIngredient}
                              text="Remove ingredient"
                              color="bg-grey"
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
              </Row>

              {/* <Button text="View Margins & Pricing" color="bg-orange-light" /> */}

              {/* <IngredientList
                          appData={this.state}
              handleAddIngredient={this.handleAddIngredient}
              // ingredientDetails={this.state.ingredientDetails}
              handleIngred={this.handleIngred}
              handleChange={this.handleChange}
            /> */}
              {/* <Button
                onClick={this.onClickBackHome}
                text="Back to calculator"
                color="bg-grey"
              /> */}
              <MarginPricing
                appData={this.state}
                handleChange={this.handleChange}
                onMarginChange={this.onMarginChange}
                handleMargin={this.handleMargin}
              />

              <Summary
                appData={this.state}
                handleChange={this.handleChange}
                handleSummary={this.handleSummary}
              />
            </form>
          </Fragment>
        );
      // case "showMargin":
      //   return (
      //     <MarginPricing
      //       appData={this.state}
      //       handleChange={this.handleChange}
      //       onMarginChange={this.onMarginChange}
      //       handleMargin={this.handleMargin}
      //     />
      //   );
      // case "showSummary":
      //   return (
      //     <Summary
      //       appData={this.state}
      //       handleChange={this.handleChange}
      //       handleSummary={this.handleSummary}
      //     />
      //   );
      case "showEmail":
        return (
          <Email
            appData={this.state}
            handleChange={this.handleChange}
            handleEmail={this.handleEmail}
            onClickBack={this.onClickBack}
          />
        );
      default:
        return (
          <SignIn
            appData={this.state}
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
        {/* <State appData={this.state} /> */}
      </Fragment>
    );
  }
}

export default Form;
