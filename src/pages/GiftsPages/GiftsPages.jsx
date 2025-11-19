import css from "./GiftsPages.module.css";

import { useNavigate } from "react-router-dom";

export default function GiftsPages() {
  const navigate = useNavigate();
  const handleClickBack = () => {
    console.log(`Click back`);
    navigate(`/`);
    return;
  };
  return (
    <div>
      <h4>GiftsPages</h4>
      <button onClick={handleClickBack}>back</button>
    </div>
  );
}
