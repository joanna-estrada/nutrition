import {useState, useEffect} from "react";
import RecipeCard from "./RecipeCard";

export default function RecipeProcessor({ data }) {
  console.log(data)
  return (
    <div>
      <div>
        {data}
      </div>
      <div>
        {data?.map(data => {
          return <RecipeCard recipeId={data.Id} />
        })}
      </div>
    </div>
  );
}