import Subtitle from "./Subtitle";
import Image from "./Image"
import Summary from "./Summary";
import SmallSubtitle from "./SmallSubtitle";
import Warning from "./Warning";
import ActionButtons from "./ActionButtons";
import NutritionLabel from "./NutritionLabel";

export default function RandomRecipeContainer({recipe}){
    return(
      <div className="rand-container">
          <Subtitle text={recipe?.title}/>
          <Image src={recipe?.image} alt="recipe image"/>
          <ActionButtons recipe={recipe}/>
          <SmallSubtitle text="Summary" />
          <Summary recipe={recipe} />
          <Warning />
          <SmallSubtitle text="Servings" />
          <p>{recipe?.servings}</p>
          <SmallSubtitle text="Ready In" />
          <p>{recipe?.readyInMinutes} minutes</p>
          <SmallSubtitle text="Nutrition Label" />
          <NutritionLabel recipeId={recipe?.id} />
        </div>
    );
}