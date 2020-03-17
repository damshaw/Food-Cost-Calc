import React from "react";
import { Switch, Route } from "react-router-dom";
import { Row, Col } from "antd";
import { useForm } from "react-hubspot";
import SubmitEmail from "./components/submitEmail";
import FoodCalc from "./pages/calcContainer";
import SignIn from "./pages/signin";
import ErrorPage from "./pages/404";
import Header from "./components/header";
import Footer from "./components/footer";
import Button from "./components/button";

function App() {
  // const { data, isLoading, isError, handleSubmit } = useForm({
  //   portalId: "6808090",
  //   formId: "301461ae-8d34-4089-b290-54772e4fc182"
  // });
  // //2d3ec618-837d-4995-9273-1a129eae1b74
  // console.log("data", data);
  // console.log("isLoading", isLoading);
  // console.log("isError", isError);
  // console.log("handleSubmit", handleSubmit);

  return (
    <div id="page">
      <FoodCalc />
    </div>
  );
}
export default App;
