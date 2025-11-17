import css from "./DeleteAnnouncement.module.css";
import { NavLink, useNavigate } from "react-router-dom";
// import * as Yup from "yup";
import { fetchArticleDeleteAnnouncement } from "../../../../api/articlesAnnouncements-api.js";

// const validationUserSchema = Yup.object().shape({
//   id: Yup.string().required("Requred!"),
// });

export const DeleteAnnouncement = () => {
  const navigate = useNavigate();

  const handleSubmit = (evt) => {
    evt.preventDefault();
    const form = evt.target;
    const idAnnouncement = evt.target.id.value;
    // console.log(`idAnnouncement`, idAnnouncement);
    if (idAnnouncement.trim() === "") {
      alert("Please enter search term!");
      return;
    }
    const name = idAnnouncement.toLowerCase();
    fetchArticleDeleteAnnouncement(name);
    form.reset();
     navigate(`/announcement/done`);
  };

  return (
    <div className={css.containerModalDeleteAnnouncement}>
      <h3 className={css.title}>Form delete announcement</h3>
      <form className={css.formContainer} onSubmit={handleSubmit}>
        <p className={css.markerRed}>*</p>
        <label className={css.label}>id announcement</label>
        <input
          className={css.announcementId}
          type="text"
          name="id"
          placeholder="input id announcement"
        />
        <div className={css.containerModalDelete}>
          <button className={css.green} type="submit">
            Done
          </button>
          <nav>
            <NavLink to="/announcements">
              <button className={css.red} type="button">
                Cencel
              </button>
            </NavLink>
          </nav>
        </div>
      </form>
    </div>
  );
};
