import clsx from "clsx";
import {Button} from '../Button/Button.jsx'

export default function ButtonModalAddUser({ setColor, setIsClick, isClick }) {
  // console.log(`type`, type);
  const handleClick = (evn) => {
    setColor(evn);
    setIsClick(!isClick);
    return;
  };
  return (
    <div className={clsx(`containerButton`)}>
      <Button color="green" onClick={handleClick}>
        Done
      </Button>
      <Button color="red" onClick={handleClick}>
        Cencel
      </Button>
    </div>
  );
}