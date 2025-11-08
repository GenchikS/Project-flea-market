import clsx from "clsx";
import "./ButtonUserDate.css";
import { NavLink } from "react-router-dom";

export const ButtonUserDate = ({ value, onClick, children, type }) => {
    return (
      <div>
        {/* <button className={clsx(`button`, color)} onClick={handleClick}>{children}</button> */}
        {/* <button className={clsx(`button`, color)} onClick={()=>console.log(`click ${color}`) }>{children}</button> */}
        {type === "submit" ? (
            <button type="submit" className={clsx(`button`, value)}>
                {children}
              </button>
           ) : (
          <button
            type="button"
            className={clsx(`button`, value)}
            onClick={() => onClick(value)}
          >
            {children}
          </button>
        )}
      </div>
    );
  };