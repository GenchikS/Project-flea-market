import { NavLink } from "react-router-dom";
import css from "./Announcement.module.css"

export default function Announcement() {
    return (
      <nav>
        <NavLink to="/announcement">
          <div className={css.containerAnnouncement}>
            <p className={css.titleAnnouncement}>Announcement users pages</p>
          </div>
        </NavLink>
      </nav>
    );
}