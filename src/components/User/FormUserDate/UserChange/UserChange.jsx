import { ButtonUserDate } from "../../../Button/ButtonUserDate.jsx";
import css from "./UserChange.module.css"
import { useNavigate } from "react-router-dom";


export default function UserChange() {
  const navigate = useNavigate();

  const handleClick = (evn) => {
  // console.log(`evn`, evn);
  switch (evn) {
    case `addUser`:
      navigate(`/adduser`);
      // console.log(`evn addUser`, evn);
      break;
    case `updataUser`:
      navigate(`/updata`);
        // console.log(`evn updateUser`, evn);
        break;
    case `deleteUser`:
      navigate(`/delete`);
      // console.log(`evn deleteUser`, evn);
      break;
      default:
      //     // console.log(`evn userPage`, evn);
      navigate(`/`);
        break;
  }
  return;
};

return (
  <div className={css.buttonUserContainer}>
    <ul className={css.listButtonUser}>
      <li>
        <ButtonUserDate value="addUser" onClick={handleClick}>
          Add user
        </ButtonUserDate>
      </li>
      <li>
        <ButtonUserDate value="updataUser" onClick={handleClick}>
          updata User
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