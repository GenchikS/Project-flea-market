import css from "./UpdataUser.module.css";
import { Field, Form, Formik } from "formik";
import { useId } from "react";
import { useNavigate } from "react-router-dom";
import * as Yup from "yup";
import ButtonModalUser from "../ButtonModalUser/ButtonModalUser.jsx";
import { fetchArticleUpdataUser } from "../../../../api/articles-api.js";

const validationUserSchema = Yup.object().shape({
  id: Yup.string().min(24).max(24).required("Requred!"),
  email: Yup.string().email(),
});

export default function UpdataUser({ pathTo, setIsModalOpen, setError }) {
  const navigate = useNavigate();

  const initialValues = {
    id: "",
    name: "",
    email: "",
    password: "",
    phone: "",
  };

  const idFieldId = useId();
  const nameFieldId = useId();
  const emailFieldId = useId();
  const passwordFieldId = useId();
  const phoneFieldId = useId();

  const hahdleSubmit = async (value, actions) => {
    // console.log(`value`, value);
    const { id, name, email, password, phone } = value;
    const nameEnd = name.toLowerCase();
    const emailEnd = email.toLowerCase();
    const passwordEnd = password.toLowerCase();
    const phoneEnd = phone.toLowerCase();

    const user = await fetchArticleUpdataUser({
      id: id,
      name: nameEnd,
      email: emailEnd,
      password: passwordEnd,
      phone: phoneEnd,
    });

    if (user.message) {
      setError(user.data);
      // console.log(`user`, user.data);
      actions.resetForm();
      return navigate(`/admin/users/error`);
    }

    actions.resetForm();
    navigate(`/admin/users/done`);
  };
  return (
    <div className={css.containerUpdateUser}>
      <h3 className={css.title}>Форма оновлення користувача</h3>
      <Formik
        initialValues={initialValues}
        onSubmit={hahdleSubmit}
        validationSchema={validationUserSchema}
      >
        <Form>
          <div className={css.listContainer}>
            <p className={css.markerRed}>*</p>
            <label className={css.label} htmlFor={idFieldId}>
              id користувача
            </label>
            <Field
              className={css.userId}
              type="text"
              name="id"
              id={nameFieldId}
              placeholder="id user"
            />
          </div>
          <div className={css.listContainer}>
            <p className={css.markerNameGreen}>*</p>
            <label className={css.label} htmlFor={nameFieldId}>
              ім'я
            </label>
            <Field
              className={css.username}
              type="text"
              name="name"
              id={nameFieldId}
              placeholder="min 2 symbol"
            />
          </div>
          <div className={css.listContainer}>
            <p className={css.markerGreen}>*</p>
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
            <p className={css.markerGreen}>*</p>
            <label className={css.label} htmlFor={passwordFieldId}>
              пароль
            </label>
            <Field
              className={css.password}
              type="phone"
              name="phone"
              id={passwordFieldId}
            />
          </div>
          <div className={css.listContainer}>
            <p className={css.markerGreen}>*</p>
            <label className={css.label} htmlFor={phoneFieldId}>
              phone
            </label>
            <Field
              className={css.phone}
              type="phone"
              name="phone"
              id={phoneFieldId}
            />
          </div>
          <ButtonModalUser pathTo={pathTo} setIsModalOpen={setIsModalOpen} />
        </Form>
      </Formik>
    </div>
  );
}
