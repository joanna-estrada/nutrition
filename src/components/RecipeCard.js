import {useState, useEffect} from "react";

export default function RecipeCard({ recipeId }) {
  
  const [mealData, setMealData] = useState("");

  useEffect(() => {
    const url = `https://api.spoonacular.com/recipes/${recipeId}/information?apiKey=a54ce35c9f574393bbadc18f06529cf4`
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