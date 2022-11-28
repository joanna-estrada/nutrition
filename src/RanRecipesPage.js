import { useNavigate } from "react-router-dom";
import {useState, useEffect} from "react";

const RanRecipesPage = (props) => {
  const [data, setData] = useState("");

  useEffect(() => {
    const url = `https://api.spoonacular.com/recipes/random?apiKey=43dd31b79bdb404eacf941c2cdf9e291`;
    console.log(url);
    fetch(url)
      .then((r) => r.json())
      .then((r) => setData(r))
      .catch((e) => setData(e));
  }, []);

  const navigate = useNavigate();
  return (
    <>
      <h1>Random Recipes Page</h1>
      <br />
      {data?.recipes?.[0]?.title}
      <button onClick={() => navigate(-1)}>Go Back</button>

    </>
  );
};

export default RanRecipesPage;