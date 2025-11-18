import css from "./FormUpdataId.module.css";

export const FormUpdataId = ({ setIdAnnoun, idAnnoun }) => {
  return (
    <div className={css.containerFormAddId}>
      <p className={css.markerRed}>*</p>
      <label className={css.labelId}>id announcement:</label>
      <input
        className={css.inputAddId}
        onBlur={(value) => setIdAnnoun(value.target.value)}
        type="text"
        id="idUser"
        name={idAnnoun}
        placeholder="input id announcement"
        required
      />
    </div>
  );
};
