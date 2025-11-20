import { useNavigate } from "react-router-dom";
import css from "./AddUser.module.css";
import { Field, Form, Formik } from "formik";
// import * as Yup from "yup";
import { useId, useState } from "react";
import { fetchArticleAddUser } from "../../../../api/articles-api.js";
import ButtonModalUser from "../ButtonModalUser/ButtonModalUser.jsx";
import { FormAddId } from "../../../Announcement/FormAnnouncementData/FormAddId/FormAddId.jsx";

// const validationUserSchema = Yup.object().shape({
//   name: Yup.string()
//     .min(2, "To short!")
//     .max(15, "To long")
//     .required("Requred!"),
//   email: Yup.string().email().required("Requred!"),
// });

export default function AddUser({ marker, pathTo, setIsModalOpen }) {
  const navigate = useNavigate();

  // const [idUser, setIdUser] = useState("");
  const [AddUserValue, setAddUserValue] = useState({
    name: "",
    email: "",
    phone: "",
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
  const phoneFieldId = useId();

  const handleChange = (event) => {
    // event.preventDefault();
    setAddUserValue({
      ...AddUserValue,
      [event.target.name]: event.target.value,
    });
  }

  const hahdleSubmit = (event) => {
    event.preventDefault();
    const { name, email, phone } = AddUserValue;
    const nameEnd = name.toLowerCase();
    const emailEnd = email.toLowerCase();
    const phonelEnd = phone.toLowerCase();
    const value = { name: nameEnd, email: emailEnd, phone: phonelEnd };
    console.log(`value`, value);
    fetchArticleAddUser(value);
    document.formUser.reset();
    navigate(`/admin/users/done`);
    return;
  }
 
  return (
    <div className={css.containerAddUser}>
      <h3 className={css.title}>Form Add user</h3>
      <form
        className={css.listAddUser}
        name="formUser"
        type="submit"
        onSubmit={hahdleSubmit}
      >
        <p className={css.markerRed}>*</p>
        <label className={css.label} htmlFor={nameFieldId}>
          name
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
        <p className={css.markerGreen}>*</p>
        <label className={css.label} htmlFor={phoneFieldId}>
          phone
        </label>
        <input
          className={css.userPhone}
          type="text"
          name="phone"
          value={AddUserValue.phone}
          onChange={handleChange}
        />
        
        <ButtonModalUser
          pathTo={pathTo}
          setIsModalOpen={setIsModalOpen}
        />
    </form>
   </div>
  );
}
