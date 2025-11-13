// import { useId } from "react";
import { useId } from "react";
import css from "./CategoryAuto.module.css";
export default function CategoryAuto({ setCategory, category }) {
  const selectCategoryId = useId();
  return (
    <div>
      <label htmlFor={selectCategoryId}>choose category</label>
      <select
        id="selectCategoryId"
        name={category}
        onChange={(evt) => setCategory(evt.target.value)}
      >
        <option value="all">All</option>
        <option value="car">Car</option>
        <option value="motorcycle">Motorcycle</option>
        <option value="other">Other</option>
      </select>
    </div>
  );
}