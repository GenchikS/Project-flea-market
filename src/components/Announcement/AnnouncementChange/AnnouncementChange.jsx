
import css from "./AnnouncementChange.module.css"
import { ButtonUserDate } from "../../Button/ButtonUserDate.jsx";
import { useNavigate } from "react-router-dom";

export default function AnnouncementChange({ setMarker, pathTo, setIsModalOpen }) {
  const navigate = useNavigate();
  // console.log(`pathTo`, pathTo);

  const handleClick = (evn) => {
    // console.log(`evn`, evn);
    switch (evn) {
      case `addAnnouncements`:
        setMarker(false);
        setIsModalOpen(true);
        navigate(`${pathTo}/announcement/add`);
        // console.log(`evn addUser`, evn);
        break;
      case `updataAnnouncements`:
        setMarker(true);
        setIsModalOpen(true);
        navigate(`${pathTo}/announcement/updata`);
        // console.log(`evn updateUser`, evn);
        break;
      case `deleteAnnouncements`:
        setMarker(false);
        setIsModalOpen(true);
        navigate(`${pathTo}/announcement/delete`);
        // console.log(`evn deleteUser`, evn);
        break;
      default:
        navigate(`/`);
        break;
    }
    return;
  };
  return (
    <div className={css.buttonAnnouncementContainer}>
      <ul className={css.listButtonAnnouncement}>
        <li>
          <ButtonUserDate value="addAnnouncements" onClick={handleClick}>
            add announcement
          </ButtonUserDate>
        </li>
        <li>
          <ButtonUserDate value="updataAnnouncements" onClick={handleClick}>
            updata announcement
          </ButtonUserDate>
        </li>
        <li>
          <ButtonUserDate value="deleteAnnouncements" onClick={handleClick}>
            delete announcement{" "}
          </ButtonUserDate>
        </li>
      </ul>
    </div>
  );
}