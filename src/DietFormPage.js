import React from "react";
import "./DietFormPage.css";
import Form from "./Form.js";
import NavigationButton from "./components/NavigationButton";
import SearchButton from "./components/SearchButton";

const DietForm = (props) => {
  return (
    <div>
      <Form />
      <NavigationButton className="nav-button"/>
      <SearchButton className="search-button" />
    </div>
  );
};

export default DietForm;
