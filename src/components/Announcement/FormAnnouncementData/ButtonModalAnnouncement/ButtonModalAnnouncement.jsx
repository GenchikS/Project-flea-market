import css from "./ButtonModalAnnouncement.module.css";
import { NavLink } from "react-router-dom";

export default function ButtonModalAnnouncement() {
  return (
    <div className={css.containerModalUser}>
      <button className={css.green} type="submit">
        Done
      </button>
      <nav>
        <NavLink to="/announcement">
          <button className={css.red} type="button">
            Cencel
          </button>
        </NavLink>
      </nav>
    </div>
  );
}
