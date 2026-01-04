import { useId } from "react";
import PurchaseSale from "../PurchaseSale/PurchaseSale.jsx";
import css from "./CategoryHousing.module.css";
import { PriceAnnouncement } from "../PriceAnnouncement/PriceAnnouncement.jsx";
export default function CategoryHousing({ set, category, purchaseSale, marker, sourse }) {
  const { setCategory, setPrice } = set;
  const selectCategoryId = useId();
  return (
    <div className={css.containerCategory}>
      {sourse ?? (
        <PurchaseSale set={set} purchaseSale={purchaseSale} marker={marker} />
      )}
      <p className={!marker ? css.markerRed : css.markerGreen}>*</p>
      <label className={css.label} htmlFor={selectCategoryId}>
        оберіть категорію:
      </label>
      <select
        className={css.selectCategory}
        id={selectCategoryId}
        name={category}
        onChange={(evt) => setCategory(evt.target.value)}
      >
        <option className={css.option} value="">
          - - -
        </option>
        <option className={css.option} value="будинок">
          будинок
        </option>
        <option className={css.option} value="квартира">
          квартира
        </option>
        <option className={css.option} value="інше">
          інше
        </option>
      </select>
      <PriceAnnouncement setPrice={setPrice} marker={marker} />
    </div>
  );
}