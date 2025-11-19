import css from "./AutoPages.module.css";

import { useNavigate } from "react-router-dom";

export default function AutoPages() { 
    const navigate = useNavigate();
    const handleClickBack = () => {
    console.log(`Click back`);
    navigate(`/`);
    return;
    };
    return (
        <div>
            <h4>AutoPages</h4>
            <button onClick={handleClickBack}>back</button>
        </div>);
}