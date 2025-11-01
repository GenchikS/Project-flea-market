import { FormAddUser } from "../AddUserPages/FormAddUser/FormAddUser.jsx";
import css from "./DeleteUserPages.module.css";

export default function DeleteUserPages({
  setIsClick,
  textTitle,
  setUserAdd,
  setUserUpdate,
  setDeleteUser,
}) {
  return (
    <div className={css.containerAddUserPages}>
      <h3 className={css.title}>{textTitle}</h3>
      <FormAddUser
        setIsClick={setIsClick}
        setUserAdd={setUserAdd}
        setUserUpdate={setUserUpdate}
        setDeleteUser={setDeleteUser}
        textTitleDelete={textTitle}
      />
    </div>
  );
}