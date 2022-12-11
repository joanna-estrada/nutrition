import { useNavigate } from "react-router-dom";

export default function SearchButton() {
const navigate = useNavigate();
  return (
    <button onClick={() => navigate(-1)}>New Search</button>
  );
}