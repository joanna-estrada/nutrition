export default function TextInput({ name, display }) {
  return (
    <div>
        <label className="text-label" for={name}>{display} </label><br></br>
        <input className="input-text" type="text" id={name} name={name}></input>
    </div>
  );
}