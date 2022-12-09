import Subtitle from "./components/Subtitle.js";

export default function TextSearch({setText}){
  return(
  <div id="text-search">
    <Subtitle text="General Text Search" />
    <input type="text" onChange={(e) => setText(e.target.value)} />
  </div>
  );
}