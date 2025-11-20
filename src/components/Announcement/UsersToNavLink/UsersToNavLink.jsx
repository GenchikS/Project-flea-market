import { NavLink } from "react-router-dom";
import css from "./UsersToNavLink.module.css";

export default function UsersToNavLink() {
  return (
    <nav>
      <NavLink to="/admin/users">
        <div className={css.containerUsers}>
          <p className={css.titleUsers}>Admin users pages</p>
        </div>
      </NavLink>
    </nav>
  );
}