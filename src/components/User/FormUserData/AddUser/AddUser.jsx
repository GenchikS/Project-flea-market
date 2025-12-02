import { useNavigate } from "react-router-dom";
import css from "./AddUser.module.css";
// import * as Yup from "yup";
import { useId, useState } from "react";
import { fetchArticleAddUser } from "../../../../api/articles-api.js";
import ButtonModalUser from "../ButtonModalUser/ButtonModalUser.jsx";

// const validationUserSchema = Yup.object().shape({
//   name: Yup.string()
//     .min(2, "To short!")
//     .max(15, "To long")
//     .required("Requred!"),
//   email: Yup.string().email().required("Requred!"),
// });

export default function AddUser({ pathTo, setIsModalOpen, setError }) {
  const navigate = useNavigate();

  // const [idUser, setIdUser] = useState("");
  const [AddUserValue, setAddUserValue] = useState({
    name: "",
    email: "",
    password: "",
  });

  // const [nameUser, setNameUser] = useState("");
  // const [emailUser, setEmailUser] = useState("");
  // const [phoneUser, setPhoneUser] = useState("");

  // const initialValues = {
  //   name: "",
  //   email: "",
  //   phone: "",
  // };

  const nameFieldId = useId();
  const emailFieldId = useId();
  const passwordFieldId = useId();

  const handleChange = (event) => {
    // event.preventDefault();
    setAddUserValue({
      ...AddUserValue,
      [event.target.name]: event.target.value,
    });
  };

  const hahdleSubmit = async (event) => {
    event.preventDefault();
    const { name, email, password } = AddUserValue;
    const nameEnd = name.toLowerCase();
    const emailEnd = email.toLowerCase();
    const passwordEnd = password.toLowerCase();
    const value = { name: nameEnd, email: emailEnd, password: passwordEnd };
    // console.log(`value`, value);

    const userAdd = await fetchArticleAddUser(value);
      console.log(`userAdd`, userAdd.data);

    if (userAdd.message) {
      console.log(`userAdd`, userAdd.data);
      setError(userAdd.data);
      document.formUser.reset();
      return navigate(`/admin/users/error`);
    }

    document.formUser.reset();
    return navigate(`/admin/users/done`);
  };

  return (
    <div className={css.containerAddUser}>
      <h3 className={css.title}>Форма додавання користувача</h3>
      <form
        className={css.listAddUser}
        name="formUser"
        type="submit"
        onSubmit={hahdleSubmit}
      >
        <p className={css.markerNameRed}>*</p>
        <label className={css.label} htmlFor={nameFieldId}>
          ім'я
        </label>
        <input
          className={css.username}
          type="text"
          name="name"
          value={AddUserValue.name}
          onChange={handleChange}
        />
        <p className={css.markerRed}>*</p>
        <label className={css.label} htmlFor={emailFieldId}>
          email
        </label>
        <input
          className={css.userEmail}
          type="email"
          name="email"
          value={AddUserValue.email}
          onChange={handleChange}
        />
        <p className={css.markerRed}>*</p>
        <label className={css.label} htmlFor={passwordFieldId}>
          пароль
        </label>
        <input
          className={css.userPassword}
          type="text"
          name="password"
          value={AddUserValue.password}
          onChange={handleChange}
        />

        <ButtonModalUser pathTo={pathTo} setIsModalOpen={setIsModalOpen} />
      </form>
    </div>
  );
}
