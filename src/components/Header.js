import Title from "./Title";
import Subtitle from "./Subtitle";

export default function Header() {
  return (
    <div id="header-component">
        <Title id="centeredText" text="Diet Form Page" />
        <Subtitle text="Please enter some fields below to find recipes." />
    </div>
  );
}