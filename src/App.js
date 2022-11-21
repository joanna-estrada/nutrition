import './App.css';
//import { Routes, Route, useNavigate } from 'react-router-dom';
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./Home";
import DietFormPage from "./DietFormPage";
import RecipesPage from "./RecipesPage";
import RanRecipesPage from './RanRecipesPage';

const App = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dietForm" element={<DietFormPage />} />
          <Route path="/recipes" element={<RecipesPage />} />
          <Route path="/ranRecipes" element={<RanRecipesPage />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;

