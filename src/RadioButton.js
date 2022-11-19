export default function RadioButton({ group, value, label }) {
  return (
    <div>
        <input type="radio" id={value} name={group} value={value}></input>
        <label for={value}>{label}</label><br></br>
    </div>
  );
}