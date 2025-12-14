import css from "./UserName.module.css";
import { NavLink, Outlet, useNavigate } from 'react-router-dom';
import clsx from 'clsx';
import { fetchArticleLogoutUser } from "../../api/articles-api.js";

const appBarClass = ({ isActive }) => {
    return clsx(css.link, isActive && css.activeLink)
}

export const UserName = ({user }) => {
  // const navigate = useNavigate();
  // console.log(`token`, token);
  // console.log(`user UserName`, user);
  const userRole = user.role;
  // const handleClick = async (token) => {
  //   setIsLogin(true);
  //   console.log(`user logout`, user);
  //   await fetchArticleLogoutUser(token);
  //   setUser({});
  //   setIsLogin(false);
  //   navigate("/");
  //   // return;
  // };
  return (
    <div className={css.containerAppBar}>
      <nav className={css.containerNav}>
        <NavLink className={appBarClass} to="/">
          sVs
        </NavLink>
        <h5 className={css.titleUserName}>Вітаємо {user.name}</h5>
        {userRole === "admin" && (
          <NavLink className={appBarClass} to="/admin">
            Admin panel
          </NavLink>
        )}
        <NavLink className={appBarClass} to="/auth/logout">
          Вихід
        </NavLink>
      </nav>
      <Outlet />
    </div>
  );
};