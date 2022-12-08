import Title from "./components/Title.js";
import TextField from "./components/TextField.js";
import './DietFormPage.css';
import { useState } from "react";
import RecipeProcessor from "./components/RecipeProcessor.js";

export default function Form({ action }) {
  const [submitText, setSubmitText] = useState("Submit Search Query");
  const [calories, setCalories] = useState();
  const [readyTime, setReadyTime] = useState();
  const [carbs, setCarbs] = useState();
  const [text, setText] = useState("");
  const [protein, setProtein] = useState();
  const [data, setData] = useState(null);

  function submit(e) {
    e.preventDefault();
    let defaultUrl = `https://api.spoonacular.com/recipes/complexSearch?apiKey=a54ce35c9f574393bbadc18f06529cf4`;
    if(calories > 0 || !isNaN(calories)) {
      defaultUrl = defaultUrl.concat(`&maxCalories=${calories}`);
    } 
    console.log(readyTime)
    if(readyTime > 0 || !isNaN(readyTime)){
      defaultUrl = defaultUrl.concat(`&maxReadyTime=${readyTime}`);
    }

    if(carbs > 0 || !isNaN(carbs)){
      defaultUrl = defaultUrl.concat(`&maxCarbs=${carbs}`);
    }

    if(protein > 0 || !isNaN(protein)){
      defaultUrl = defaultUrl.concat(`&maxProtein=${protein}`);
    }

    if(text.trim.length > 0){
      defaultUrl = defaultUrl.concat(`&titleMatch=${text}`);
    }

    console.log(defaultUrl);
    fetch(defaultUrl)
      .then((r) => r.json())
      .then((r) => setData(r))
      .catch((e) => setData(e));

    setSubmitText("Re-Submit Form With Changes");
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
        <p className="centered">Max Ready Time</p>
        <input type="number" onChange={(e) => setReadyTime(e.target.value)} />
        {readyTime}
      </div>
      <div className="max" id="carbs">
        <p className="centered">Max Carbohydrates</p>
        <input type="number" onChange={(e) => setCarbs(e.target.value)} />
        {carbs}
      </div>
      <div className="max" id="protein">
        <p className="centered">Max Protein</p>
        <input type="number" onChange={(e) => setProtein(e.target.value)} />
        {protein}
      </div>
      <div className="max" id="cal">
        <p className="centered">Max Calories</p>
        <input type="number" onChange={(e) => setCalories(e.target.value)} />
        {calories}
      </div>
      <div id="form-button">
        <button id="submit-button" onClick={submit}>{submitText}</button>
      </div>
    </form>
    
    {data?.results && <RecipeProcessor data={data?.results} />}
    </div>
  );
}
