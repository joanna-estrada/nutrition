import {useState, useEffect} from "react";

export default function RecipeCard({ recipeId }) {
  
  const [mealData, setMealData] = useState("");

  useEffect(() => {
    const url = `https://api.spoonacular.com/recipes/${recipeId}/information?apiKey=43dd31b79bdb404eacf941c2cdf9e291`
    console.log(url);
    fetch(url)
      .then((r) => r.json())
      .then((r) => setMealData(r))
      .catch((e) => setMealData(e));
  }, []);

  return (
    <div>
      {mealData.title}
    </div>
  );
}