import { fetchArticleLogoutUser } from "../../../api/articles-api.js";
import css from "./LogoutUser.module.css"
import { NavLink, useNavigate } from "react-router-dom";

export const LogoutUser = ({ setUser, setIsLogin }) => {
  const navigate = useNavigate();
  
  const handleClick = async () => {
    const sessionId = localStorage.getItem("sessionId");
    const payload = {sessionId: JSON.parse(sessionId)};
    // console.log(`payload`, payload);
     await fetchArticleLogoutUser(payload);
      setUser({});
      setIsLogin(false);
      navigate("/");
  };
  return (
    <div className={css.containerModalUser}>
      <button className={css.green} type="button" onClick={handleClick}>
        Вихід
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
};