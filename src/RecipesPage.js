import React from "react";
import { useNavigate } from "react-router-dom";

const RecipesPage = (props) => {
  const navigate = useNavigate();
  return (
    <>
      <h1>Recipes Page</h1>
      <br />
      <button onClick={() => navigate(-1)}>Go Back</button>
    </>
  );
};

export default RecipesPage;