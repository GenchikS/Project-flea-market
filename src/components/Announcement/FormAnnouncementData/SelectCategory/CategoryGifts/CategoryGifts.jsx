// import { useId } from "react";
import css from "./CategoryGifts.module.css";
import PurchaseSale from "../PurchaseSale/PurchaseSale.jsx";


export default function CategoryGifts({
  set,
  // category,
  purchaseSale, marker }) {
  // const { setCategory } = set;
  // const selectCategoryId = useId();
  return (
    <div className={css.containerCategory}>
      <PurchaseSale set={set} purchaseSale={purchaseSale} marker={ marker} />
      {/* <label className={css.label} htmlFor={selectCategoryId}>
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
        <option className={css.option} value="dogs">
          Dog
        </option>
        <option className={css.option} value="cats">
          Cats
        </option>
        <option className={css.option} value="other">
          Other
        </option>
      </select> */}
    </div>
  );
}