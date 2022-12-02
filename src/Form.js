import Checkbox from "./components/Checkbox.js";
import RadioButton from "./components/RadioButton.js";
import NumberInput from "./components/NumberInput.js"
import Title from "./components/Title.js";
import './DietFormPage.css';


export default function Form({ action }) {
  return (
    <form id="grid-form">
      <div id="header-component">
        <Title id="centeredText" text="Diet Form Page" />
      </div>
      <div id="select">
        <p className="centered">Please Pick a Form Type to Proceed</p>
        <RadioButton group="form-type" value="text-search" label="Text Search" />
        <RadioButton group="form-type" value="form" label="Diet Form" />
      </div>
      {/* <div>
        <p className="centered">Text Search</p>
        <TextInput name="text-search" display="Search"/>
      </div> */}
      <div id="diet-component">
        <p className="centered">Diet</p>
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
      </div>
      <div id="type-component">
        <p className="centered">Type</p>
        <RadioButton group="type" value="main-course" label="Main Course" />
        <RadioButton group="type" value="side-dish" label="Side Dish" />
        <RadioButton group="type" value="dessert" label="Dessert" />
        <RadioButton group="type" value="appetizer" label="Appetizer" />
        <RadioButton group="type" value="salad" label="Salad" />
        <RadioButton group="type" value="bread" label="Bread" />
        <RadioButton group="type" value="breakfast" label="Breakfast" />
        <RadioButton group="type" value="soup" label="Soup" />
        <RadioButton group="type" value="beverage" label="Beverage" />
        <RadioButton group="type" value="sauce" label="Sauce" />
        <RadioButton group="type" value="marinade" label="Marinade" />
        <RadioButton group="type" value="finger-food" label="Fingerfood" />
        <RadioButton group="type" value="snack" label="Snack" />
        <RadioButton group="type" value="drink" label="Drink" />
      </div>
      <div id="cuisine-component">
        <p className="centered">Cuisine</p>
        <Checkbox value="african" label="African" />
        <Checkbox value="american" label="American" />
        <Checkbox value="british" label="British" />
        <Checkbox value="cajun" label="Cajun" />
        <Checkbox value="caribbean" label="Caribbean" />
        <Checkbox value="chinese" label="Chinese" />
        <Checkbox value="eastern-european" label="Eastern-European" />
        <Checkbox value="european" label="European" />
        <Checkbox value="french" label="French" />
        <Checkbox value="german" label="German" />
        <Checkbox value="greek" label="Greek" />
        <Checkbox value="indian" label="Indian" />
        <Checkbox value="irish" label="Irish" />
        <Checkbox value="italian" label="Italian" />
        <Checkbox value="japanese" label="Japanese" />
        <Checkbox value="jewish" label="Jewish" />
        <Checkbox value="korean" label="Korean" />
        <Checkbox value="latin-american" label="Latin-American" />
        <Checkbox value="mediterranean" label="Mediterranean" />
        <Checkbox value="mexican" label="Mexican" />
        <Checkbox value="middle-eastern" label="Middle-Eastern" />
        <Checkbox value="nordic" label="Nordic" />
        <Checkbox value="southern" label="Southern" />
        <Checkbox value="spanish" label="Spanish" />
        <Checkbox value="thai" label="Thai" />
        <Checkbox value="vietnamese" label="Vietnamese" />
      </div>
      <div id="intolerance-component">
        <p className="centered">Intolerances</p>
        <Checkbox value="dairy" label="Dairy" />
        <Checkbox value="eggs" label="Eggs" />
        <Checkbox value="gluten" label="Gluten" />
        <Checkbox value="grain" label="Grain" />
        <Checkbox value="peanut" label="Peanut" />
        <Checkbox value="seafood" label="Seafood" />
        <Checkbox value="sesame" label="Sesame" />
        <Checkbox value="shellfish" label="Shellfish" />
        <Checkbox value="soy" label="Soy" />
        <Checkbox value="sulfite" label="Sulfite" />
        <Checkbox value="tree-nut" label="Tree Nut" />
        <Checkbox value="wheat" label="Wheat" />
      </div>
      <div className="max" id="time">
        <NumberInput name="max-ready-time" display="Max Ready Time (Minutes)"/>
      </div>
      <div className="max" id="carbs">
        <NumberInput name="max-carbs" display="Max Carbs (Grams)"/>
      </div>
      <div className="max" id="protein">
        <NumberInput name="max-protein" display="Max Protein (Grams)"/>
      </div>
      <div className="max" id="cal">
        <NumberInput name="max-calories" display="Max Calories (Grams)"/>
      </div>
    </form>
  );
}
