import "./Home.css";
import React from "react";
import { useNavigate } from "react-router-dom";
import DietForm from "./DietFormPage";
import RecipesPage from "./RecipesPage";
import RanRecipesPage from "./RanRecipesPage";
import authService, {
  SignIn,
  SignOut,
  useAuthentication,
} from "./services/authService";

export default function Home = (props) => {
  const navigate = useNavigate();
  const user = useAuthentication();

  return (
    <div className="Home">
      <header className="Home-header">
        <h1>Nutrition App</h1>
        <p>Click a button to start!</p>
        {!user ? <SignIn /> : <SignOut />}
        <hr />

<<<<<<< HEAD
        {!user ? "" : <DietForm props={props} />}
        {!user ? "" : <RecipesPage props={props} />}
        {!user ? "" : <RanRecipesPage data={props} />}

        {/* Buttons */}
        <p>
          <button onClick={() => navigate("/authService")}>Login</button>
          <button onClick={() => navigate("/dietForm")}>Go to Diet Form</button>
          <button onClick={() => navigate("/recipes")}>Go to Recipes</button>
          <button onClick={() => navigate("/ranRecipes")}>
            Get a Random Recipe
          </button>
        </p>
        <a
=======
      {/* Buttons */}
      <div id="intro-buttons">
        <button className="nav-button" onClick={() => navigate("/dietForm")}>Go to Diet Form</button>
        <button className="nav-button" onClick={() => navigate("/ranRecipes")}>Get a Random Recipe</button>
      </div>
      <a
>>>>>>> a1bcb7b5a186593ae80a53ebf993bc39d6f5cb64
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
