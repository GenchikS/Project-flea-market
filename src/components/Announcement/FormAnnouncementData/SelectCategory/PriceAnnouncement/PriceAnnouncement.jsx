import css from "./PriceAnnouncement.module.css";

export const PriceAnnouncement = ({ setPrice, marker }) => {
  return (
    <div className={css.containerFormAddPrice}>
      <p className={!marker ? css.markerRed : css.markerGreen}>*</p>
      <label className={css.labelPrice}>ціна:</label>
      <input
        className={css.inputAddPrice}
        onBlur={(value) => setPrice(value.target.value)}
        type="text"
        id="idPrice"
        name="price"
        placeholder="вкажіть бажану ціну"
      />
    </div>
  );
};