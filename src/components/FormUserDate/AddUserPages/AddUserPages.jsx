import IsClick from "../../IsClick/IsClick.jsx";
import css from "./AddUserPages.module.css";
import { FormAddUser } from "./FormAddUser/FormAddUser.jsx";

export default function AddUserPages({
  setIsClick,
  setUserAdd,
  setUserUpdate,
  setDeleteUser,
  textTitle,
}) {
  return (
    <div className={css.containerAddUserPages}>
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
