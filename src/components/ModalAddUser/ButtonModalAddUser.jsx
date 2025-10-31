import clsx from "clsx";
import {Button} from '../Button/Button.jsx'

export default function ButtonModalAddUser({ setColor, setIsClick}) {
  // console.log(`type`, type);
  const handleClick = (evn) => {
    setColor(evn);
    setIsClick(false);
    return;
  };
  return (
    <div className={clsx(`containerButton`)}>
      <Button value="green" onClick={handleClick}>
        Done
      </Button>
      <Button value="red" onClick={handleClick}>
        Cencel
      </Button>
    </div>
  );
}