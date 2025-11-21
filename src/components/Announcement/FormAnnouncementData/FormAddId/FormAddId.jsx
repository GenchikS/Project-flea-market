import css from "./FormAddId.module.css"

export const FormAddId = ({ setIdUser, idUser }) => {
  return (
    <div className={css.containerFormAddId}>
      <p className={css.markerRed}>*</p>
      <label className={css.labelId}>id користувача:</label>
      <input
        className={css.inputAddId}
        onBlur={(value) => setIdUser(value.target.value)}
        type="text"
        id="idUser"
        name={idUser}
        placeholder="вкажіть id користувача"
        required
      />
    </div>
  );
};
