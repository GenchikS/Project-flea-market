// import css from "./WorkComponent.module.css";

import { useNavigate } from "react-router-dom";

export default function WorkComponent() {
  const navigate = useNavigate();
  const handleClickBack = () => {
    console.log(`Click back`);
    navigate(`/`);
    return;
  };
  return (
    <div>
      <h4>WorkPages</h4>
      <button onClick={handleClickBack}>back</button>
    </div>
  );
}
