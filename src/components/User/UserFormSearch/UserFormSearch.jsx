import { Formik } from "formik";
import { ButtonUserDate } from "../../Button/ButtonUserDate.jsx";
import css from "./UserFormSearch.module.css"
import * as Yup from "yup";


const SourchValidationSchema = Yup.object().shape({
  name: Yup.string().min(2, "To short!").max(15, "To long").required("Requred!")
});

export default function UserFormSearch({ handleSearch, placeholder, name }) {
  // console.log(`name`, name);
  
  const handleSubmit = (evt) => {
    evt.preventDefault();
    const form = evt.target;
    const userSearch = form.elements.name.value;
  if (form.elements.name.value.trim() === "") {
      alert("Please enter search term!");
      return;
    }
    const name = userSearch.toLowerCase();
    handleSearch(name);
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