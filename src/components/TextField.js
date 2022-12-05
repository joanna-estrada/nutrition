export default function RadioButton({ group, value}) {
  return (
    <div>
        <input type="text" id={value} name={group} value={value}></input>
    </div>
  );
}