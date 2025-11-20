import css from './AppBar.module.css';
import { NavLink, Outlet } from 'react-router-dom';
import clsx from 'clsx';

const appBarClass = ({ isActive }) => {
    return clsx(css.link, isActive && css.activeLink)
}

export const AppBar = () => {
    return (
      <div className={css.containerAppBar}>
        <nav className={css.containerNav}>
          <NavLink className={appBarClass} to="/">
            sVs
          </NavLink>
          <NavLink className={appBarClass} to="/auth/register">
            Register
          </NavLink>
          <NavLink className={appBarClass} to="/auth/login">
            Login
          </NavLink>
        </nav>
        <Outlet />
      </div>
    );}