import clsx from "clsx";
import { ButtonUserDate } from "../../../../Button/ButtonUserDate.jsx";

export default function ButtonModalAddUser({
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
    <div className={clsx(`containerButton`)}>
      <ButtonUserDate type="submit" value="green">
        Done
      </ButtonUserDate>
      <ButtonUserDate type="button" value="red" onClick={handleClick}>
        Cencel
      </ButtonUserDate>
    </div>
  );
}
