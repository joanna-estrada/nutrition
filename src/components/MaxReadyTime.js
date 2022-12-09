import Subtitle from "./Subtitle";

export default function MaxReadyTime({setReadyTime}) {
  return(
    <div className="max" id="time">
      <Subtitle text="Max Ready Time (Minutes)" />
      <input type="number" onChange={(e) => setReadyTime(e.target.value)} />
    </div> 
  );
}