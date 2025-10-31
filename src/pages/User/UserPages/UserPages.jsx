import css from "./UserPages.module.css"
import { Button } from "../../../components/Button/Button.jsx"

export default function UserPages({ setIsClick, setUserAdd }) {
  const handleClick = () => {
    setIsClick(true);
    setUserAdd(true);
    return;
  };
  return (
    <div className={css.containerUserPages}>
      <h4>UserPages</h4>
      <Button value="addUser" onClick={handleClick}>
        Add user
      </Button>
    </div>
  );
}