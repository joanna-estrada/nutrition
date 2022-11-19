import Title from "./Title.js";

export default function Form({ action }) {
  return (
    <div id="form-container">
    <Title id="centeredText" text="Diet Form Page" />
    <form>
      <p id="">Diet</p>
      <input type="checkbox" id="gluten-free" name="gluten-free" value="gluten-free"></input>
      <label for="gluten-free">Gluten Free</label><br></br>
      <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike"></input>
      <label for="vehicle1">Ketogenic</label><br></br>
      <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike"></input>
      <label for="vehicle1">Vegetarian</label><br></br>
      <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike"></input>
      <label for="vehicle1">Lacto-Vegetarian</label><br></br>
      <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike"></input>
      <label for="vehicle1">Ovovegetarian</label><br></br>
      <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike"></input>
      <label for="vehicle1">Vegan</label><br></br>
      <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike"></input>
      <label for="vehicle1">Pescetarian</label><br></br>
      <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike"></input>
      <label for="vehicle1">Paleo</label><br></br>
      <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike"></input>
      <label for="vehicle1">Primal</label><br></br>
      <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike"></input>
      <label for="vehicle1">Low FODMAP</label><br></br>
      <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike"></input>
      <label for="vehicle1">Whole30</label><br></br>
    </form>
    <form>
      
      <input id=""></input>
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
