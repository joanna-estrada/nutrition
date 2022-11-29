import { useNavigate } from "react-router-dom";
import {useState, useEffect} from "react";
import "./RanRecipesPage.css"
import NutritionLabel from "./NutritionLabel";

const RanRecipesPage = (props) => {
  const [data, setData] = useState("");

  useEffect(() => {
    const url = `https://api.spoonacular.com/recipes/random?apiKey=43dd31b79bdb404eacf941c2cdf9e291&number=3`;
    console.log(url);
    fetch(url)
      .then((r) => r.json())
      .then((r) => setData(r))
      .catch((e) => setData(e));
  }, []);

  const firstRecipeSummary = data?.recipes?.[0]?.summary;
  const secondRecipeSummary = data?.recipes?.[1]?.summary;
  const thirdRecipeSummary = data?.recipes?.[2]?.summary;
  const navigate = useNavigate();
  return (
    <div id="content-container">
      <header id="rand-recipe-header">Random Recipes Generator</header>
      <br />
      <div id="recipes-container">
        <div className="rand-container">
          <subtitle>{data?.recipes?.[0]?.title}</subtitle>
          <img src={data?.recipes?.[0]?.image}></img>
          <subtitle>Summary</subtitle>
          <div className="summary" dangerouslySetInnerHTML={{__html : firstRecipeSummary}}/>
          <subtitle>Servings</subtitle>
          <p>{data?.recipes?.[0]?.servings}</p>
          <subtitle>Ready In</subtitle>
          <p>{data?.recipes?.[0]?.readyInMinutes} minutes</p>
          <subtitle>Nutrition Label</subtitle>
          <img src={`https://api.spoonacular.com/recipes/${data?.recipes?.[0]?.id}/nutritionLabel.png?apiKey=43dd31b79bdb404eacf941c2cdf9e291`}></img>
          <button onClick={data?.recipes?.[0]?.sourceUrl} className="info-button">Go to Recipe</button>
        </div>
        <div className="rand-container">
          <subtitle>{data?.recipes?.[1]?.title}</subtitle>
          <img src={data?.recipes?.[1]?.image}></img>
          <subtitle>Summary</subtitle>
          <div className="summary" dangerouslySetInnerHTML={{__html : secondRecipeSummary}}/>
          <subtitle>Servings</subtitle>
          <p>{data?.recipes?.[1]?.servings}</p>
          <subtitle>Ready In</subtitle>
          <p>{data?.recipes?.[1]?.readyInMinutes} minutes</p>
          <subtitle>Nutrition Label</subtitle>
          <img src={`https://api.spoonacular.com/recipes/${data?.recipes?.[1]?.id}/nutritionLabel.png?apiKey=43dd31b79bdb404eacf941c2cdf9e291`}></img>
          <button onClick={data?.recipes?.[1]?.sourceUrl} className="info-button">Go to Recipe</button>
        </div>
        <div className="rand-container">
          <subtitle>{data?.recipes?.[2]?.title}</subtitle>
          <img src={data?.recipes?.[2]?.image}></img>
          <subtitle>Summary</subtitle>
          <div className="summary" dangerouslySetInnerHTML={{__html : thirdRecipeSummary}}/>
          <subtitle>Servings</subtitle>
          <p>{data?.recipes?.[2]?.servings}</p>
          <subtitle>Ready In</subtitle>
          <p>{data?.recipes?.[2]?.readyInMinutes} minutes</p>
          <subtitle>Nutrition Label</subtitle>
          <img src={`https://api.spoonacular.com/recipes/${data?.recipes?.[2]?.id}/nutritionLabel.png?apiKey=43dd31b79bdb404eacf941c2cdf9e291`}></img>
          <button onClick={data?.recipes?.[2]?.sourceUrl} className="info-button">Go to Recipe</button>
        </div>
      </div>
      <button onClick={() => navigate(-1)}>Go Back</button>

    </div>
  );
};

export default RanRecipesPage;