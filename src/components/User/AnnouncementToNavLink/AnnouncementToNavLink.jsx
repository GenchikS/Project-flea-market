import { NavLink } from "react-router-dom";
import css from "./AnnouncementToNavLink.module.css";

export default function AnnouncementToNavLink() {
    return (
      <nav>
        <NavLink to="/admin">
          <div className={css.containerAnnouncement}>
            <p className={css.titleAnnouncement}>Admin announcements pages</p>
          </div>
        </NavLink>
      </nav>
    );
}