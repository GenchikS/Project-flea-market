import css from "./DoneUser.module.css";
import { useNavigate } from "react-router-dom";

export default function DoneUser({ setIsModalOpen }) {
  const navigate = useNavigate();
  const handleClick = () => {
    setIsModalOpen(false);
    navigate("/admin/users");
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
