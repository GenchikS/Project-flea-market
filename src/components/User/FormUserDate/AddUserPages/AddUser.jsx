import css from "./AddUser.module.css";
import { FormAddUser } from "./FormAddUser/FormAddUser.jsx";

export default function AddUser() {
  return (
    <div className={css.containerAddUser}>
      <h3 className={css.title}>Form Add user</h3>
      <FormAddUser />
    </div>
  );
}
