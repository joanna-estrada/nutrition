export default function ActionButtons({recipe}) {
  return (
    <div id="align-buttons">
        {/* With help from: https://stackoverflow.com/a/2906586 */}
        <form action={recipe?.sourceUrl} >
            <input type="submit" value="Go To Recipe" target="_blank"/>
        </form>
        <form action="#">
            <input type="submit" value="Favorite Recipe"/>
        </form>
    </div>
  );
}