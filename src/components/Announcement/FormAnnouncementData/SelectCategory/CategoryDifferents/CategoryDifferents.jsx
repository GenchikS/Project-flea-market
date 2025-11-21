// import { useId } from "react";
// import { useId } from "react";
import css from "./CategoryDifferents.module.css";
import PurchaseSale from "../PurchaseSale/PurchaseSale.jsx";
import { useId } from "react";


export default function CategoryDifferents({
  set,
  category,
  purchaseSale, marker }) {
  const { setCategory } = set;
  const selectCategoryId = useId();
  return (
    <div className={css.containerCategory}>
      <PurchaseSale set={set} purchaseSale={purchaseSale} marker={marker} />
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
        <option className={css.option} value="інструмент">
          інструмент
        </option>
        <option className={css.option} value="меблі">
          меблі
        </option>
        <option className={css.option} value="інше">
          інше
        </option>
      </select>
    </div>
  );
}