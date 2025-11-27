import { NavLink, useNavigate } from "react-router-dom";
import css from "./DeleteUser.module.css";
import { fetchArticleDeleteUser } from "../../../../api/articles-api.js";
import ButtonModalUser from "../ButtonModalUser/ButtonModalUser.jsx";

export const DeleteUser = ({ pathTo, setIsModalOpen, setError }) => {
  const navigate = useNavigate();
  const handleSubmit = async (evt) => {
    evt.preventDefault();
    const form = evt.target;
    const idUser = evt.target.id.value;
    if (idUser.trim() === "") {
      alert("Please enter search term!");
      return;
    }
    const id = idUser.toLowerCase();
    const user = await fetchArticleDeleteUser(id);
    if (user.message) {
      setError(user.data);
      // console.log(`user`, user.data);
      form.reset();
      return navigate(`/admin/users/error`);
    }

    form.reset();
    navigate(`/admin/users/done`);
  };
  return (
    <div className={css.containerModalDeleteUser}>
      <h3 className={css.title}>Форма видалення користувача</h3>
      <form className={css.formContainer} onSubmit={handleSubmit}>
        <p className={css.markerRed}>*</p>
        <label className={css.label}>id користувача</label>
        <input
          className={css.userId}
          type="text"
          name="id"
          placeholder="вкажіть id користувача"
        />
        <ButtonModalUser pathTo={pathTo} setIsModalOpen={setIsModalOpen} />
      </form>
    </div>
  );
};