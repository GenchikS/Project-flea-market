import css from "./Done.module.css";
import { useNavigate } from "react-router-dom";

export default function Done() {
      const navigate = useNavigate();
  const handleClick = () => {
    navigate("/users")  
      return
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
