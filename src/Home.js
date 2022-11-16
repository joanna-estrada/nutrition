import React from "react";
import { useNavigate } from "react-router-dom";

const Home = (props) => {
  const navigate = useNavigate();

  return (
    <>
      <h1>Nutrition App</h1>
      <p>Click a button to start!</p>
      <hr />

      {/* Button */}
      <p>
        <button onClick={() => navigate("/dietForm")}>Go to Diet Form</button>
        <button onClick={() => navigate("/recipes")}>Go to Recipes</button>
      </p>
    </>
  );
};

export default Home;