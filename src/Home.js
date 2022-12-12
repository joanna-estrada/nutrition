import "./Home.css";
import React from "react";
import { useNavigate } from "react-router-dom";

import { SignIn, SignOut, useAuthentication } from "./services/authService";

export default function Home(props) {
  const navigate = useNavigate();
  const user = useAuthentication();

  return (
    <div className="Home">
      <header className="Home-header">
        <h1>Nutrition App</h1>
        <p>Click a button to start!</p>
        {!user ? <SignIn /> : <SignOut />}
        <hr />

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
