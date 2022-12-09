export default function Summary({ recipe }) {
  return (
    <p dangerouslySetInnerHTML={{__html : recipe.summary}}/>
  );
}
