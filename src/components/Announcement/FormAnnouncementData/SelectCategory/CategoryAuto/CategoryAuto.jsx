import { useId } from "react";
import css from "./CategoryAuto.module.css";
import PurchaseSale from "../PurchaseSale/PurchaseSale.jsx";
export default function CategoryAuto({ set, category, purchaseSale, marker }) {
  const { setCategory } = set;
  // const { category } = category;
  const selectCategoryId = useId();
  return (
    <div className={css.containerCategory}>
      <PurchaseSale set={set} purchaseSale={purchaseSale} marker={ marker} />
      <p className={!marker ? css.markerRed : css.markerGreen}>*</p>
      <label className={css.label} htmlFor={selectCategoryId}>
        choose category
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
        <option className={css.option} value="car">
          Car
        </option>
        <option className={css.option} value="motorcycle">
          Motorcycle
        </option>
        <option className={css.option} value="other">
          Other
        </option>
      </select>
    </div>
  );
}