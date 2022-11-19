export default function NumberInput({ name, display }) {
  return (
    <div>
        <label className="number-label" for={name}>{display}: </label>
        <input className="input-text" type="number" id={name} name={name}></input>
    </div>
  );
}