import React from "react";
import "./DietFormPage.css";
import Form from "./Form.js";
import { useNavigate } from "react-router-dom";

const DietForm = (props) => {
  const navigate = useNavigate();
  return (
    <div id="grid-container">
      <Form />
      <button onClick={() => navigate(-1)}>← Go Back</button>
    </div>
  );
};

export default DietForm;
