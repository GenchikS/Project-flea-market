import css from "./YarAnnouncement.module.css";

export const YarAnnouncement = ({ setYar, marker }) => {
  return (
    <div className={css.containerFormAddYar}>
      <p className={!marker ? css.markerRed : css.markerGreen}>*</p>
      <label className={css.labelYar}>рік:</label>
      <input
        className={css.inputAddYar}
        onBlur={(value) => setYar(value.target.value)}
        type="text"
        id="idYar"
        name="yar"
        placeholder="вкажіть рік ... (2012)"
      />
    </div>
  );
};