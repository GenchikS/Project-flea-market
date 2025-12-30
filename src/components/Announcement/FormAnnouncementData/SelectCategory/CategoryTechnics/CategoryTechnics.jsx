import PurchaseSale from "../PurchaseSale/PurchaseSale.jsx";
import css from "./CategoryTechnics.module.css";
export default function CategoryTechnics({ set, purchaseSale, marker, sourse }) {
  return (
    <div className={css.containerCategory}>
      {sourse ?? (
        <PurchaseSale set={set} purchaseSale={purchaseSale} marker={marker} />
      )}
    </div>
  );
}