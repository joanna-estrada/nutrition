import Checkbox from "./components/Checkbox.js";
import RadioButton from "./components/RadioButton.js";
import NumberInput from "./components/NumberInput.js"
import Title from "./components/Title.js";
import TextField from "./components/TextField.js";
import './DietFormPage.css';
import { useState } from "react";
import RecipeProcessor from "./components/RecipeProcessor.js";

export default function Form({ action }) {
  const max = 1000000000;
  const [calories, setCalories] = useState(max);
  const [readyTime, setReadyTime] = useState(max);
  const [carbs, setCarbs] = useState(max);
  const [text, setText] = useState("");
  const [protein, setProtein] = useState(max);
  const [data, setData] = useState(null);
  
  function displayRecipes() {
    if(data !== null) {
      console.log("Worked");
      console.log(data?.results?.[0].title);
      // {data.recipes?.[0].map(recipe => {
      //   return <RecipeProcessor recipeId={recipe.Id}/>
      // })}
    }
  }

  function submit(e) {
    e.preventDefault();
    let url = "";
    if(text !== "") {
      url = `https://api.spoonacular.com/recipes/complexSearch?apiKey=a54ce35c9f574393bbadc18f06529cf4&maxCalories=${calories}&titleMatch=${text}&maxReadyTime=${readyTime}&maxCarbs=${carbs}&maxProtein=${protein}`;
    } else {
      url = `https://api.spoonacular.com/recipes/complexSearch?apiKey=a54ce35c9f574393bbadc18f06529cf4&maxCalories=${calories}&maxReadyTime=${readyTime}&maxCarbs=${carbs}&maxProtein=${protein}`;
    }

    console.log(url);
    fetch(url)
      .then((r) => r.json())
      .then((r) => setData(r))
      .catch((e) => setData(e));

    // console.log(data?.results);

    // if(data !== null) {
    //   console.log("Worked");
    //   console.log(data?.results?.[0].title);
    //   console.log(data?.results?.[0].id);
    //   console.log(data?.results);
    //   console.log(data?.results?.[0]);
    //   // {data.recipes?.[0].map(recipe => {
    //   //   return <RecipeProcessor recipeId={recipe.Id}/>
    //   // })}
    // }
  }

  function handleChange(e) {
    submit(e);
    displayRecipes(e);
  }

  return (
    <div>
    <form id="grid-form">
      <div id="header-component">
        <Title id="centeredText" text="Diet Form Page" />
        <p className="centered">Please enter some fields below to find recipes.</p>
      </div>
      <div id="text-search">
        <p className="centered">General Text Search</p>
        <input type="text" onChange={(e) => setText(e.target.value)} />
        {text}
      </div>
      <div className="max" id="time">
        <label>Max Ready Time</label>
        <br/>
        <input type="number" onChange={(e) => setReadyTime(e.target.value)} />
        {readyTime}
      </div>
      <div className="max" id="carbs">
        <label>Max Carbohydrates</label>
        <br/>
        <input type="number" onChange={(e) => setCarbs(e.target.value)} />
        {carbs}
      </div>
      <div className="max" id="protein">
        <label>Max Protein</label>
        <br/>
        <input type="number" onChange={(e) => setProtein(e.target.value)} />
        {protein}
      </div>
      <div className="max" id="cal">
        <label>Max Calories</label>
        <br/>
        <input type="number" onChange={(e) => setCalories(e.target.value)} />
        {calories}
      </div>
      <div id="form-button">
        <button id="submit-button" onClick={submit}>Submit Form</button>
      </div>
    </form>
    
    {data?.results && <RecipeProcessor data={data?.results} />}
    </div>
  );
}
