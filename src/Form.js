import './DietFormPage.css';
import { useState } from "react";
import RecipeProcessor from "./components/RecipeProcessor.js";
import Subtitle from "./components/Subtitle.js";
import Header from "./components/Header.js";

export default function Form() {
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
    console.log(carbs);
    console.log(carbs > 0 || !isNaN(carbs));

    if(protein > 0 || !isNaN(protein)){
      defaultUrl = defaultUrl.concat(`&maxProtein=${protein}`);
    }

    if(text.length > 0){
      defaultUrl = defaultUrl.concat(`&titleMatch=${text}`);
    }
    console.log(text.length);

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
        <Header />
        <TextSearch setText={setText}/>
        <MaxReadyTime setReadyTime={setReadyTime}/>
        <MaxCarbs setCarbs={setCarbs} />
        <MaxProtein setProtein={setProtein} />
        <MaxCalories setCalories={setCalories} />
        <SubmitButton submit={submit} submitText={submitText}/>
      </form>
      {data?.results && <RecipeProcessor data={data?.results} />}
    </div>
  );
}

function TextSearch({setText}){
  return(
  <div id="text-search">
    <Subtitle text="General Text Search" />
    <input type="text" onChange={(e) => setText(e.target.value)} />
  </div>
  );
}

function MaxReadyTime({setReadyTime}) {
  return(
    <div className="max" id="time">
      <Subtitle text="Max Ready Time (Minutes)" />
      <input type="number" onChange={(e) => setReadyTime(e.target.value)} />
    </div> 
  );
}

function MaxCarbs({setCarbs}) {
  return(
    <div className="max" id="carbs">
      <Subtitle text="Max Carbohydrates" />
      <input type="number" onChange={(e) => setCarbs(e.target.value)} />
    </div>
  );
}

function MaxProtein({setProtein}){
  return(
    <div className="max" id="protein">
      <Subtitle text="Max Protein" />
      <input type="number" onChange={(e) => setProtein(e.target.value)} />
    </div>
  );
}

function MaxCalories({setCalories}){
  return(
    <div className="max" id="cal">
      <Subtitle text="Max Calories" />
      <input type="number" onChange={(e) => setCalories(e.target.value)} />
    </div>
  );
}

function SubmitButton({submit, submitText}){
  return(
    <div id="form-button">
      <button id="submit-button" onClick={submit}>{submitText}</button>
    </div>
  );
}