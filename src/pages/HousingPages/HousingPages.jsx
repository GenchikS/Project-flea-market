import css from "./HousingPages.module.css";

import { useNavigate } from "react-router-dom";

export default function HousingPages() {
  const navigate = useNavigate();
  const handleClickBack = () => {
    console.log(`Click back`);
    navigate(`/`);
    return;
  };
  return (
    <div>
      <h4>HousingPages</h4>
      <button onClick={handleClickBack}>back</button>
    </div>
  );
}
