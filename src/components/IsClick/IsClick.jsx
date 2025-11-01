import css from "./IsClick.module.css";
import { ButtonUserPage } from "../Button/ButtonUserPage.jsx";

export default function IsClick({ setIsClick}) {
  
  const handleClick = () => {
    setIsClick(true);
    return;
  };

  return (
    <div className={css.containerClose}>
      <p className={css.green}>Done!</p>
      <ButtonUserPage onClick={handleClick}>Cencel</ButtonUserPage>
    </div>
  );
}
