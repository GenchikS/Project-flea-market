import { Link, NavLink } from "react-router-dom";
import css from "./HomePages.module.css";

export const HomePages = () => {
    return (
      <div className={css.containerAll}>
        <nav className={css.containerNav}>
          <Link className={css.link} to="/">
            sVc
          </Link>
          <Link className={css.linkLogin} to="/user/register">
            Register
          </Link>
          <Link className={css.linkLogin} to="/user/login">
            Login
          </Link>
        </nav>
        <div className={css.captersSvc}>
          <h4 className={css.titleHomePage}>
            Розділи на <span className={css.spanS}>s</span>
            <span className={css.spanV}>V</span>
            <span className={css.spanC}>c</span>:
          </h4>
          <ul className={css.listAnnouncement}>
            <li>
              <NavLink to="/auto" className={css.listTitle}>
                Авто
              </NavLink>
            </li>
            <li>
              <NavLink to="/work" className={css.listTitle}>
                Work
              </NavLink>
            </li>
            <li>
              <NavLink to="/housing" className={css.listTitle}>
                Housing
              </NavLink>
            </li>
            <li>
              <NavLink to="/services" className={css.listTitle}>
                Services
              </NavLink>
            </li>
            <li>
              <NavLink to="/animals" className={css.listTitle}>
                Animals
              </NavLink>
            </li>
            <li>
              <NavLink to="/differents" className={css.listTitle}>
                Differents
              </NavLink>
            </li>
            <li>
              <NavLink to="/gifts" className={css.listTitle}>
                Gifts
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    );
}