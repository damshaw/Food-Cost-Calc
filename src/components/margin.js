import React from "react";
import { Slider, InputNumber, Select, Col, Row } from "antd";
import Header from "../components/header";
import Footer from "../components/footer";
import NumberFormat from "react-number-format";
const marks = {
  0: {
    style: {
      color: "#b0b0b0"
    },
    label: <strong>0%</strong>
  },
  100: "100%",
  200: "200%",
  300: "300%",
  400: {
    style: {
      color: "#b0b0b0"
    },
    label: <strong>400%</strong>
  }
};

function MarginPricing(props) {
  return (
    <Row className="margin-wrap">
      <Col xs={{ span: 24 }} md={{ span: 12, offset: 6 }}>
        <h3>Set Margins & Pricing</h3>
        <p>
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
          nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
          reprehenderit.
        </p>
        {/* <form onSubmit={props.handleMargin}> */}

        <label>Total Ingredients Cost</label>
        <NumberFormat
          value={props.appData.totalCost}
          displayType={"text"}
          decimalScale={2}
          thousandSeparator={true}
          prefix={"$"}
          style={{ width: "100%" }}
          renderText={value => (
            <div className="price-display bg-grey-dark total-cost">{value}</div>
          )}
        />
        {/* <InputNumber
        defaultValue={0}
        value={props.appData.totalCost}
        formatter={value => `$ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
        parser={value => value.replace(/\$\s?|(,*)/g, "")}
        min={0}
        step={0.05}
        style={{ width: "100%" }}
        name="totalCost"
        onChange={props.handleChange}
        color="bg-grey"
      /> */}
        <Row gutter={[12, 12]}>
          <Col span={12}>
            <label>Markup Percent</label>
            <NumberFormat
              value={props.appData.marginPercent}
              displayType={"text"}
              suffix={"%"}
              style={{ width: "100%", borderColor: "transparent" }}
              className="price-display bg-white"
              name="marginPercent"
            />
          </Col>
          <Col span={12}>
            <label>Markup Amount</label>
            <NumberFormat
              value={props.appData.markUpAmount}
              displayType={"text"}
              decimalScale={2}
              thousandSeparator={true}
              prefix={"$"}
              renderText={value => (
                <div className="price-display bg-white ">{value}</div>
              )}
            />
          </Col>
        </Row>
        <Slider
          defaultValue={100}
          min={0}
          max={400}
          marks={marks}
          name="marginPercent"
          value={
            typeof props.appData.marginPercent === "number"
              ? props.appData.marginPercent
              : 100
          }
          onChange={props.onMarginChange}
        />
        {/* <InputNumber
        defaultValue={0}
        value={props.appData.markUpAmount}
        formatter={value => `$ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
        parser={value => value.replace(/\$\s?|(,*)/g, "")}
        min={0}
        step={0.05}
        name="markUpAmount"
        style={{ width: "100%" }}
        onChange={props.handleChange}
      /> */}
        <label>Recommended Menu Price</label>
        <NumberFormat
          value={props.appData.menuPrice}
          displayType={"text"}
          decimalScale={2}
          thousandSeparator={true}
          prefix={"$"}
          style={{ width: "100%" }}
          renderText={value => (
            <div className="price-display bg-grey menu-price">{value}</div>
          )}
        />
        {/* <InputNumber
        defaultValue={0}
        value={props.appData.menuPrice}
        formatter={value => `$ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
        parser={value => value.replace(/\$\s?|(,*)/g, "")}
        min={0}
        step={0.05}
        name="menuPrice"
        style={{ width: "100%" }}
        onChange={props.handleChange}
      /> */}
        {/* <Button text="View Summary" color="bg-green" /> */}
        {/* </form> */}
      </Col>
    </Row>
  );
}

export default MarginPricing;
