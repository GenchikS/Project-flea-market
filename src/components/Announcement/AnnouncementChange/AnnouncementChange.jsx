
import css from "./AnnouncementChange.module.css"
import { ButtonUserDate } from "../../Button/ButtonUserDate.jsx";
import { useNavigate } from "react-router-dom";

export default function AnnouncementChange({ setMarker }) {
      const navigate = useNavigate();

      const handleClick = (evn) => {
        // console.log(`evn`, evn);
        switch (evn) {
          case `addAnnouncements`:
            setMarker(false);
            navigate(`/announcement/add`);
            console.log(`evn addUser`, evn);
            break;
          case `updataAnnouncements`:
            setMarker(true);
            navigate(`/updata/announcement`);
            // console.log(`evn updateUser`, evn);
            break;
          case `deleteAnnouncements`:
            setMarker(false);
            // console.log(`evn deleteUser`, evn);
            // navigate(`/delete/announcements`);
            break;
          default:
            navigate(`/announcements`);
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