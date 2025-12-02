import css from "./UserName.module.css";
import { NavLink, Outlet } from 'react-router-dom';
import clsx from 'clsx';

const appBarClass = ({ isActive }) => {
    return clsx(css.link, isActive && css.activeLink)
}

export const UserName = ({ user }) => {
  return (
    <div className={css.containerAppBar}>
      <nav className={css.containerNav}>
        <NavLink className={appBarClass} to="/">
          sVs
        </NavLink>
        <h5 className={css.titleUserName}>Вітаємо {user.name}</h5>
        <NavLink className={appBarClass} to="/auth/logout">
          Вихід
        </NavLink>
      </nav>
      <Outlet />
    </div>
  );
};