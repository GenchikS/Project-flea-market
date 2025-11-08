import { ButtonUserDate } from "../../../Button/ButtonUserDate.jsx";
import css from "./UserChange.module.css"
export default function UserChange({ handleClick }) {
  return (
    <div className={css.buttonUserContainer}>
      <ul className={css.listButtonUser}>
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