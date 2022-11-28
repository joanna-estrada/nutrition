import { useNavigate } from "react-router-dom";
import {useState, useEffect} from "react";
import "./RanRecipesPage.css"

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

  const navigate = useNavigate();
  return (
    <div id="content-container">
      <header id="rand-recipe-header">Random Recipes Page</header>
      <br />
      <div id="recipes-container">
        <div className="rand-container">
          <header className="randTitle">{data?.recipes?.[0]?.title}</header>
          <p>{data?.recipes?.[0]?.sourceUrl}</p>
          <p>{data?.recipes?.[0]?.summary}</p>
          <button className="info-button">Go to Recipe</button>
        </div>
        <div className="rand-container">
          <header>{data?.recipes?.[1]?.title}</header>
          <p>{data?.recipes?.[1]?.sourceUrl}</p>
          <p>{data?.recipes?.[1]?.summary}</p>
          <button className="info-button">Go to Recipe</button>
        </div>
        <div className="rand-container">
          <header>{data?.recipes?.[2]?.title}</header>
          <p>{data?.recipes?.[2]?.sourceUrl}</p>
          <p>{data?.recipes?.[2]?.summary}</p>
          <button className="info-button">Go to Recipe</button>
        </div>
      </div>
      <button onClick={() => navigate(-1)}>Go Back</button>

    </div>
  );
};

export default RanRecipesPage;