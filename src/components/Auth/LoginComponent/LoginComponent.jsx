// import css from "./LoginComponent.module.css";
import { useNavigate } from "react-router-dom";

export default function LoginComponent() {
    const navigate = useNavigate();
    const handleClick = () => {
        console.log(`Click Login`)
        navigate(`/users`)
        return
  }
      const handleClickBack = () => {
        console.log(`Click back`);
        navigate(`/`);
        return;
      };

    return (
      <div>
        <h4>Login</h4>
        <button onClick={handleClick}>Go</button>
        <button onClick={handleClickBack}>back</button>
      </div>
    );
}