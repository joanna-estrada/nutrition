import Checkbox from "./components/Checkbox.js";
import RadioButton from "./components/RadioButton.js";
import NumberInput from "./components/NumberInput.js"
import Title from "./components/Title.js";
import TextField from "./components/TextField.js";
import './DietFormPage.css';
import { useState } from "react";

export default function Form({ action }) {
  const [calories, setCalories] = useState(200);
  const [readyTime, setReadyTime] = useState(200);
  const [carbs, setCarbs] = useState(200);
  const [text, setText] = useState("");
  const [protein, setProtein] = useState(200);
  const [data, setData] = useState(null);
  
  function submit(e) {
    e.preventDefault();
    const url = `https://api.spoonacular.com/recipes/complexSearch?apiKey=43dd31b79bdb404eacf941c2cdf9e291&maxCalories=${calories}&titleMatch=${text}&maxReadyTime=${readyTime}&maxCarbs=${carbs}&maxProtein=${protein}`;
    console.log(url);
    fetch(url)
      .then((r) => r.json())
      .then((r) => setData(r))
      .catch((e) => setData(e));
  }

  return (
    <div>
    <form id="grid-form">
      <div id="header-component">
        <Title id="centeredText" text="Diet Form Page" />
        <p className="centered">Please enter all fields below to find recipes.</p>
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
    </form>
    <button onClick={submit}>Submit Form</button>
    <div>
      {/* Where the results go. */}
    </div>
    </div>
  );
}
