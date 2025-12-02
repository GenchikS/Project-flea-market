import { useNavigate } from "react-router-dom";
import css from "./LoginUser.module.css";
import { Field, Form, Formik } from "formik";
import * as Yup from "yup";
import { useId } from "react";
import { fetchArticleLoginUser } from "../../../api/articles-api.js";
import ButtonRegisterAddUser from "../../ButtonRegisterAddUser/ButtonRegisterAddUser.jsx";

// const validationUserSchema = Yup.object().shape({
//     email: Yup.string().email().required("Обов'язково!"),
//     password: Yup.string().min(5, "Занадто коротке!").required("Обов'язково!"),
// });

export default function LoginUser({ setUser, setIsLogin }) {
  const navigate = useNavigate();

  const initialValues = {
    email: "",
    password: "",
  };

  const emailFieldId = useId();
  const passwordFieldId = useId();

  const hahdleSubmit = async (value, actions) => {
    // console.log(`value`, value);
    const { email, password } = value;
    const emailEnd = email.toLowerCase();
    const passwordEnd = password.toLowerCase();

    const user = await fetchArticleLoginUser({
      email: emailEnd,
      password: passwordEnd,
    });

    if (user) {
      // console.log(`user`, user);
      setUser(user);
      setIsLogin(true);
    }

    // console.log(`value`, value);
    actions.resetForm();
    navigate(`/`);
  };

  return (
    <div className={css.containerModalAddUser}>
      <h3 className={css.title}>Вхід</h3>
      <Formik
        initialValues={initialValues}
        onSubmit={hahdleSubmit}
        // validationSchema={validationUserSchema}
      >
        <Form className={css.formContainer}>
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
            />
          </div>
          <ButtonRegisterAddUser />
        </Form>
      </Formik>
    </div>
  );
}
