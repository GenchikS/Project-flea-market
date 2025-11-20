// import css from "./ServicesComponent.module.css";

import { useNavigate } from "react-router-dom";

export default function ServicesComponent() {
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
