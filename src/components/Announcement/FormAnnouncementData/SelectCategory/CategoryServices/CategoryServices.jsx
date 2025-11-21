// import { useId } from "react";
import { useId } from "react";
import css from "./CategoryServices.module.css";
export default function CategoryServices({ setCategory, category, marker }) {
  const selectCategoryId = useId();
  return (
    <div className={css.containerCategory}>
      <p className={!marker ? css.markerRed : css.markerGreen}>*</p>
      <label className={css.label} htmlFor={selectCategoryId}>
        оберіть категорію:
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
        <option className={css.option} value="таксі">
          авто/таксі
        </option>
        <option className={css.option} value="красота">
          красота/здоров'я
        </option>
        <option className={css.option} value="інше">
          інше
        </option>
      </select>
    </div>
  );
}