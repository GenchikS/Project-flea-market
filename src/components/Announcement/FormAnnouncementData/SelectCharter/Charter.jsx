import css from "./Charter.module.css"
import { useId } from "react";


export default function Charter({ setCharter, charter }) {
  const selectCarterId = useId();
  return (
    <div className={css.containerCharter}>
      <label className={ css.label} htmlFor={selectCarterId}>choose charter</label>
      <select className={css.selectCharter}
        id="selectCarterId"
        name={charter}
        onChange={(evt) => setCharter(evt.target.value)}
      >
        <option className={css.option} value="all">All</option>
        <option className={css.option} value="auto">Auto</option>
        <option className={css.option} value="housing">Housing</option>
        <option className={css.option} value="services">Services</option>
        <option className={css.option} value="animals">Animals</option>
        <option className={css.option} value="different">Different</option>
        <option className={css.option} value="gift">Gift</option>
      </select>
    </div>
  );
}