import { Button } from "../Button/Button.jsx";

export default function IsClick({ isClick, color, setIsClick }) {
const handleClick = (evn) => {
    setIsClick(!isClick);
    return;
  };

    let text = "";
    if (color === "green") {
        text = "Done";
    } else if (color === "red") {
        text = "Cencel";
    }
    

    return (
      <div>
        <p>{text}</p>
        <Button onClick={handleClick}>Close</Button>
      </div>
    );
}