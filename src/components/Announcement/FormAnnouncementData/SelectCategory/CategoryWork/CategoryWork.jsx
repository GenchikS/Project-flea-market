// import { useId } from "react";
import { useId } from "react";
import css from "./CategoryWork.module.css";
export default function CategoryWork({ setCategory, category, marker }) {
  const selectCategoryId = useId();
  const handleChange = (evt) => {
    // console.log(`evt`, evt.target.value);
    setCategory(evt.target.value);
  };
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
        onChange={handleChange}
      >
        <option className={css.option} value="">
          - - -{" "}
        </option>
        <option className={css.option} value="offer">
          offer
        </option>
        <option className={css.option} value="search">
          search
        </option>
        <option className={css.option} value="other">
          other
        </option>
      </select>
    </div>
  );
}