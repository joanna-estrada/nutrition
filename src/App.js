import "./App.css";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import { Routes, Route, useNavigate } from "react-router-dom";

import Home from "./Home";
import DietFormPage from "./DietFormPage";
// import RecipesPage from "./RecipesPage";
import RanRecipesPage from "./RanRecipesPage";
// import authService, {
//   SignIn,
//   SignOut,
//   useAuthentication,
// } from "./services/authService";

const App = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="/login" element={<authService />} /> */}
          <Route path="/dietForm" element={<DietFormPage />} />
          <Route path="/ranRecipes" element={<RanRecipesPage />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
