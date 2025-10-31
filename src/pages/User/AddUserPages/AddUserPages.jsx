// import clsx from "clsx";
import css from "./AddUserPages.module.css";
import { ModalAddUser } from "../../../components/ModalAddUser/ModalAddUser.jsx";

export default function AddUserPages({ setColor, setIsClick}) {
  return (
    <div className={css.containerAddUserPages}>
      <h3 className={css.title}>Form Add user</h3>
      <ModalAddUser
        setIsClick={setIsClick}
        setColor={setColor}
      />
    </div>
  );
}
