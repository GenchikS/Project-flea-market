import css from "./UserPages.module.css";
import { ButtonUserDate } from "../../../components/Button/ButtonUserDate.jsx";

export default function UserPages({
  setIsClick,
  setUserAdd,
  setUserUpdate,
  setDeleteUser,
}) {
  const handleClick = (evn) => {
    setIsClick(false);
    switch (evn) {
      case `addUser`:
        // console.log(`evn addUser`, evn);
        setUserAdd(true);
        break;
      case `updateUser`:
        // console.log(`evn updateUser`, evn);
        setUserUpdate(true);
        break;
      case `deleteUser`:
        // console.log(`evn deleteUser`, evn);
        setDeleteUser(true);
        break;
      default:
        // console.log(`evn userPage`, evn);
        break;
    }
    return;
  };

  return (
    <div className={css.containerUserPages}>
      <h4>UserPages</h4>
      <ul className={css.listButtonUserPages}>
        <li>
          <ButtonUserDate value="addUser" onClick={handleClick}>
            Add user
          </ButtonUserDate>
        </li>
        <li>
          <ButtonUserDate value="updateUser" onClick={handleClick}>
            update User
          </ButtonUserDate>
        </li>
        <li>
          <ButtonUserDate value="deleteUser" onClick={handleClick}>
            delete User
          </ButtonUserDate>
        </li>
      </ul>
    </div>
  );
}
