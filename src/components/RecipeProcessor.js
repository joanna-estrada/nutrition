import {useState, useEffect} from "react";
import SmallSubtitle from "./SmallSubtitle";
import Summary from "./Summary";
import Image from "./Image";

function Recipe({id, recipe, extraRecipeData}) {
  return(
    <div id={id}>
        <SmallSubtitle text={recipe.title} />
        <Image src={recipe.image} alt="recipe image" />
        <SmallSubtitle text="Summary" />
        <Summary recipe={extraRecipeData} />
        <SmallSubtitle text="Servings" />
        <p>{extraRecipeData.servings}</p>
        <SmallSubtitle text="Ready In" />
        <p>{extraRecipeData.readyInMinutes} minutes</p>
    </div>
  );
}

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
    const firstRecipeUrl = `https://api.spoonacular.com/recipes/${data?.[0]?.id}/information?apiKey=a54ce35c9f574393bbadc18f06529cf4`;
    const secondRecipeUrl = `https://api.spoonacular.com/recipes/${data?.[1]?.id}/information?apiKey=a54ce35c9f574393bbadc18f06529cf4`;
    const thirdRecipeUrl = `https://api.spoonacular.com/recipes/${data?.[2]?.id}/information?apiKey=a54ce35c9f574393bbadc18f06529cf4`;
    const fourthRecipeUrl = `https://api.spoonacular.com/recipes/${data?.[0]?.id}/information?apiKey=a54ce35c9f574393bbadc18f06529cf4`;

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
  }, []);

  return (
    <div className="recipe-generator">
      <Recipe id="recipe1" recipe={firstRecipe} extraRecipeData={firstRecipeData} />
      <Recipe id="recipe2" recipe={secondRecipe} extraRecipeData={secondRecipeData} />
      <Recipe id="recipe3" recipe={thirdRecipe} extraRecipeData={thirdRecipeData} />
      <Recipe id="recipe4" recipe={fourthRecipe} extraRecipeData={fourthRecipeData} />
    </div>
  );
}