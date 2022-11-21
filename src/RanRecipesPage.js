import React from "react";
import { useNavigate } from "react-router-dom";

const RanRecipesPage = (props) => {
  const navigate = useNavigate();
  return (
    <>
      <h1>Random Recipes Page</h1>
      <br />
      <button onClick={() => navigate(-1)}>Go Back</button>
    </>
  );
};

export default RanRecipesPage;