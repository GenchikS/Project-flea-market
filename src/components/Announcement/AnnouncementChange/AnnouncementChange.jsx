
import css from "./AnnouncementChange.module.css"
import { ButtonUserDate } from "../../Button/ButtonUserDate.jsx";
import { useNavigate } from "react-router-dom";

export default function AnnouncementChange() {
      const navigate = useNavigate();

      const handleClick = (evn) => {
        // console.log(`evn`, evn);
        switch (evn) {
          case `addAnnouncement`:
            navigate(`/add/announcement`);
            // console.log(`evn addUser`, evn);
            break;
          case `updataAnnouncement`:
            // navigate(`/updata/announcement`);
            // console.log(`evn updateUser`, evn);
            break;
          case `deleteAnnouncement`:
            // navigate(`/delete/announcement`);
            break;
          default:
            navigate(`/announcement`);
            break;
        }
        return;
      };
    return (
      <div className={css.buttonAnnouncementContainer}>
        <ul className={css.listButtonAnnouncement}>
          <li>
            <ButtonUserDate value="addAnnouncement" onClick={handleClick}>
              add announcement
            </ButtonUserDate>
          </li>
          <li>
            <ButtonUserDate value="updataAnnouncement" onClick={handleClick}>
              updata announcement
            </ButtonUserDate>
          </li>
          <li>
            <ButtonUserDate value="deleteAnnouncement" onClick={handleClick}>
              delete announcement{" "}
            </ButtonUserDate>
          </li>
        </ul>
      </div>
    );
}