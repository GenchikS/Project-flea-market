import css from "./ServicesPages.module.css";

import { useNavigate } from "react-router-dom";

export default function ServicesPages() {
  const navigate = useNavigate();
  const handleClickBack = () => {
    console.log(`Click back`);
    navigate(`/`);
    return;
  };
  return (
    <div>
      <h4>ServicesPages</h4>
      <button onClick={handleClickBack}>back</button>
    </div>
  );
}
