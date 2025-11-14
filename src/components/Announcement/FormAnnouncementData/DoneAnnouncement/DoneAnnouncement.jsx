import css from "./DoneAnnouncement.module.css";
import { useNavigate } from "react-router-dom";

export default function DoneAnnouncement() {
      const navigate = useNavigate();
  const handleClick = () => {
    navigate("/announcements");  
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
