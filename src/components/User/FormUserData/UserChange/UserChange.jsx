import { ButtonUserDate } from "../../../Button/ButtonUserDate.jsx";
import css from "./UserChange.module.css"
import { useNavigate } from "react-router-dom";


export default function UserChange({ pathTo, setIsModalOpen }) {
  const navigate = useNavigate();

  const handleClick = (evn) => {
    // console.log(`evn`, evn);
    switch (evn) {
      case `addUser`:
        setIsModalOpen(true);
        navigate(`${pathTo}/add`);
        // console.log(`evn addUser`, evn);
        break;
      case `updataUser`:
        setIsModalOpen(true);
        navigate(`${pathTo}/updata`);
        // console.log(`evn updateUser`, evn);
        break;
      case `deleteUser`:
        setIsModalOpen(true);
        navigate(`${pathTo}/delete`);
        // console.log(`evn deleteUser`, evn);
        break;
      default:
        // console.log(`evn userPage`, evn);
        navigate(`${pathTo}`);
        break;
    }
    return;
  };

  return (
    <div className={css.buttonUserContainer}>
      <ul className={css.listButtonUser}>
        <li>
          <ButtonUserDate value="addUser" onClick={handleClick}>
            дадати користувача
          </ButtonUserDate>
        </li>
        <li>
          <ButtonUserDate value="updataUser" onClick={handleClick}>
            оновити користувача
          </ButtonUserDate>
        </li>
        <li>
          <ButtonUserDate value="deleteUser" onClick={handleClick}>
            видалити користувача
          </ButtonUserDate>
        </li>
      </ul>
    </div>
  );
}