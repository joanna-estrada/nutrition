import './Home.css';
import React from "react";
import { useNavigate } from "react-router-dom";

const Home = (props) => {
  const navigate = useNavigate();

  return (
    <div className = "Home">
    <header className="Home-header">
      <h1>Nutrition App</h1>
      <p>Click a button to start!</p>
      <hr />

      {/* Buttons */}
      <p>
        <button onClick={() => navigate("/dietForm")}>Go to Diet Form</button>
        <button onClick={() => navigate("/recipes")}>Go to Recipes</button>
        <button onClick={() => navigate("/recipes")}>Get a Random Recipe</button>
      </p>
      <a
          className="App-link"
          href="https://github.com/joanna-estrada/nutrition"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub
        </a>
      </header>
      </div>
  );
};

export default Home;