import Image from "./Image";
export default function NutritionLabel({recipeId}){
    return(
        <Image src={`https://api.spoonacular.com/recipes/${recipeId}/nutritionLabel.png?apiKey=a54ce35c9f574393bbadc18f06529cf4`} alt="nutrition label" />
    );
}