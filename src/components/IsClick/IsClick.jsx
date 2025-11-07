import css from "./IsClick.module.css";
import { ButtonUserDate } from "../Button/ButtonUserDate.jsx";
import { NavLink } from "react-router-dom";

export default function IsClick({ setIsClick }) {
  const handleClick = () => {
    setIsClick(true);
    return;
  };

  return (
    <nav className={css.containerClose}>
      <p className={css.green}>Done!</p>
      <NavLink to="/">
            <ButtonUserDate type="button" onClick={handleClick}>Cencel</ButtonUserDate>
      </NavLink>
      
    </nav>
  );
}
