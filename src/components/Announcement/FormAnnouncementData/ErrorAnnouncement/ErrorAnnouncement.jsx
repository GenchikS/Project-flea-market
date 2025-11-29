import css from "./ErrorAnnouncement.module.css";
import { useNavigate } from "react-router-dom";

export default function ErrorAnnouncement({ setIsModalOpen, error }) {
  const navigate = useNavigate();
  const handleClick = () => {
    setIsModalOpen(false);
    navigate("/admin");
    return;
  };

  return (
    <div className={css.containerClose}>
      <p className={css.red}>{error}</p>
      <button className={css.buttonRed} type="button" onClick={handleClick}>
        Ok
      </button>
    </div>
  );
}
