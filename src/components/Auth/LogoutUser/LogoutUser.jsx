import { fetchArticleLogoutUser } from "../../../api/articles-api.js";
import css from "./LogoutUser.module.css"
import { useNavigate } from "react-router-dom";

export const LogoutUser = ({ setUser, setIsLogin }) => {
  const navigate = useNavigate();
  
  const handleClick = async () => {
      const sessionId = localStorage.getItem(`sessionId`);
      const payload = { sessionId: sessionId };
    await fetchArticleLogoutUser(payload);
    setUser({});
    setIsLogin(false);
    navigate("/");
    // return;
  };
  return (
    <div>
      <button
        type="button"
        className={css.button}
        onClick={handleClick}
      >
        Вихід
      </button>
    </div>
  );
};