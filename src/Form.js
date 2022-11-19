import Checkbox from "./Checkbox.js";
import RadioButton from "./RadioButton.js";
import Title from "./Title.js";

export default function Form({ action }) {
  return (
    <div id="form-container">
    <Title id="centeredText" text="Diet Form Page" />
    <form>
      <p id="">Diet</p>
      <Checkbox value="gluten-free" label="Gluten Free" />
      <Checkbox value="ketogenic" label="Ketogenic" />
      <Checkbox value="vegetarian" label="Vegetarian" />
      <Checkbox value="lacto-vegetarian" label="Lacto-Vegetarian" />
      <Checkbox value="ovovegetarian" label="Ovovegetarian" />
      <Checkbox value="vegan" label="Vegan" />
      <Checkbox value="pescetarian" label="Pescetarian" />
      <Checkbox value="paleo" label="Paleo" />
      <Checkbox value="primal" label="Primal" />
      <Checkbox value="low-fodmap" label="Low FODMAP" />
      <Checkbox value="whole-30" label="Whole 30" />
    </form>
    <form>
      <RadioButton group="type" value="main-course" label="Main Course" />
      <RadioButton group="type" value="main-course" label="Main Course" />
      <RadioButton group="type" value="main-course" label="Main Course" />
     
      <p id="">Type</p>
      <input id=""></input>
      <p id="">Max Ready Time</p>
      <input id=""></input>
      <p id="">Cuisine</p>
      <input id=""></input>
      <p id="">Carbs</p>
      <input id=""></input>
      <p id="">Protein</p>
      <input id=""></input>
      <p id="">Allergies</p>
      <input id=""></input>
    </form>
    </div>
  );
}
