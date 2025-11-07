import css from "./ButtonModalUser.module.css";
import { ButtonUserDate } from "../../../../../Button/ButtonUserDate.jsx";
import { NavLink } from "react-router-dom";

export default function ButtonModalUser({
  setIsClick,
  setUserAdd,
  setUserUpdate,
  setDeleteUser,
}) {
  const handleClick = () => {
    setIsClick(true);
    setUserAdd(false);
    setUserUpdate(false);
    setDeleteUser(false);
    return;
  };
  return (
    <div>
      <nav className={css.containerModalUser}>
        <div>
          <ButtonUserDate type="submit" value="green">
            Done
          </ButtonUserDate>
        </div>
        <NavLink to="/">
          <ButtonUserDate type="button" value="red" onClick={handleClick}>
            Cencel
          </ButtonUserDate>
        </NavLink>
      </nav>
    </div>
  );
}
