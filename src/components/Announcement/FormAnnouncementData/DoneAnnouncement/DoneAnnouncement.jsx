import css from "./DoneAnnouncement.module.css";
import { useNavigate } from "react-router-dom";

export default function DoneAnnouncement({setIsModalOpen, responseMessage}) {
  const navigate = useNavigate();
  
  const handleClick = () => {
    setIsModalOpen(false)
    navigate("/admin");
    return;
  };

  return (
    <div className={css.containerClose}>
      <p className={css.green}>{responseMessage}</p>
      <button className={css.buttonGreen}  type="button" onClick={handleClick}>
        Ok
      </button>
    </div>
  );
}
