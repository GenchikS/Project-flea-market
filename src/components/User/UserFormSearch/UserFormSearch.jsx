import { ButtonUserDate } from "../../Button/ButtonUserDate.jsx";
import css from "./UserFormSearch.module.css"
export default function UserFormSearch({ handleSearch, placeholder, name }) {
// console.log(`name`, name);
  
  const handleSubmit = (evt) => {
    evt.preventDefault();
    const form = evt.target;
    const userSearch = form.elements.name.value;
    // console.log(`form`, form);
    // console.log(`userSearch`, userSearch);
    if (form.elements.name.value.trim() === "") {
      alert("Please enter search term!");
      return;
    }
    handleSearch(userSearch);
    form.reset();
  };
  return (
    <form className={css.formSearch} onSubmit={handleSubmit}>
      <input
        className={css.formInput}
        type="text"
        name={name}
        placeholder={placeholder}
      />
      <ButtonUserDate type="submit" value="search">
        Search
      </ButtonUserDate>
    </form>
  );
}