import Subtitle from "./Subtitle";

export default function MaxCalories({setCalories}){
  return(
    <div className="max" id="cal">
      <Subtitle text="Max Calories" />
      <input type="number" onChange={(e) => setCalories(e.target.value)} />
    </div>
  );
}