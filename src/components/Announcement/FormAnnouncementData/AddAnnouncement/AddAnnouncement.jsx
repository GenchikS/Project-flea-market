import css from "./AddAnnouncement.module.css";
import { FormAddId } from "../FormAddId/FormAddId.jsx";
import { useState } from "react";
import CategoryAuto from "../SelectCategory/CategoryAuto/CategoryAuto.jsx";
import Charter from "../SelectCharter/Charter.jsx";
import CategoryHousing from "../SelectCategory/CategoryHousing/CategoryHousing.jsx";
import AnnouncementText from "../AnnouncementText/AnnouncementText.jsx";
import ButtonModalAnnouncement from "../ButtonModalAnnouncement/ButtonModalAnnouncement.jsx";
import CategoryServices from "../SelectCategory/CategoryServices/CategoryServices.jsx";

export default function AddAnnouncement() {
  const [charter, setCharter] = useState("all");
  const [category, setCategory] = useState("all")
  const [purchaseSale, setPurchaseSale] = useState("")
  

  return (
    <div className={css.containerAddAnnouncement}>
      <h3 className={css.title}>Form add announcement</h3>
      <div className={css.listAddAnnouncement}>
        <FormAddId />
        <Charter setCharter={setCharter} charter={charter} />
        {console.log(`category`, category)}
        {charter === "auto" && (
          <CategoryAuto
            set={{ setCategory, setPurchaseSale }}
            category={category}
            purchaseSale={purchaseSale}
          />
        )}
        {charter === "housing" && (
          <CategoryHousing setCategory={setCategory} category={category} />
        )}
        {charter === "services" && (
          <CategoryServices setCategory={setCategory} category={category} />
        )}
        {charter === "animals" && (
          <CategoryHousing setCategory={setCategory} category={category} />
        )}
        {charter === "different" && (
          <CategoryHousing setCategory={setCategory} category={category} />
        )}
        {charter === "gift" && (
          <CategoryHousing setCategory={setCategory} category={category} />
        )}
        <AnnouncementText />
      </div>
      <ButtonModalAnnouncement></ButtonModalAnnouncement>
      {console.log(`charter`, charter)}
      {console.log(`purchaseSale`, purchaseSale)}
      {console.log(`category`, category)}
    </div>
  );
}