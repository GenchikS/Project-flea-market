// import { useId } from "react";
import { useId } from "react";
import css from "./CategoryServices.module.css";
export default function CategoryServices({ setCategory, category }) {
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
        <option className={css.option} value="all">
          All
        </option>
        <option className={css.option} value="taxi">
          Auto/Taxi
        </option>
        <option className={css.option} value="beauty">
          Beauty
        </option>
        <option className={css.option} value="other">
          Other
        </option>
      </select>
    </div>
  );
}