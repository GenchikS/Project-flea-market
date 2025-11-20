import { NavLink, useNavigate } from "react-router-dom";
import css from "./DeleteUser.module.css";
import { fetchArticleDeleteUser } from "../../../../api/articles-api.js";
import ButtonModalUser from "../ButtonModalUser/ButtonModalUser.jsx";

export const DeleteUser = ({ pathTo, setIsModalOpen }) =>{
  const navigate = useNavigate();
  const handleSubmit = (evt) => {
    evt.preventDefault();
    const form = evt.target;
    const idUser = evt.target.id.value;
    // console.log(`idAnnouncement`, idAnnouncement);
    if (idUser.trim() === "") {
      alert("Please enter search term!");
      return;
    }
    const name = idUser.toLowerCase();
    fetchArticleDeleteUser(name);
    form.reset();
    navigate(`/admin/users/done`);
  };
  return (
    <div className={css.containerModalDeleteUser}>
      <h3 className={css.title}>Form delete user</h3>
      <form className={css.formContainer} onSubmit={handleSubmit}>
        <p className={css.markerRed}>*</p>
        <label className={css.label}>id user</label>
        <input
          className={css.userId}
          type="text"
          name="id"
          placeholder="input id user"
        />
        <ButtonModalUser pathTo={pathTo} setIsModalOpen={setIsModalOpen} />
      </form>
    </div>
  );
}