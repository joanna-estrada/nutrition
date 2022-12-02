export default function NutritionLabel({ recipeId }) {
  return (
    <img src={`https://api.spoonacular.com/recipes/${recipeId}/nutritionLabel.png?apiKey=43dd31b79bdb404eacf941c2cdf9e291`}></img>
  );
}