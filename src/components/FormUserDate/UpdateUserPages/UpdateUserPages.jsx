import { FormAddUser } from "../AddUserPages/FormAddUser/FormAddUser.jsx";
import css from "./UpdateUserPages.module.css";

export default function UpdateUserPages({
  setIsClick,
  textTitle,
  setUserAdd,
  setUserUpdate,
  setDeleteUser,
}) {
  return (
    <div className={css.containerUpdateUserPages}>
      <h3 className={css.title}>{textTitle}</h3>
      <FormAddUser
        setIsClick={setIsClick}
        setUserAdd={setUserAdd}
        setUserUpdate={setUserUpdate}
        setDeleteUser={setDeleteUser}
      />
    </div>
  );
}
