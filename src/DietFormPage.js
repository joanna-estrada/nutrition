import React from "react";
import "./DietFormPage.css";
import Title from "./Title.js";
import Form from "./Form.js";
import { useNavigate } from "react-router-dom";

const DietForm = (props) => {
  const navigate = useNavigate();
  return (
    <div>
      <Title id="centeredText" text="Diet Form Page" />
      <Form />
      <button onClick={() => navigate(-1)}>Go Back</button>
    </div>
  );
};

export default DietForm;
