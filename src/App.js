<<<<<<< HEAD
import "./App.css";
=======
import './App.css';
>>>>>>> a1bcb7b5a186593ae80a53ebf993bc39d6f5cb64
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import { Routes, Route, useNavigate } from "react-router-dom";

import Home from "./Home";
import DietFormPage from "./DietFormPage";
<<<<<<< HEAD
import RecipesPage from "./RecipesPage";
import RanRecipesPage from "./RanRecipesPage";
import authService, {
  SignIn,
  SignOut,
  useAuthentication,
} from "./services/authService";
=======
import RanRecipesPage from './RanRecipesPage';
>>>>>>> a1bcb7b5a186593ae80a53ebf993bc39d6f5cb64

const App = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<authService />} />
          <Route path="/dietForm" element={<DietFormPage />} />

          <Route path="/ranRecipes" element={<RanRecipesPage />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
