import clsx from "clsx";
import "./ButtonUserDate.css";

export const ButtonUserDate = ({ type, value, children }) => {
  return (
    <div>
      {/* <button className={clsx(`button`, color)} onClick={handleClick}>{children}</button> */}
      {/* <button className={clsx(`button`, color)} onClick={()=>console.log(`click ${color}`) }>{children}</button> */}
      <button type={type} className={clsx(`button`, value)}>
        {children}
      </button>
    </div>
  );
};