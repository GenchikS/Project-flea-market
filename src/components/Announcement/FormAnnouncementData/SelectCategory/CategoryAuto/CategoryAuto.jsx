// import { useId } from "react";
import { useId } from "react";
import PurchaseSale from "../PurchaseSale/PurchaseSale.jsx";
import css from "./CategoryAuto.module.css";
import { PriceAnnouncement } from "../PriceAnnouncement/PriceAnnouncement.jsx";
import { YarAnnouncement } from "../YarAnnouncement/YarAnnouncement.jsx";
export default function CategoryHousing({ set, category, purchaseSale, marker, sourse }) {
  const { setCategory, setYar, setPrice } = set;
  const selectCategoryId = useId();
  return (
    <div className={css.containerCategory}>
      {sourse ?? (
        <PurchaseSale set={set} purchaseSale={purchaseSale} marker={marker} />
      )}
      <p className={!marker ? css.markerRed : css.markerGreen}>*</p>
      <label className={css.label} htmlFor={selectCategoryId}>
        оберіть категорію:
      </label>
      <select
        className={css.selectCategory}
        id={selectCategoryId}
        name={category}
        onChange={(evt) => setCategory(evt.target.value)}
      >
        <option className={css.option} value="">
          - - -{" "}
        </option>
        <option className={css.option} value="автомобіль">
          автомобіль
        </option>
        <option className={css.option} value="мотоцикл">
          мотоцикл
        </option>
        <option className={css.option} value="інше">
          інше
        </option>
      </select>
      <YarAnnouncement setYar={setYar} marker={marker} />
      <PriceAnnouncement setPrice={setPrice} marker={marker} />
    </div>
  );
}