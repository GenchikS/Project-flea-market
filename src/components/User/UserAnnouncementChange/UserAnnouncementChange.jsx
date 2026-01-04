
import css from "./UserAnnouncementChange.module.css"
import { ButtonUserDate } from "../../Button/ButtonUserDate.jsx";
import { useNavigate } from "react-router-dom";

export default function UserAnnouncementChange({
  setMarker,
  setIsModalOpen,
  idAnnouncement,
  setIdAnnouncement,
}) {
  const navigate = useNavigate();
  // console.log(`pathTo`, pathTo);

  const handleClick = (evn) => {
    // console.log(`evn:`, evn);
    switch (evn) {
      case `updataAnnouncements`:
        setIdAnnouncement(idAnnouncement);
        setMarker(true);
        setIsModalOpen(true);
        navigate(`/user/announcement/updata`);
        // console.log(`evn updateUser`, evn);
        break;
      case `deleteAnnouncements`:
        setMarker(false);
        setIsModalOpen(true);
        setIdAnnouncement(idAnnouncement);
        navigate(`/user/announcement/delete`);
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
          <ButtonUserDate
            value="updataAnnouncements"
            onClick={handleClick}
            setIsModalOpen={setIsModalOpen}
          >
            редагувати
          </ButtonUserDate>
        </li>
        <li>
          <ButtonUserDate
            // type="submit"
            value="deleteAnnouncements"
            onClick={handleClick}
            setIsModalOpen={setIsModalOpen}
          >
            видалити
          </ButtonUserDate>
        </li>
      </ul>
    </div>
  );
}