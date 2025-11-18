import css from "./FormAddId.module.css"

export const FormAddId = ({ setIdAnnoun, idAnnoun }) => {
  return (
    <div className={css.containerFormAddId}>
      <p className={css.markerRed}>*</p>
      <label className={css.labelId}>id user:</label>
      <input
        className={css.inputAddId}
        onBlur={(value) => setIdAnnoun(value.target.value)}
        type="text"
        id="idUser"
        name={idAnnoun}
        placeholder="input id user"
        required
      />
    </div>
  );
};
