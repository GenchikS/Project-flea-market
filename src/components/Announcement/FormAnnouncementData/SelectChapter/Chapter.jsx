import css from "./Chapter.module.css"
import { useId } from "react";


export default function Chapter({ setChapter, setCategory, chapter, marker }) {
  const selectCarterId = useId();
  const handleChange = (evt) => {
    setCategory("");
    setChapter(evt.target.value);
   }
  
  return (
    <div className={css.containerChapter}>
      <p className={!marker ? css.markerRed : css.markerGreen}>*</p>
      <label className={css.label} htmlFor={selectCarterId}>
        choose chapter
      </label>
      <select
        className={css.selectChapter}
        id="selectCarterId"
        name={chapter}
        onChange={handleChange}
      >
        <option className={css.option} value="">
          - - -
        </option>
        <option className={css.option} value="auto">
          Auto
        </option>
        <option className={css.option} value="work">
          Work
        </option>
        <option className={css.option} value="housing">
          Housing
        </option>
        <option className={css.option} value="services">
          Services
        </option>
        <option className={css.option} value="animals">
          Animals
        </option>
        <option className={css.option} value="differents">
          Differents
        </option>
        <option className={css.option} value="gifts">
          Gifts
        </option>
      </select>
    </div>
  );
}