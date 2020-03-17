import React from "react";
import { useForm } from "react-hubspot";
import Button from "../components/button";
function SubmitEmail(props) {
  // const { data, isLoading, isError, handleSubmit } = useForm({
  //   portalId: "6808090",
  //   formId: "301461ae-8d34-4089-b290-54772e4fc182"
  // });
  // console.log("data", props.data);
  // console.log("isLoading", props.isLoading);
  // console.log("isError", props.isError);
  // console.log("handleSubmit", props.handleSubmit);
  function SubmitHsEmail(e) {
    e.preventDefault();

    // Create the new request
    let xhr = new XMLHttpRequest();
    let url =
      "https://api.hsforms.com/submissions/v3/integration/submit/6808090/301461ae-8d34-4089-b290-54772e4fc182/";
    // Example request JSON:
    let data = {
      // submittedAt: "1517927174000",

      fields: [
        {
          name: "email",
          value: props.appData.email
        },
        {
          name: "type_of_business",
          value: props.appData.businessType
        }
      ],
      context: {
        // hutk: ":hubspotutk", // include this parameter and set it to the hubspotutk cookie value to enable cookie tracking on your submission
        pageName: "Food Cost Calculator"
      }
    };

    let final_data = JSON.stringify(data);

    xhr.open("POST", url);
    xhr.setRequestHeader("Content-Type", "application/json");

    xhr.onreadystatechange = function() {
      if (xhr.readyState === 4 && xhr.status === 200) {
        console.log("email", xhr.responseText); // Returns a 200 response if the submission is successful.
      } else if (xhr.readyState === 4 && xhr.status === 400) {
        console.log("email", xhr.responseText); // Returns a 400 error the submission is rejected.
      } else if (xhr.readyState === 4 && xhr.status === 403) {
        console.log("email", xhr.responseText); // Returns a 403 error if the portal isn't allowed to post submissions.
      } else if (xhr.readyState === 4 && xhr.status === 404) {
        console.log("email", xhr.responseText); //Returns a 404 error if the formGuid isn't found
      }
    };

    // Sends the request
    console.log("final_data", final_data);
    xhr.send(final_data);
  }

  return (
    <form onSubmit={SubmitHsEmail}>
      <input hidden name="email" type="text" value={props.appData.email} />
      <Button type="submit" text="Get Summary" color="bg-green" />
    </form>
  );
}
export default SubmitEmail;
