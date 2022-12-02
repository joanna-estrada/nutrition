export default function NutritionLabel(id) {
    let nutritionLabelPart = ["https://api.spoonacular.com/recipes/", id, "/nutritionLabel.png"]
  return (
    <img src={nutritionLabelPart}></img>
  );
}