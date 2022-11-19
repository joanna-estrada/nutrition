export default function RadioButton({ group, value, label }) {
  return (
    <div>
        <input type="radio" id={value} name={group} value={value}></input>
        <label className="input-text" for={value}>{label}</label><br></br>
    </div>
  );
}