import { useId } from "react";
import css from "./CategoryGifts.module.css";
import PurchaseSale from "../PurchaseSale/PurchaseSale.jsx";


export default function CategoryGifts({ setCategory, category, marker }) {
  const selectCategoryId = useId();
  return (
    <div className={css.containerCategory}>
      <p className={!marker ? css.markerRed : css.markerGreen}>*</p>
      <label className={css.label} htmlFor={selectCategoryId}>
        оберіть категорію:
      </label>
      <select
        className={css.selectCategory}
        id="selectCategoryId"
        name={category}
        onChange={(evt) => setCategory(evt.target.value)}
      >
        <option className={css.option} value="">
          - - -
        </option>
        <option className={css.option} value="тварини">
          тварини
        </option>
        <option className={css.option} value="інструмент">
          інструменти
        </option>
        <option className={css.option} value="інше">
          інше
        </option>
      </select>
    </div>
  );
}