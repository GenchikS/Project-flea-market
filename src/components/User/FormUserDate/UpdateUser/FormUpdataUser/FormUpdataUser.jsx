import css from "./FormUpdataUser.module.css";
import { Field, Form, Formik} from "formik";
import { useId } from "react";
import ButtonModalUser from "../../AddUserPages/FormAddUser/ButtonModalUser/ButtonModalUser";
import { useNavigate } from "react-router-dom";
import * as Yup from "yup";
import { fetchArticleUpdataUser } from "../../../../../articles-api";
// import { fetchArticleAddUser } from "../../../../../articles-api.js";



const validationUserSchema = Yup.object().shape({
  id: Yup.string()
    .min(24)
    .max(24)
    .required("Requred!"),
  email: Yup.string().email(),
});


export const FormUpdataUser = () => {
  const navigate = useNavigate();

  const initialValues = {
    id: "",
    name: "",
    email: "",
    phone: "",
  };

  const idFieldId = useId();
  const nameFieldId = useId();
  const emailFieldId = useId();
  const phoneFieldId = useId();

  const hahdleSubmit = (value, actions) => {
    console.log(`value`, value);
    const { id, name, email, phone } = value;
    const idEnd = id.toLowerCase();
    const nameEnd = name.toLowerCase();
    const emailEnd = email.toLowerCase();
    const phoneEnd = phone.toLowerCase();

    fetchArticleUpdataUser({ id: id, name: nameEnd, email: emailEnd, phone:phone });
    console.log(`value`, value);
    actions.resetForm();
    navigate(`/done`);
  };

  return (
    <div
      className={css.containerModalAddUser}
    >
      <Formik
        initialValues={initialValues}
        onSubmit={hahdleSubmit}
        validationSchema={validationUserSchema}
      >
        <Form className={css.formContainer}>
            <div className={css.listContainer}>
              <p className={css.markerRed}>*</p>
              <label className={css.label} htmlFor={nameFieldId}>
                id user
              </label>
              <Field
                className={css.userid}
                type="text"
                name="id"
                id={nameFieldId}
                placeholder="id user"
              />
            </div>
            <div className={css.listContainer}>
              <p className={css.markerGreen}>*</p>
              <label className={css.label} htmlFor={nameFieldId}>
                name
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
          <ButtonModalUser />
        </Form>
      </Formik>
    </div>
  );
};