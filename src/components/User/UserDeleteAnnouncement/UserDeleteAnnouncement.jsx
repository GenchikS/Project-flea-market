import { fetchArticleDeleteAnnouncement } from "../../../api/articlesAnnouncements-api.js";
import ButtonModalAnnouncement from "../../Announcement/FormAnnouncementData/ButtonModalAnnouncement/ButtonModalAnnouncement.jsx";
import css from "./UserDeleteAnnouncement.module.css";
import { useNavigate } from "react-router-dom";

export const UserDeleteAnnouncement = ({
  pathTo,
  setIsModalOpen,
  setError,
  setResponseMessage,
  idAnnouncement,
}) => {
  const navigate = useNavigate();

  const handleSubmit = async (evt) => {
    evt.preventDefault();
    // console.log("idAnnouncement", idAnnouncement);
    
    const responseDelete = await fetchArticleDeleteAnnouncement(idAnnouncement);
    // console.log(`responseDelete`, responseDelete);

    if (responseDelete.data.error) {
      setError(responseDelete.data.error);
      return navigate(`/user/announcement/error`);
    }

    if (responseDelete) {
      const deleteAnnouncement = "Оголошення видалено!";
      // console.log(`deleteAnnouncement`, deleteAnnouncement);
      setResponseMessage(deleteAnnouncement);
    }
    navigate(`/user/announcement/done`);
  };

  return (
    <div className={css.containerModalDeleteAnnouncement}>
      <h3 className={css.title}>Видалення оголошення</h3>
      <form className={css.formContainer} onSubmit={handleSubmit}>
        <ButtonModalAnnouncement
          type="submit"
          pathTo={pathTo}
          setIsModalOpen={setIsModalOpen}
        />
      </form>
    </div>
  );
};
