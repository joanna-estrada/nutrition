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
        <div>
            <h1>Hi these are your favs</h1>
            {auth.currentUser?.displayName}
            {auth.currentUser?.uid}
            {favorite?.name??"No favorite yet"}
            {favorite?.link}
            <NavigationButton className="nav-button" />
        </div>
    );
};

export default ViewFavoritesPage;
