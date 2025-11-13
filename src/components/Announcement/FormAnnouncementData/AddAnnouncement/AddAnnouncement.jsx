import css from "./AddAnnouncement.module.css";
import { FormAddId } from "../FormAddId/FormAddId.jsx";
import { useState } from "react";
import CategoryAuto from "../SelectCategory/CategoryAuto/CategoryAuto.jsx";
import Charter from "../SelectCharter/Charter.jsx";
import CategoryHousing from "../SelectCategory/CategoryHousing/CategoryHousing.jsx";
import AnnouncementText from "../AnnouncementText/AnnouncementText.jsx";
import ButtonModalAnnouncement from "../ButtonModalAnnouncement/ButtonModalAnnouncement.jsx";
import CategoryServices from "../SelectCategory/CategoryServices/CategoryServices.jsx";
import { useNavigate } from "react-router-dom";

export default function AddAnnouncement() {
  const [charter, setCharter] = useState("");
  const [category, setCategory] = useState("")
  const [purchaseSale, setPurchaseSale] = useState("")
  const [text, setText] = useState("")
  const [photo, setPhoto] = useState("");
  const [objectAll, setObjectAll] =useState({})

    const navigate = useNavigate();
    
    const handleSubmit = (event) => {
    event.preventDefault();
    const searche = { charter, category, purchaseSale, text };
    console.log(`evt submit`, searche);
    setObjectAll(searche);
     document.formAnnouncement.reset();
    // navigate(`/done/announcement`);
    return;
  };
  

  return (
    <div>
      <div className={css.containerAddAnnouncement}>
        <h3 className={css.title}>Form add announcement</h3>
        <form
          className={css.listAddAnnouncement}
          name="formAnnouncement"
          type="submit"
          onSubmit={handleSubmit}
        >
          <FormAddId />
          <Charter setCharter={setCharter} charter={charter} />
          {charter === "auto" && (
            <CategoryAuto
              set={{ setCategory, setPurchaseSale }}
              category={category}
              purchaseSale={purchaseSale}
            />
          )}
          {charter === "housing" && (
            <CategoryHousing
              set={{ setCategory, setPurchaseSale }}
              category={category}
              purchaseSale={purchaseSale}
            />
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
          <AnnouncementText setText={setText} />
          <ButtonModalAnnouncement type="submit" />
        </form>
      </div>
      <div>
        <h4>add photo</h4>
        {console.log(`objectAll`, objectAll)}
      </div>
    </div>
  );
}