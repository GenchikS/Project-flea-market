import { ButtonUserDate } from "../../Button/ButtonUserDate.jsx";
import css from "./UserFormSearchName.module.css"
export default function UserFormSearch({ onSearch, placeholder }) {
  const handleSubmit = (evn) => {
    evn.preventDefault();
    const form = evn.target;
    const userSearch = form.elements.user.value;
    // console.log(`form`, form);
    console.log(`userSearch`, userSearch);
    form.reset();
  };
  return (
    <form className={css.formSearch} onSubmit={handleSubmit}>
      <input
        className={css.formInput}
        type="text"
        name="user"
        placeholder={placeholder}
      />
      <ButtonUserDate type="submit" value="search">
        Search
      </ButtonUserDate>
    </form>
  );
}