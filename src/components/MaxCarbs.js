import Subtitle from "./Subtitle";

export default function MaxCarbs({setCarbs}) {
  return(
    <div className="max" id="carbs">
      <Subtitle text="Max Carbohydrates" />
      <input type="number" onChange={(e) => setCarbs(e.target.value)} />
    </div>
  );
}