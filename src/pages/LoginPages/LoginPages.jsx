import { useNavigate } from "react-router-dom";

export default function LoginPages() {
    const navigate = useNavigate();
    const handleClick = () => {
        console.log(`Click Login`)
        navigate(`/users`)
        return
    }
    return (
      <div>
        <h4>Login</h4>
        <button onClick={handleClick} >Go</button>
      </div>
    );
}