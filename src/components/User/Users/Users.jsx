import { NavLink } from "react-router-dom";
import css from "./Users.module.css"

export default function Users() {
    return (
      <nav>
        <NavLink to="/">
          <div className={css.containerUsers}>
            <p className={css.titleUsers}>Admin pages users</p>
          </div>
        </NavLink>
      </nav>
    );
}