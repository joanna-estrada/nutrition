import './App.css';
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./Home";
import DietFormPage from "./DietFormPage";
import RanRecipesPage from './RanRecipesPage';

const App = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dietForm" element={<DietFormPage />} />

          <Route path="/ranRecipes" element={<RanRecipesPage />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;

