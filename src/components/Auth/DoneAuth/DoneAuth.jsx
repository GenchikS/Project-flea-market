import css from "./DoneAuth.module.css";
import { useNavigate } from "react-router-dom";

export default function DoneAuth() {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/auth/login");
    return;
  };

  return (
    <div className={css.containerClose}>
      <p className={css.green}>Done!</p>
      <button type="button" onClick={handleClick}>
        Cencel
      </button>
    </div>
  );
}
