import "./Home.css";
import React from "react";
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom";
import DietForm from "./DietFormPage";
// import RecipesPage from "./RecipesPage";
import RanRecipesPage from "./RanRecipesPage";
import authService, {
  SignIn,
  SignOut,
  useAuthentication,
} from "./services/authService";

export default function Home(props) {
  const navigate = useNavigate();
  const user = useAuthentication();

  return (
    <div className="Home">
      <header className="Home-top">
        Nutrition
        {user &&
        <button
            className="nav-button"
            onClick={() => navigate("/viewFavorites")}
          >
            View Favorites 
          </button>}
        {!user ? <SignIn /> : <SignOut />}
      </header>

      <header className="Home-header">
        <h1>Nutrition App</h1>
        <p>Click a button to start!</p>

        {/* Buttons */}
        <div id="intro-buttons">
          <button className="nav-button" onClick={() => navigate("/dietForm")}>
            Go to Diet Form
          </button>
          <button
            className="nav-button"
            onClick={() => navigate("/ranRecipes")}
          >
            Get a Random Recipe
          </button>
        </div>
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
}
