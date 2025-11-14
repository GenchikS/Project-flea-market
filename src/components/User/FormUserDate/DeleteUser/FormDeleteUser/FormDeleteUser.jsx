import css from "./FormDeleteUser.module.css";
import { Field, Form, Formik } from "formik";
import { useId } from "react";
// import ButtonModalUser from "./ButtonModalUser/ButtonModalUser.jsx";
import { useNavigate } from "react-router-dom";
import * as Yup from "yup";
import { fetchArticleDeleteUser } from "../../../../../api/articles-api.js";
import ButtonModalUser from "../../AddUserPages/FormAddUser/ButtonModalUser/ButtonModalUser.jsx";

const validationUserSchema = Yup.object().shape({
  id: Yup.string().required("Requred!"),
});

export const FormDeleteUser = () => {
  const navigate = useNavigate();

  const initialValues = {
    id: "",
  };

  const idFieldId = useId();

  const hahdleSubmit = (value, actions) => {
    fetchArticleDeleteUser(value.id);
    // console.log(`value`, value.id);
    actions.resetForm();
    navigate(`/done`);
  };

  return (
    <div className={css.containerModalDeleteUser}>
      <Formik
        initialValues={initialValues}
        onSubmit={hahdleSubmit}
        validationSchema={validationUserSchema}
      >
        <Form className={css.formContainer}>
          <div className={css.listContainer}>
            <p className={css.markerRed}>*</p>
            <label className={css.label} htmlFor={idFieldId}>
              id user
            </label>
            <Field
              className={css.userId}
              type="text"
              name="id"
              id={idFieldId}
              placeholder="id user"
            />
          </div>
          <ButtonModalUser />
        </Form>
      </Formik>
    </div>
  );
};
