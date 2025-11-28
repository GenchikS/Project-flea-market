import css from "./ErrorUser.module.css";
import { useNavigate } from "react-router-dom";

export default function ErrorUser({ setIsModalOpen, error }) {
  const navigate = useNavigate();
    const handleClick = () => {
    setIsModalOpen(false);
    navigate("/admin/users");
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
