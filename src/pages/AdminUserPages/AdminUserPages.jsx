import css from "./AdminUserPages.module.css"
import { AppBar } from '../../components/AppBar/AppBar.jsx';
import UserPages from '../UserPages/UserPages.jsx';

export const AdminUserPages = ({
  setMarker,
  pathTo,
  setIsModalOpen,
}) => {
  //   console.log(`isModalOpen`, isModalOpen);
  return (
    <div className={css.adminUserPages}>
        <UserPages
          setMarker={setMarker}
          pathTo={pathTo}
          setIsModalOpen={setIsModalOpen}
        />
    </div>
  );
};