import { fetchArticleLogoutUser } from "../../../api/articles-api.js";
import css from "./LogoutUser.module.css"
import { NavLink, useNavigate } from "react-router-dom";

export const LogoutUser = ({ setUser, setIsLogin }) => {
  const navigate = useNavigate();
  
  const handleClick = async () => {
    const sessionIdParse = JSON.parse(
      localStorage.getItem("Project-flea-market")
    );
    
    const sessionId = sessionIdParse.sessionId;
    // const payload = {sessionId: JSON.parse(sessionId)};
    // console.log(`sessionId`, sessionId);
     await fetchArticleLogoutUser({ sessionId: sessionId });
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