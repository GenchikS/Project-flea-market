// import { useId } from "react";
import { useId } from "react";
import css from "./CategoryAnimals.module.css";
export default function CategoryAnimals({ setCategory, category, marker }) {
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
        <option className={css.option} value="dogs">
          dog
        </option>
        <option className={css.option} value="cats">
          cats
        </option>
        <option className={css.option} value="other">
          other
        </option>
      </select>
    </div>
  );
}