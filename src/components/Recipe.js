import SmallSubtitle from "./SmallSubtitle";
import Summary from "./Summary";
import Image from "./Image";
import ActionButtons from "./ActionButtons";

export default function Recipe({id, recipe, extraRecipeData}) {
  return(
    <div id={id}>
        <SmallSubtitle text={recipe?.title} />
        <Image src={recipe?.image} alt="recipe image" />
        <ActionButtons recipe={extraRecipeData} />
        <SmallSubtitle text="Summary" />
        <Summary recipe={extraRecipeData} />
        <SmallSubtitle text="Servings" />
        <p>{extraRecipeData?.servings}</p>
        <SmallSubtitle text="Ready In" />
        <p>{extraRecipeData?.readyInMinutes} minutes</p>
    </div>
  );
}