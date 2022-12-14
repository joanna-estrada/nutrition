import { doc, setDoc } from "firebase/firestore";
import { auth, db } from "../services/firebaseConfig";

export default function ActionButtons({ recipe }) {
  function addFavorite(e, recipe) {
    e.preventDefault();
    setDoc(doc(db, "favoriterecipes", auth.currentUser.uid), {
      name: recipe.title,
      link: recipe.sourceUrl,
      instructions: recipe.instructions,
    })
  }
  return (
    <div id="align-buttons">
      {/* With help from: https://stackoverflow.com/a/2906586 */}
      <form action={recipe?.sourceUrl} target="_blank">
        <input className="action-buttons" type="submit" value="Go To Recipe" />
      </form>
      <form onSubmit={(e) => addFavorite(e, recipe)}>
        <input className="action-buttons" type="submit" value="Favorite Recipe" />
      </form>
    </div>
  );
}