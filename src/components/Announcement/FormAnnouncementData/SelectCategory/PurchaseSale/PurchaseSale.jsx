import { useId } from "react";
import css from "./PurchaseSale.module.css";
export default function PurchaseSale({ set, purchaseSale, marker }) {
  const { setPurchaseSale } = set;
  const PurchaseSaleId = useId();
  return (
    <div className={css.containerCategory}>
      <p className={!marker ? css.markerRed : css.markerGreen}>*</p>
      <label className={css.label} htmlFor={PurchaseSaleId}>
        choose optoins
      </label>
      <select
        className={css.selectCategory}
        id="PurchaseSaleId"
        name={purchaseSale}
        onChange={(evt) => setPurchaseSale(evt.target.value)}
      >
                <option className={css.option} value="">
          - - -
        </option>
        <option className={css.option} value="purchase">
          Purchase
        </option>
        <option className={css.option} value="sale">
          Sale
        </option>
        <option className={css.option} value="other">
          Other
        </option>
      </select>
    </div>
  );
}