import css from "./AddAnnouncement.module.css";
import { FormAddId } from "../FormAddId/FormAddId.jsx";
import { useState } from "react";
import CategoryAuto from "../SelectCategory/CategoryAuto/CategoryAuto.jsx";
import Chapter from "../SelectChapter/Chapter.jsx";
import CategoryHousing from "../SelectCategory/CategoryHousing/CategoryHousing.jsx";
import AnnouncementText from "../AnnouncementText/AnnouncementText.jsx";
import ButtonModalAnnouncement from "../ButtonModalAnnouncement/ButtonModalAnnouncement.jsx";
import CategoryAnimals from "../SelectCategory/CategoryAnimals/CategoryAnimals.jsx"
import CategoryServices from "../SelectCategory/CategoryServices/CategoryServices.jsx";
import CategoryDifferents from "../SelectCategory/CategoryDifferents/CategoryDifferents.jsx"
import CategoryGifts from "../SelectCategory/CategoryGifts/CategoryGifts.jsx"
import CategoryWork from "../SelectCategory/CategoryWork/CategoryWork.jsx"
import { useNavigate } from "react-router-dom";
// import FormAddPhoto from "../FormAddPhoto/FormAddPhoto.jsx";

export default function AddAnnouncement() {
  const [chapter, setChapter] = useState("");
  const [category, setCategory] = useState("")
  const [purchaseSale, setPurchaseSale] = useState("")
  const [text, setText] = useState("")
  // const [photo, setPhoto] = useState("");
  const [objectAll, setObjectAll] =useState({})

    const navigate = useNavigate();
    
    const handleSubmit = (event) => {
    event.preventDefault();
    const searche = { chapter, category, purchaseSale, text };
    console.log(`evt submit`, searche);
    setObjectAll(searche);
      document.formAnnouncement.reset();
      navigate(`/done/announcements`);
    return;
  };

  // const saveFiles = (value) => {
  //   console.log("value", value);
  //   navigate(`/done/announcement`);
  // }
  

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
          <Chapter setChapter={setChapter} charter={chapter} />
          {chapter === "auto" && (
            <CategoryAuto
              set={{ setCategory, setPurchaseSale }}
              category={category}
              purchaseSale={purchaseSale}
            />
          )}
          {chapter === "work" && (
            <CategoryWork
              set={{ setCategory }}
              category={category}
             />
          )}
          {chapter === "housing" && (
            <CategoryHousing
              set={{ setCategory, setPurchaseSale }}
              category={category}
              purchaseSale={purchaseSale}
            />
          )}
          {chapter === "services" && (
            <CategoryServices setCategory={setCategory} category={category} />
          )}
          {chapter === "animals" && (
            <CategoryAnimals setCategory={setCategory} category={category} />
          )}
          {chapter === "differents" && (
            <CategoryDifferents
              set={{ setCategory, setPurchaseSale }}
              // category={category}
              purchaseSale={purchaseSale}
            />
          )}
          {chapter === "gifts" && (
            <CategoryGifts
              set={{ setCategory, setPurchaseSale }}
              // category={category}
              purchaseSale={purchaseSale}
            />
          )}
          <AnnouncementText setText={setText} />
          <ButtonModalAnnouncement type="submit" />
        </form>
      </div>
      {/* <FormAddPhoto saveFiles={saveFiles} /> */}
      {console.log(`objectAll`, objectAll)}
    </div>
  );
}