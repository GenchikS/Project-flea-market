import css from "./DifferentsPages.module.css";

import { useNavigate } from "react-router-dom";

export default function DifferentsPages() {
  const navigate = useNavigate();
  const handleClickBack = () => {
    console.log(`Click back`);
    navigate(`/`);
    return;
  };
  return (
    <div>
      <h4>DifferentsPages</h4>
      <button onClick={handleClickBack}>back</button>
    </div>
  );
}
