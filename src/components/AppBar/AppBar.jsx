import css from './AppBar.module.css';
import { NavLink, Outlet } from 'react-router-dom';
import clsx from 'clsx';

const appBarClass = ({ isActive }) => {
    return clsx(css.link, isActive && css.activeLink)
}

const appBarClassUser = ({ isActive }) => {
  return clsx(css.link, isActive && css.activeLinkUser);
};

export const AppBar = ({ user }) => {
  // console.log(`user AppBar`, user);
  const userRole = user.role;
  return (
    <div className={css.containerAppBar}>
      <nav className={css.containerNav}>
        <NavLink className={appBarClass} to="/">
          sVs
        </NavLink>
        {!userRole && (
          <NavLink className={appBarClass} to="/auth/register">
            Реєстрація
          </NavLink>
        )}
        {userRole && (
          <NavLink className={appBarClassUser} to="/user/home">
            Вітаємо {user.name}
          </NavLink>
        )}
        {/* {userRole && <h5 className={css.titleUserName}>Вітаємо {user.name}</h5>} */}
        {userRole === "admin" && (
          <NavLink className={appBarClass} to="/admin">
            Admin panel
          </NavLink>
        )}
        {!userRole && (
          <NavLink className={appBarClass} to="/auth/login">
            Вхід
          </NavLink>
        )}
        {userRole && (
          <NavLink className={appBarClass} to="/auth/logout">
            Вихід
          </NavLink>
        )}
      </nav>
      <Outlet />
    </div>
  );
};