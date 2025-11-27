// import { useNavigate } from "react-router-dom";
import css from "./RegisterComponent.module.css";
import RegisterAddUser from "../../RegisterAddUser/RegisterAddUser.jsx";

export default function RegisterComponent() {
  return (
    <div className={css.containerAddUser}>
      <h3 className={css.title}>Форма реєстрації користувача</h3>
        <RegisterAddUser/>
    </div>
  );
}
