// import { useId } from "react";
import { useId } from "react";
import PurchaseSale from "../PurchaseSale/PurchaseSale.jsx";
import css from "./CategoryAuto.module.css";
export default function CategoryHousing({ set, category, purchaseSale, marker, sourse }) {
  const { setCategory } = set;
  const selectCategoryId = useId();
  return (
    <div className={css.containerCategory}>
      {sourse ?? (
        <PurchaseSale set={set} purchaseSale={purchaseSale} marker={marker} />
      )}
      <p className={!marker ? css.markerRed : css.markerGreen}>*</p>
      <label className={css.label} htmlFor={selectCategoryId}>
        choose category
      </label>
      <select
        className={css.selectCategory}
        id={selectCategoryId}
        name={category}
        onChange={(evt) => setCategory(evt.target.value)}
      >
        <option className={css.option} value="">
          - - -{" "}
        </option>
        <option className={css.option} value="auto">
          auto
        </option>
        <option className={css.option} value="motorcycle">
          motorcycle
        </option>
        <option className={css.option} value="other">
          other
        </option>
      </select>
    </div>
  );
}