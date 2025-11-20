import css from "./ButtonModalUser.module.css";
import { NavLink } from "react-router-dom";

export default function ButtonModalUser({pathTo, setIsModalOpen }) {
  return (
      <div className={css.containerModalUser}>
        <button className={css.green} type="submit">
          Done
        </button>
        <nav>
          <NavLink to={pathTo}>
            <button className={css.red} type="button" onClick={() => setIsModalOpen(false)}>
              Cencel
            </button>
          </NavLink>
        </nav>
      </div>
    );
  }

