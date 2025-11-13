import { Form } from "react-router-dom";
import css from "./Charter.module.css"
import { Field, Formik } from "formik";
import { useId } from "react";
export default function Charter({ setCharter, charter }) {
  const selectCarterId = useId();
  return (
    <div>
      <label htmlFor={selectCarterId}>choose charter</label>
      <select
        id="selectCarterId"
        name={charter}
        onChange={(evt) => setCharter(evt.target.value)}
      >
        <option value="all">All</option>
        <option value="auto">Auto</option>
        <option value="housing">Housing</option>
        <option value="services">Services</option>
        <option value="animals">Animals</option>
        <option value="different">Different</option>
        <option value="gift">Gift</option>
      </select>
    </div>
  );
}