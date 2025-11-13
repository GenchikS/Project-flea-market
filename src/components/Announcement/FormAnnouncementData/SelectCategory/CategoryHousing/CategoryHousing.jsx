// import { useId } from "react";
import { useId } from "react";
// import css from "./CategoryHousing.module.css";
export default function CategoryHousing({ setCategory, category }) {
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
        <option value="house">House</option>
        <option value="apartment">Apartment</option>
        <option value="other">Other</option>
      </select>
    </div>
  );
}