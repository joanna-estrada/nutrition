import Subtitle from "./Subtitle";

export default function MaxProtein({setProtein}){
  return(
    <div className="max" id="protein">
      <Subtitle text="Max Protein" />
      <input type="number" onChange={(e) => setProtein(e.target.value)} />
    </div>
  );
}