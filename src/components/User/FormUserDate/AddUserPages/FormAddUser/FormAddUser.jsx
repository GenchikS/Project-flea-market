import css from "./FormAddUser.module.css";
import { Field, Form, Formik } from "formik";
import ButtonModalAddUser from "./ButtonModalAddUser.jsx";
import { useId } from "react";

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

  const nameFieldId = useId();
  const emailFieldId = useId();
  const phoneFieldId = useId();

  const hahdleSubmit = (value, actions) => {
    console.log(`value`, value);
    setUserAdd(false);
    setUserUpdate(false);
    setDeleteUser(false);
    // setResponse([])
    actions.resetForm();
  };
  return (
    <div
      className={
        !textTitleDelete
          ? css.containerModalAddUser
          : css.containerModalDeleteUser
      }
    >
      <Formik initialValues={initialValues} onSubmit={hahdleSubmit}>
        <Form className={css.formContainer}>
          {!textTitleDelete && (
            <div className={css.listContainer}>
              <p className={css.markerRed}>*</p>
              <label className={css.label} htmlFor={nameFieldId}>
                name
              </label>
              <Field
                className={css.username}
                type="text"
                name="username"
                id={nameFieldId}
              />
            </div>
          )}
          <div className={css.listContainer}>
            <p className={css.markerRed}>*</p>
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
          {!textTitleDelete && (
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
