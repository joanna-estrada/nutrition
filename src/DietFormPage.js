import React from "react";
import "./DietFormPage.css";
import Form from "./Form.js";
import NavigationButton from "./components/NavigationButton";

const DietForm = (props) => {
  return (
    <div>
      <Form />
      <NavigationButton />
    </div>
  );
};

export default DietForm;
