import { useNavigate } from "react-router-dom";
import css from "./RegisterAddUser.module.css";
import { Field, Form, Formik } from "formik";
import * as Yup from "yup";
import { useId, useState } from "react";
import { fetchArticleRegisterUser } from "../../../api/articles-api.js";
import ButtonRegisterAddUser from "../../ButtonRegisterAddUser/ButtonRegisterAddUser.jsx";
import MyComponent from "../../Loader/Loader.jsx";

// const validationUserSchema = Yup.object().shape({
//   name: Yup.string()
//     .min(2, "Занадто коротке!")
//     .max(15, "Занадто довге")
//     .required("Обов'язково!"),
//   email: Yup.string().email().required("Обов'язково!"),
//   password: Yup.string().min(5, "Занадто коротке!").required("Обов'язково!"),
// });

export default function RegisterAddUser({ setError }) {
  const [loadig, setLoading] = useState(false);
  const navigate = useNavigate();
  // console.log(`pathTo`, pathTo);

  const initialValues = {
    name: "",
    email: "",
    password: "",
  };

  const nameFieldId = useId();
  const emailFieldId = useId();
  const passwordFieldId = useId();

  const hahdleSubmit = async (value, actions) => {
    setLoading(true);
    // console.log(`value`, value);
    const { name, email, password } = value;
    
    // const nameEnd = name.toLowerCase();
    const emailEnd = email.toLowerCase();
    const passwordEnd = password.toLowerCase();

    const userAdd = await fetchArticleRegisterUser({
      name: name,
      email: emailEnd,
      password: passwordEnd,
    });
    // console.log(`userAdd`, userAdd);
    if (userAdd.message) {
    // console.log(`userAdd`, userAdd.data);
    setError(userAdd.data);
    setLoading(false);
    actions.resetForm();
    return navigate(`/auth/error`);
    }

    actions.resetForm();
    return navigate(`/auth/done`);
  };

  return (
    <div className={css.containerModalAddUser}>
      {!loadig && <h3 className={css.title}>Форма реєстрації користувача</h3>}
      {!loadig && (
        <Formik
          initialValues={initialValues}
          onSubmit={hahdleSubmit}
          // validationSchema={validationUserSchema}
        >
          <Form className={css.formContainer}>
            <div className={css.listContainer}>
              <p className={css.markerRedName}>*</p>
              <label className={css.label} htmlFor={nameFieldId}>
                ім'я
              </label>
              <Field
                className={css.username}
                type="text"
                name="name"
                id={nameFieldId}
                placeholder="вкажіть ім'я"
              />
            </div>
            <div className={css.listContainer}>
              <p className={css.markerRedEmail}>*</p>
              <label className={css.label} htmlFor={emailFieldId}>
                email
              </label>
              <Field
                className={css.email}
                type="email"
                name="email"
                id={emailFieldId}
                placeholder="email@email.com"
              />
            </div>
            <div className={css.listContainer}>
              <p className={css.markerRedPassword}>*</p>
              <label className={css.label} htmlFor={passwordFieldId}>
                пароль
              </label>
              <Field
                className={css.password}
                type="text"
                name="password"
                id={passwordFieldId}
                placeholder="мін 6 символів"
              />
            </div>
            <ButtonRegisterAddUser />
          </Form>
        </Formik>
      )}
      {loadig && (
              <div className={css.containerLoadingData}>
                <p className={css.textLoadingData}>Реєстрація ...</p>
                <MyComponent />
              </div>
            )}
    </div>
  );
}
