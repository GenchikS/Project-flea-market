import css from "./IsClick.module.css";
import { ButtonUserDate } from "../Button/ButtonUserDate.jsx";

export default function IsClick({ setIsClick }) {
  const handleClick = () => {
    setIsClick(true);
    return;
  };

  return (
    <div className={css.containerClose}>
      <p className={css.green}>Done!</p>
      <ButtonUserDate type="button" onClick={handleClick}>Cencel</ButtonUserDate>
    </div>
  );
}
