import PurchaseSale from "../PurchaseSale/PurchaseSale.jsx";
import css from "./CategoryTechnics.module.css";
export default function CategoryTechnics({ setPurchaseSale, purchaseSale, marker, sourse }) {
  return (
    <div className={css.containerCategory}>
      {sourse ?? (
        <PurchaseSale
          setPurchaseSale={setPurchaseSale}
          purchaseSale={purchaseSale}
          marker={marker}
        />
      )}
    </div>
  );
}