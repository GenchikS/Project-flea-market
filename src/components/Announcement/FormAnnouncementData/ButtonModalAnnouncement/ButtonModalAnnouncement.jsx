import css from "./ButtonModalAnnouncement.module.css";
import { NavLink } from "react-router-dom";

export default function ButtonModalAnnouncement({pathTo, setIsModalOpen }) {
  return (
    <div className={css.containerModalUser}>
      <button className={css.green} type="submit">
        Ok
      </button>
      <nav>
        <NavLink to={pathTo}>
          <button className={css.red} type="button" onClick={() => setIsModalOpen(false)}>
            Скасувати
          </button>
        </NavLink>
      </nav>
    </div>
  );
}
