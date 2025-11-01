import clsx from "clsx";
import { ButtonUserDate } from "./ButtonUserDate.jsx";
import { ButtonUserPage } from "../../../Button/ButtonUserPage.jsx";

export default function ButtonModalAddUser({
  setIsClick,
  setUserAdd,
  setUserUpdate,
  setDeleteUser
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
      <ButtonUserPage value="red" onClick={handleClick}>
        Cencel
      </ButtonUserPage>
    </div>
  );
}
