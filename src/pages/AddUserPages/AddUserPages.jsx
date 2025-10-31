// import clsx from "clsx";
import css from "./AddUserPages.module.css"
import { ModalAddUser } from "../../components/ModalAddUser/ModalAddUser.jsx";

export default function AddUserPages({
  setColor,
  setIsClick,
  isClick,
}) {

  return (
    <div className={css.containerAddUserPages}>
      <h3 className={css.title}>Form updata user</h3>
      <ModalAddUser
        isClick={isClick}
        setIsClick={setIsClick}
        setColor={setColor}
      />
    </div>
  );
}