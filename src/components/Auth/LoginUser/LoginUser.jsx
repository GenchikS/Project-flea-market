import { useNavigate } from "react-router-dom";
import css from "./LoginUser.module.css";
import { Field, Form, Formik } from "formik";
// import * as Yup from "yup";
import { useId, useState } from "react";
import { fetchArticleLoginUser } from "../../../api/articles-api.js";
import ButtonRegisterAddUser from "../../ButtonRegisterAddUser/ButtonRegisterAddUser.jsx";
import MyComponent from "../../Loader/Loader.jsx";
// import { AxiosHeaders } from "axios";




// const validationUserSchema = Yup.object().shape({
//     email: Yup.string().email().required("Обов'язково!"),
//     password: Yup.string().min(5, "Занадто коротке!").required("Обов'язково!"),
// });


export default function LoginUser({ setUser, setIsLogin }) {
  const [loadig, setLoading] = useState(false);
  const navigate = useNavigate();

  const initialValues = {
    email: "",
    password: "",
  };

  
  const emailFieldId = useId();
  const passwordFieldId = useId();


  const hahdleSubmit = async (value, actions) => {
    // console.log(`value`, value);
    setLoading(true);
    const { email, password } = value;
    const emailEnd = email.toLowerCase();
    const passwordEnd = password.toLowerCase();

    const user = await fetchArticleLoginUser({
      email: emailEnd,
      password: passwordEnd,
    });

    if (user) {
      // console.log(`login user.sessionId`, user.sessionId);
      localStorage.setItem("sessionId", JSON.stringify(user.sessionId));
      setUser(user.data);
      setIsLogin(true);
      setLoading(false);
    }
    // console.log(`value`, value);
    actions.resetForm();
    navigate(`/`);
  };

  return (
    <div className={css.containerModalAddUser}>
      {!loadig && <h3 className={css.title}>Вхід</h3>}
      {!loadig && (
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
      )}
      {loadig && (
        <div className={css.containerLoadingData}>
          <p className={css.textLoadingData}>Виконується вхід ...</p>
          <MyComponent />
        </div>
      )}
    </div>
  );
}
