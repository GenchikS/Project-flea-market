// import { useId } from "react";
import { useId } from "react";
import css from "./CategoryWork.module.css";
export default function CategoryHousing({ set, category }) {
   const { setCategory } = set;
  const selectCategoryId = useId();
  return (
    <div className={css.containerCategory}>
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
          - - -{" "}
        </option>
        <option className={css.option} value="offer">
          Offer
        </option>
        <option className={css.option} value="search">
          Search
        </option>
        <option className={css.option} value="other">
          Other
        </option>
      </select>
    </div>
  );
}