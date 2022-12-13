import { useState, useEffect } from "react";
import "./ViewFavoritesPage.css"
import NavigationButton from "./components/NavigationButton";

  const ViewFavoritesPage = (props) => {
    return (
      <div>
        <h1>Hi these are your favs</h1>
        <NavigationButton className="nav-button"/>
      </div>
    );
  };
  
  export default ViewFavoritesPage;
  