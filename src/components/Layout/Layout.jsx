import css from "./Layout.module.css"
import { AppBar } from "../AppBar/AppBar.jsx";
// import css from "./Layout.module.css";

export default function Layout({ children, user }) {
  return (
    <div className ={css.containerLayout}>
      <AppBar user={user} />
      {children}
      {/* {<Outlet/>}  children можна замінити на Outlet, результат не зміниться */}
    </div>
  );
}
