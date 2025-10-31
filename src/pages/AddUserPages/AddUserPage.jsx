import clsx from "clsx";
import { ModalAddUser } from "../../components/ModalAddUser/ModalAddUser.jsx";
import {Button} from '../../components/Button/Button.jsx'

export default function AddUserPages({
  setColor,
  setIsClick,
  isClick,
}) {
    
    const handleClick = (evn) => {
    setColor(evn);
    setIsClick(!isClick);
 return;
  };
  return (
    <div>
      <ModalAddUser />
      <div className={clsx(`containerButton`)}>
        <Button color="green" onClick={handleClick}>
          Done
        </Button>
        <Button color="red" onClick={handleClick}>
          Cencel
        </Button>
      </div>
    </div>
  );
}