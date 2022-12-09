import './DietFormPage.css';
import { useState } from "react";
import RecipeProcessor from "./components/RecipeProcessor.js";
import Header from "./components/Header.js";
import TextSearch from './TextSearch';
import MaxReadyTime from './components/MaxReadyTime';
import MaxCarbs from './components/MaxCarbs';
import MaxProtein from './components/MaxProtein';
import MaxCalories from './components/MaxCalories';
import SubmitButton from './components/SubmitButton';

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