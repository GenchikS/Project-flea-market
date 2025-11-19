import css from "./AnimalsPages.module.css";

import { useNavigate } from "react-router-dom";

export default function AnimalsPages() {
  const navigate = useNavigate();
  const handleClickBack = () => {
    console.log(`Click back`);
    navigate(`/`);
    return;
  };
  return (
    <div>
      <h4>AnimalsPages</h4>
      <button onClick={handleClickBack}>back</button>
    </div>
  );
}
