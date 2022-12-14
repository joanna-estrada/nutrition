import {useState, useEffect} from "react";
import Recipe from "./Recipe";

export default function RecipeProcessor({ data }) {
  const firstRecipe = data?.[0];
  const secondRecipe = data?.[1];
  const thirdRecipe = data?.[2];
  const fourthRecipe = data?.[3];

  const [firstRecipeData, setFirstRecipeData] = useState("");
  const [secondRecipeData, setSecondRecipeData] = useState("");
  const [thirdRecipeData, setThirdRecipeData] = useState("");
  const [fourthRecipeData, setFourthRecipeData] = useState("");

  useEffect(() => {
    const firstRecipeUrl = `https://api.spoonacular.com/recipes/${data?.[0]?.id}/information?apiKey=43dd31b79bdb404eacf941c2cdf9e291`;
    const secondRecipeUrl = `https://api.spoonacular.com/recipes/${data?.[1]?.id}/information?apiKey=43dd31b79bdb404eacf941c2cdf9e291`;
    const thirdRecipeUrl = `https://api.spoonacular.com/recipes/${data?.[2]?.id}/information?apiKey=43dd31b79bdb404eacf941c2cdf9e291`;
    const fourthRecipeUrl = `https://api.spoonacular.com/recipes/${data?.[0]?.id}/information?apiKey=43dd31b79bdb404eacf941c2cdf9e291`;

    fetch(firstRecipeUrl)
      .then((r) => r.json())
      .then((r) => setFirstRecipeData(r))
      .catch((e) => setFirstRecipeData(e));

    fetch(secondRecipeUrl)
      .then((r) => r.json())
      .then((r) => setSecondRecipeData(r))
      .catch((e) => setSecondRecipeData(e));

    fetch(thirdRecipeUrl)
      .then((r) => r.json())
      .then((r) => setThirdRecipeData(r))
      .catch((e) => setThirdRecipeData(e));

    fetch(fourthRecipeUrl)
      .then((r) => r.json())
      .then((r) => setFourthRecipeData(r))
      .catch((e) => setFourthRecipeData(e));

      // eslint-disable-next-line
  }, []);

  return (
    <div className="recipe-generator">
      {firstRecipe && <Recipe id="recipe1" recipe={firstRecipe} extraRecipeData={firstRecipeData} />}
      {secondRecipe && <Recipe id="recipe2" recipe={secondRecipe} extraRecipeData={secondRecipeData} />}
      {thirdRecipe && <Recipe id="recipe3" recipe={thirdRecipe} extraRecipeData={thirdRecipeData} />}
      {fourthRecipe && <Recipe id="recipe4" recipe={fourthRecipe} extraRecipeData={fourthRecipeData} />}
    </div>
  );
}