import css from "./UserPages.module.css";
import { ButtonUserPage } from "../../../components/Button/ButtonUserPage.jsx";

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
    return
  };
  
  return (
    <div className={css.containerUserPages}>
      <h4>UserPages</h4>
      <ul className={css.listButtonUserPages}>
        <li>
          <ButtonUserPage value="addUser" onClick={handleClick}>
            Add user
          </ButtonUserPage>
        </li>
        <li>
          <ButtonUserPage value="updateUser" onClick={handleClick}>
            update User
          </ButtonUserPage>
        </li>
        <li>
          <ButtonUserPage value="deleteUser" onClick={handleClick}>
            delete User
          </ButtonUserPage>
        </li>
      </ul>
    </div>
  );
}
