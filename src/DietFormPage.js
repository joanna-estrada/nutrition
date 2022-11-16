import React from "react";
import { useNavigate } from "react-router-dom";

const DietForm = (props) => {
  const navigate = useNavigate();
  return (
    <>
      <h1>Diet Form Page</h1>
      <br />
      <button onClick={() => navigate(-1)}>Go Back</button>
    </>
  );
};

export default DietForm;