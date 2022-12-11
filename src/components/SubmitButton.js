export default function SubmitButton({submit, submitText}){
  return(
    <div id="form-button">
      <button id="submit-button" onClick={submit}>{submitText}</button>
    </div>
  );
}