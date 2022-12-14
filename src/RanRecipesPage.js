import {useState, useEffect} from "react";
import "./RanRecipesPage.css"
import NavigationButton from "./components/NavigationButton";
import RandomRecipeContainer from "./components/RandomRecipeContainer";

const RanRecipesPage = (props) => {
  const [data, setData] = useState("");

  useEffect(() => {
    const url = `https://api.spoonacular.com/recipes/random?apiKey=a54ce35c9f574393bbadc18f06529cf4&number=3`;
    console.log(url);
    fetch(url)
      .then((r) => r.json())
      .then((r) => setData(r))
      .catch((e) => setData(e));
  }, []);

  const firstRecipe = data?.recipes?.[0];
  const secondRecipe = data?.recipes?.[1];
  const thirdRecipe = data?.recipes?.[2];
  return (
    <div id="content-container">
      <header id="rand-recipe-header">Random Recipes Generator</header>
      <br />
      <div id="recipes-container">
        <RandomRecipeContainer recipe={firstRecipe} />
        <RandomRecipeContainer recipe={secondRecipe} />
        <RandomRecipeContainer recipe={thirdRecipe} />
      </div> 
      <NavigationButton className="nav-button"/>
    </div>
  );
};

export default RanRecipesPage;