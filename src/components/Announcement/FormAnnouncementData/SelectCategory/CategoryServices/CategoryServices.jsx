// import { useId } from "react";
import { useId } from "react";
import css from "./CategoryServices.module.css";
export default function CategoryServices({ setCategory, category, marker }) {
  const selectCategoryId = useId();
  return (
    <div className={css.containerCategory}>
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
          - - - 
        </option>
        <option className={css.option} value="taxi">
          auto/taxi
        </option>
        <option className={css.option} value="beauty">
          beauty
        </option>
        <option className={css.option} value="other">
          other
        </option>
      </select>
    </div>
  );
}