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
import { fetchArticleAddAnnouncement } from "../../../../api/articlesAnnouncements-api.js";
// import FormAddPhoto from "../FormAddPhoto/FormAddPhoto.jsx";

export default function AddAnnouncement({
  marker,
  pathTo,
  setIsModalOpen,
}) {
  const [idUser, setIdUser] = useState("");
  const [category, setCategory] = useState("");
  const [purchaseSale, setPurchaseSale] = useState("");
  const [text, setText] = useState("");
  const [chapter, setChapter] = useState("");
  // const [photo, setPhoto] = useState("");

  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    const searche = { idUser, chapter, category, purchaseSale, text };
    document.formAnnouncement.reset();
    fetchArticleAddAnnouncement(searche);
    navigate(`/admin/announcement/done`);
    return;
  };

  return (
    <div className={css.containerAddAnnouncement}>
      <h3 className={css.title}>Form add announcement</h3>
      <form
        className={css.listAddAnnouncement}
        name="formAnnouncement"
        type="submit"
        onSubmit={handleSubmit}
      >
        <FormAddId setIdUser={setIdUser} idUser={idUser} />
        <Chapter
          setChapter={setChapter}
          setCategory={setCategory}
          charter={chapter}
          marker={marker}
        />
        {chapter === "auto" && (
          <CategoryAuto
            set={{ setCategory, setPurchaseSale }}
            category={category}
            purchaseSale={purchaseSale}
          />
        )}
        {chapter === "work" && (
          <CategoryWork set={{ setCategory }} category={category} />
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
            category={category}
            purchaseSale={purchaseSale}
          />
        )}
        {chapter === "gifts" && (
          <CategoryGifts setCategory={setCategory} category={category} />
        )}
        <AnnouncementText setText={setText} marker={marker} />
        <ButtonModalAnnouncement
          type="submit"
          pathTo={pathTo}
          setIsModalOpen={setIsModalOpen}
        />
      </form>
      {/* {console.log(`objectAll`, objectAll)} */}
      {/* <FormAddPhoto saveFiles={saveFiles} /> */}
    </div>
  );
}