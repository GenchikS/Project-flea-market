import css from "./DeleteAnnouncement.module.css";
import { NavLink, useNavigate } from "react-router-dom";
// import * as Yup from "yup";
import { fetchArticleDeleteAnnouncement } from "../../../../api/articlesAnnouncements-api.js";
import ButtonModalAnnouncement from "../ButtonModalAnnouncement/ButtonModalAnnouncement.jsx";

// const validationUserSchema = Yup.object().shape({
//   id: Yup.string().required("Requred!"),
// });

export const DeleteAnnouncement = ({ pathTo, setIsModalOpen, setError }) => {
  const navigate = useNavigate();

  const handleSubmit = async (evt) => {
    evt.preventDefault();
    const form = evt.target;
    const idAnnouncement = evt.target.id.value;
    // console.log(`idAnnouncement`, idAnnouncement);
    if (idAnnouncement.trim() === "") {
      alert("Вкажіть id оголошення!");
      return;
    }
    const id = idAnnouncement.toLowerCase();

    const responseDelete = await fetchArticleDeleteAnnouncement(id);
    if (responseDelete.message) {
      setError(responseDelete.data);
      return navigate(`/admin/announcement/error`);
    }

    form.reset();
    navigate(`/admin/announcement/done`);
  };

  return (
    <div className={css.containerModalDeleteAnnouncement}>
      <h3 className={css.title}>Форма видалення оголошень</h3>
      <form className={css.formContainer} onSubmit={handleSubmit}>
        <p className={css.markerRed}>*</p>
        <label className={css.label}>id оголошення</label>
        <input
          className={css.announcementId}
          type="text"
          name="id"
          placeholder="вкажіть id оголошення"
        />
        <ButtonModalAnnouncement
          type="submit"
          pathTo={pathTo}
          setIsModalOpen={setIsModalOpen}
        />
      </form>
    </div>
  );
};
