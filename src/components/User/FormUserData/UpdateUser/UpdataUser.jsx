import { FormUpdataUser } from "./FormUpdataUser/FormUpdataUser.jsx";
import css from "./UpdataUser.module.css";

export default function UpdataUser() {
  return (
    <div className={css.containerUpdateUserPages}>
      <h3 className={css.title}>Form updata user</h3>
      <FormUpdataUser />
    </div>
  );
}
