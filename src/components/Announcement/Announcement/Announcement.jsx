import { NavLink } from "react-router-dom";
import css from "./Announcement.module.css"

export default function Announcement() {
    return (
      <nav>
        <NavLink to="/announcements">
          <div className={css.containerAnnouncement}>
            <p className={css.titleAnnouncement}>Announcements users pages</p>
          </div>
        </NavLink>
      </nav>
    );
}