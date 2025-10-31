import clsx from "clsx";
import "./Button.css";

export const Button = ({ value, onClick, children }) => {
return (
    <div>
      {/* <button className={clsx(`button`, color)} onClick={handleClick}>{children}</button> */}
      {/* <button className={clsx(`button`, color)} onClick={()=>console.log(`click ${color}`) }>{children}</button> */}
      <button
        className={clsx(`button`, value)}
        onClick={() => onClick(value)}
        type="submit"
      >
        {children}
      </button>
    </div>
  );
};