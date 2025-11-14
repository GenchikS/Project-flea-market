import css from "./DeleteUser.module.css";
import { FormDeleteUser } from "./FormDeleteUser/FormDeleteUser.jsx";
// import { FormDeleteUser } from "./FormDeleteUser/FormDeleteUser.jsx";


export default function DeleteUser() {
  return (
    <div className={css.containerAddUserPages}>
      <h3 className={css.title}>Form delete user</h3>
      <FormDeleteUser/>
    </div>
  );
}