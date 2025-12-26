import css from "./DoneAnnouncementUser.module.css";
import { useNavigate } from "react-router-dom";

export default function DoneAnnouncementUser({setIsModalOpen}) {
  const navigate = useNavigate();
  
  const handleClick = () => {
    setIsModalOpen(false)
    navigate("/user/home");
    return;
  };

  return (
    <div className={css.containerClose}>
      <p className={css.green}>Завантажено!</p>
      <button className={css.buttonGreen}  type="button" onClick={handleClick}>
        Ok
      </button>
    </div>
  );
}
