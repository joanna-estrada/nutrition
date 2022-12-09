import Image from "./Image";
export default function NutritionLabel({recipeId}){
    return(
        <Image src={`https://api.spoonacular.com/recipes/${recipeId}/nutritionLabel.png?apiKey=43dd31b79bdb404eacf941c2cdf9e291`} alt="nutrition label" />
    );
}