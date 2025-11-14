import css from "./ButtonModalUser.module.css";
import { NavLink } from "react-router-dom";

export default function ButtonModalUser() {
  return (
    <div className={css.containerModalUser}>
      <button className={css.green} type="submit">
        Done
      </button>
      <nav>
        <NavLink to="/">
          <button className={css.red} type="button">
            Cencel
          </button>
        </NavLink>
      </nav>
    </div>
  );
}
