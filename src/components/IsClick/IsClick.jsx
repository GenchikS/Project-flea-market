import css from "./IsClick.module.css"
import { Button } from "../Button/Button.jsx";
// import clsx from "clsx";

export default function IsClick({ color, setIsClick, setUserAdd }) {
  const handleClick = () => {
    setIsClick(false);
    setUserAdd(false);
    return;
  };

  let text = "";
  if (color === "green") {
    text = "Done";
  } else if (color === "red") {
    text = "Cencel";
  }

  return (
    <div className={css.containerClose}>
      <p className={text === "Done" ? css.green : css.red}>{text}</p>
      <Button onClick={handleClick}>Close</Button>
    </div>
  );
}