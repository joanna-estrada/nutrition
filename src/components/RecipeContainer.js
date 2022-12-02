import Subtitle from "./Subtitle";
import Image from "./Image";
import Button from "./Button";
import Summary from "./Summary";
import Warning from "./Warning";
import NutritionLabel from "./NutritionLabel";
export default function RecipeContainer({ recipe }) {
  return (
    <div className="rand-container">
        <Subtitle text={recipe.title} />
        <Image src={recipe.image}/>
        {/* <Button className="info-button" goTo={recipe.sourceUrl} text="Go To Recipe"/>
        <Button className="favorite-button" goTo={recipe.sourceUrl} text="Save to Favorites"/>
        <Subtitle text="Summary" />
        <Summary recipe={recipe.summary}/>
        <Warning className="warning" text="Note: Some of the recipe links may not lead to a recipe because Spoonacular has removed them."/>
        <Subtitle text="Servings" />
        <p>{recipe.servings}</p>
        <Subtitle text="Ready In" />
        <p>{recipe.readyInMinutes} minutes</p>
        <Subtitle text="Nutrition Label" />
        <NutritionLabel recipeId={recipe.id}/> */}
    </div>
  );
}