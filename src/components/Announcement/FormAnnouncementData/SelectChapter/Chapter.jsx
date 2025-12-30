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
        оберіть розділ
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
        <option className={css.option} value="автомобіль">
          автомобіль
        </option>
        <option className={css.option} value="робота">
          робота
        </option>
        <option className={css.option} value="нерухомість">
          нерухомість
        </option>
        <option className={css.option} value="техніка">
          техніка
        </option>
        <option className={css.option} value="сад">
          сад та город
        </option>
        <option className={css.option} value="послуги">
          послуги
        </option>
        <option className={css.option} value="тварини">
          тварини
        </option>
        <option className={css.option} value="різне">
          різне
        </option>
        <option className={css.option} value="дарую">
          дарую
        </option>
      </select>
    </div>
  );
}