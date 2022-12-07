import {useState, useEffect} from "react";
import RecipeCard from "./RecipeCard";

export default function RecipeProcessor({ data }) {
  // console.log(data)
  const firstRecipe = data?.[0];
  const secondRecipe = data?.[1];
  const thirdRecipe = data?.[2];
  const fourthRecipe = data?.[3];
  const fifthRecipe = data?.[4];

  const [firstRecipeData, setFirstRecipeData] = useState("");
  const [secondRecipeData, setSecondRecipeData] = useState("");
  const [thirdRecipeData, setThirdRecipeData] = useState("");
  const [fourthRecipeData, setFourthRecipeData] = useState("");
  const [fifthRecipeData, setFifthRecipeData] = useState("");

  useEffect(() => {
    const firstRecipeUrl = `https://api.spoonacular.com/recipes/${data?.[0]?.id}/information?apiKey=43dd31b79bdb404eacf941c2cdf9e291`;
    const secondRecipeUrl = `https://api.spoonacular.com/recipes/${data?.[1]?.id}/information?apiKey=43dd31b79bdb404eacf941c2cdf9e291`;
    const thirdRecipeUrl = `https://api.spoonacular.com/recipes/${data?.[2]?.id}/information?apiKey=43dd31b79bdb404eacf941c2cdf9e291`;
    const fourthRecipeUrl = `https://api.spoonacular.com/recipes/${data?.[0]?.id}/information?apiKey=43dd31b79bdb404eacf941c2cdf9e291`;
    const fifthRecipeUrl = `https://api.spoonacular.com/recipes/${data?.[0]?.id}/information?apiKey=43dd31b79bdb404eacf941c2cdf9e291`;

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

    fetch(fifthRecipeUrl)
      .then((r) => r.json())
      .then((r) => setFifthRecipeData(r))
      .catch((e) => setFifthRecipeData(e));
  }, []);



  return (
    <div className="recipe-card">
      <subtitle>{data?.[0]?.title}</subtitle>
      <img src={data?.[0]?.image}></img>
      <br/>
      <subtitle>Summary</subtitle>
      <br/>
      {firstRecipeData.summary}
      <br/>
      <subtitle>Servings</subtitle>
      <br/>
      {firstRecipeData.servings}
      <br/>
      <subtitle>Ready In</subtitle>
      <br/>
      {firstRecipeData.readyInMinutes}

      {/* <div>
        {data}
      </div> */}
      {/* <div>
        {data?.map(data => {
          console.log(data)
          return <RecipeCard recipeId={data.Id} />
        })}
      </div> */}
    </div>
  );
}