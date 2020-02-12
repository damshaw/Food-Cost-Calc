import React from "react";
import { Input, Radio, Col } from "antd";

import Button from "../components/button";

function SignIn(props) {
  // const history = useHistory();

  // function handleClick() {
  //   history.push("/ingredients");
  // }
  const radioStyle = {
    height: "96px",
    lineHeight: "96px",
    display: "inline-block",
    textAlign: "center"
  };
  return (
    <Col className="signin-wrap" xs={{ span: 24 }} md={{ span: 12, offset: 6 }}>
      <div>
        <h3>Step 1: Select business type</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Facilisi
          morbi eget tincidunt integer amet neque.
        </p>
        <Radio.Group
          name="businessType"
          value={props.data.businessType}
          onChange={props.handleChange}
          className="businessType"
        >
          <Radio.Button value="cafe" style={radioStyle}>
            Cafe
          </Radio.Button>
          <Radio.Button value="bar" style={radioStyle}>
            Bar
          </Radio.Button>
          <Radio.Button value="restaurant" style={radioStyle}>
            Restaurant
          </Radio.Button>
          <Radio.Button value="foodRetailer" style={radioStyle}>
            Food Retailer
          </Radio.Button>
          <Radio.Button value="brewery" style={radioStyle}>
            Brewery
          </Radio.Button>
          <Radio.Button value="hotel" style={radioStyle}>
            Hotel
          </Radio.Button>
        </Radio.Group>
      </div>
      {/* <div>
        <h3>Step 2: Select your location</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Facilisi
          morbi eget tincidunt integer amet neque.
        </p>
        <Radio.Group
          name="location"
          value={props.data.location}
          onChange={props.handleChange}
          className="location"
        >
          <Radio.Button value="NSW" style={radioStyle}>
            NSW
          </Radio.Button>
          <Radio.Button value="VIC" style={radioStyle}>
            VIC
          </Radio.Button>
          <Radio.Button value="QLD" style={radioStyle}>
            QLD
          </Radio.Button>
          <Radio.Button value="WA" style={radioStyle}>
            WA
          </Radio.Button>
          <Radio.Button value="SA" style={radioStyle}>
            SA
          </Radio.Button>
          <Radio.Button value="TAS" style={radioStyle}>
            TAS
          </Radio.Button>
          <Radio.Button value="ACT" style={radioStyle}>
            ACT
          </Radio.Button>
          <Radio.Button value="Other" style={radioStyle}>
            Other
          </Radio.Button>
        </Radio.Group>
      </div> */}

      <div>
        <h3>Step 2: Submit your details</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Facilisi
          morbi eget tincidunt integer amet neque.
        </p>
        <form onSubmit={props.handleSignIn}>
          {/* <Input
            name="fname"
            addonBefore="First Name"
            type="text"
            defaultValue="Enter your first name"
            value={props.data.fname}
            onChange={props.handleChange}
          />
          <Input
            name="lname"
            addonBefore="Last Name"
            type="text"
            defaultValue="Enter your last name"
            value={props.data.lname}
            onChange={props.handleChange}
          /> */}
          <Input
            name="email"
            addonBefore="Email Address"
            type="email"
            placeholder="Enter your email address"
            value={props.data.email}
            onChange={props.handleChange}
          />
          <Button text="Submit" color="bg-orange-light" />
        </form>
      </div>
    </Col>
  );
}

export default SignIn;
