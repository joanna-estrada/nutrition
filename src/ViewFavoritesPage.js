import { useState, useEffect } from "react";
import "./ViewFavoritesPage.css"
import NavigationButton from "./components/NavigationButton";
import { auth, db } from "./services/firebaseConfig";
import { doc, getDoc } from "firebase/firestore";



const ViewFavoritesPage = (props) => {
    const [favorite, setFavorite] = useState({});
    useEffect(() => {
        const docRef = doc(db, "favoriterecipes", auth.currentUser.uid);
        getDoc(docRef).then((docSnap) => {
            if (docSnap.exists()) {
                setFavorite(docSnap.data())
            
            }
            else{
                console.log("hi")
            }
        })
           }, [])
    return (
        <div id="favsPage">
            <h2>Your Favorite Recipe</h2>
            <h3>Name: </h3>{favorite?.name??"No favorite yet"}
            <br/>
            <h3>Link to recipe: </h3>{favorite?.link}
            <br/>
            <h3>Instructions: </h3>{favorite?.instructions}
            <footer><NavigationButton className="nav-button" /></footer>
        </div>
    );
};

export default ViewFavoritesPage;
