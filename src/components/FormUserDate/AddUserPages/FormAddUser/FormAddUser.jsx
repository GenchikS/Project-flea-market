import css from "./FormAddUser.module.css";
import { Field, Form, Formik } from "formik";
import ButtonModalAddUser from "./ButtonModalAddUser.jsx";

export const FormAddUser = ({
  setIsClick,
  setUserAdd,
  setUserUpdate,
  setDeleteUser,
  textTitleDelete,
}) => {
  const initialValues = {
    username: "",
    email: "",
    phone: "",
  };

  const hahdleSubmit = (value, actions) => {
    console.log(`value`, value);
    setUserAdd(false);
    setUserUpdate(false);
    setDeleteUser(false);
    actions.resetForm();
  };
  return (
    <div className={css.containerModalAddUser}>
      <Formik initialValues={initialValues} onSubmit={hahdleSubmit}>
        <Form className={css.form}>
          {!textTitleDelete && (
            <Field className={css.username} type="text" name="username" />
          )}
          <Field className={css.email} type="email" name="email" />
          {!textTitleDelete && (
            <Field className={css.phone} type="phone" name="phone" />
          )}
          <ButtonModalAddUser
            setIsClick={setIsClick}
            setUserAdd={setUserAdd}
            setUserUpdate={setUserUpdate}
            setDeleteUser={setDeleteUser}
          />
        </Form>
      </Formik>
    </div>
  );
};
