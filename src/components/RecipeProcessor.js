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
    <div className="recipe-generator">
      <div id="recipe1">
        <subtitle>{firstRecipe.title}</subtitle>
        <img src={firstRecipe.image}></img>
        <br/>
        <subtitle>Summary</subtitle>
        <br/>
        <p dangerouslySetInnerHTML={{__html : firstRecipeData.summary}}/>
        <br/>
        <subtitle>Servings</subtitle>
        <br/>
        <p>{firstRecipeData.servings}</p>
        <br/>
        <subtitle>Ready In</subtitle>
        <br/>
        <p>{firstRecipeData.readyInMinutes} minutes</p>
      </div>

      <div id="recipe2">
        <subtitle>{secondRecipe.title}</subtitle>
        <img src={secondRecipe.image}></img>
        <br/>
        <subtitle>Summary</subtitle>
        <br/>
        <p dangerouslySetInnerHTML={{__html : secondRecipeData.summary}}/>
        <br/>
        <subtitle>Servings</subtitle>
        <br/>
        <p>{secondRecipeData.servings}</p>
        <br/>
        <subtitle>Ready In</subtitle>
        <br/>
        <p>{secondRecipeData.readyInMinutes} minutes</p>
      </div>

      <div id="recipe3">
        <subtitle>{thirdRecipe.title}</subtitle>
        <img src={thirdRecipe.image}></img>
        <br/>
        <subtitle>Summary</subtitle>
        <br/>
        <p dangerouslySetInnerHTML={{__html : thirdRecipeData.summary}}/>
        <br/>
        <subtitle>Servings</subtitle>
        <br/>
        <p>{thirdRecipeData.servings}</p>
        <br/>
        <subtitle>Ready In</subtitle>
        <br/>
        <p>{thirdRecipeData.readyInMinutes} minutes</p>
      </div>
      
      <div id="recipe4">
        <subtitle>{fourthRecipe.title}</subtitle>
        <img src={fourthRecipe.image}></img>
        <br/>
        <subtitle>Summary</subtitle>
        <br/>
        <p dangerouslySetInnerHTML={{__html : fourthRecipeData.summary}}/>
        <br/>
        <subtitle>Servings</subtitle>
        <br/>
        <p>{fourthRecipeData.servings}</p>
        <br/>
        <subtitle>Ready In</subtitle>
        <br/>
        <p>{fourthRecipeData.readyInMinutes} minutes</p>
      </div>
    </div>
  );
}

{/* <div>
        {data}
      </div> */}
      {/* <div>
        {data?.map(data => {
          console.log(data)
          return <RecipeCard recipeId={data.Id} />
        })}
      </div> */}