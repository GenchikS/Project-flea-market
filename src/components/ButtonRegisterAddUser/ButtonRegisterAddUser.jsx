import css from "./ButtonRegisterAddUser.module.css";
import { NavLink } from "react-router-dom";

export default function ButtonRegisterAddUser() {
  return (
    <div className={css.containerModalUser}>
      <button className={css.green} type="submit">
        Ок
      </button>
      <nav>
        <NavLink to="/">
          <button className={css.red} type="button">
            Скасувати
          </button>
        </NavLink>
      </nav>
    </div>
  );
}
