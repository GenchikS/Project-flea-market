import css from "./LoginComponent.module.css";
import LoginUser from "./LoginUser/LoginUser.jsx";

export default function LoginComponent() {
  return (
      <div className={css.containerLoginUser}>
            <LoginUser/>
        </div>
    );
}