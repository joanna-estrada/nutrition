export default function Checkbox({ value, label }) {
  return (
    <div>
        <input type="checkbox" id={value} name={value} value={value}></input>
        <label for={value}>{label}</label><br></br>
    </div>
  );
}
