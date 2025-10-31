import clsx from "clsx";
import "./Button.css";

export const Button = ({ color, onClick, children }) => {

    return (
      <div>
        {/* <button className={clsx(`button`, color)} onClick={handleClick}>{children}</button> */}
        {/* <button className={clsx(`button`, color)} onClick={()=>console.log(`click ${color}`) }>{children}</button> */}
        <button className={clsx(`button`, color)} onClick={()=>onClick(color)}>{children}</button>

      </div>
    );
};