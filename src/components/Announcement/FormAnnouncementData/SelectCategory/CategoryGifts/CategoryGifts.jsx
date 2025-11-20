import { useId } from "react";
import css from "./CategoryGifts.module.css";
import PurchaseSale from "../PurchaseSale/PurchaseSale.jsx";


export default function CategoryGifts({ setCategory, category, marker }) {
  // const { setCategory } = set;
  const selectCategoryId = useId();
  return (
    <div className={css.containerCategory}>
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
        <option className={css.option} value="animals">
          animals
        </option>
        <option className={css.option} value="tools">
          tools
        </option>
        <option className={css.option} value="other">
          other
        </option>
      </select>
    </div>
  );
}