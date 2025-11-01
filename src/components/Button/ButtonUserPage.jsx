import clsx from "clsx";
import "./ButtonUserPage.css";

export const ButtonUserPage = ({ value, onClick, children }) => {
  return (
    <div>
      {/* <button className={clsx(`button`, color)} onClick={handleClick}>{children}</button> */}
      {/* <button className={clsx(`button`, color)} onClick={()=>console.log(`click ${color}`) }>{children}</button> */}
      <button
          type="button"
          className={clsx(`button`, value)}
          onClick={() => onClick(value)}
        >
          {children}
        </button>
    </div>
  );
};