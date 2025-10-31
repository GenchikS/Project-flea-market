import css from "./ModalAddUser.module.css"
import { Field, Form, Formik } from "formik";
import ButtonModalAddUser from "./ButtonModalAddUser.jsx";

export const ModalAddUser = ({ setColor, setIsClick}) => {
    const initialValues = {
        username: "",
        email: "",
        phone: ""
    }
  return (
    <div className={css.containerModalAddUser}>
      <Formik initialValues={initialValues} onSabmit={() => {}}>
        <Form className={css.form}>
          <Field className={css.username} type="text" name="username" />
          <Field className={css.email} type="email" name="email" />
          <Field className={css.phone} type="phone" name="phone" />
          <ButtonModalAddUser
            setIsClick={setIsClick}
            setColor={setColor}
          />
        </Form>
      </Formik>
    </div>
  );
};