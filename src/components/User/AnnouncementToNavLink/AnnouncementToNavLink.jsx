import { NavLink } from "react-router-dom";
import css from "./AnnouncementToNavLink.module.css";

export default function AnnouncementToNavLink() {
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