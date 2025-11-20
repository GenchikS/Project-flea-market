import css from "./AdminPages.module.css"
import { AppBar } from '../../components/AppBar/AppBar.jsx';
import AnnouncementPages from '../AnnouncementPages/AnnouncementPages.jsx';

export const AdminPages = ({ setMarker, pathTo, isModalOpen, setIsModalOpen }) => {
//   console.log(`isModalOpen`, isModalOpen);
  return (
    <div className={css.adminPages}>
      <AppBar />
      {isModalOpen ? null : (
        <AnnouncementPages
          setMarker={setMarker}
          pathTo={pathTo}
          setIsModalOpen={setIsModalOpen}
        />
      )}
    </div>
  );
};

