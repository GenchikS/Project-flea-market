import css from "./ProductAnnouncementPages.module.css";
import { AppBar } from '../../components/AppBar/AppBar.jsx';
import { UserName } from "../../components/UserName/UserName.jsx";
export const ProductAnnouncementPages = ({ user, isLogin }) => {
  return (
    <div className={css.containerAll}>
      {!isLogin ? <AppBar /> : <UserName user={ user} />}
    </div>
  );
};