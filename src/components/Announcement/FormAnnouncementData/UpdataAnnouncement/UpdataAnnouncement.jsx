import { useState } from "react";
import css from "./UpdataAnnouncement.module.css";
import { useNavigate } from "react-router-dom";
import { FormAddId } from "../FormAddId/FormAddId.jsx";
import Chapter from "../SelectChapter/Chapter.jsx";
import CategoryAuto from "../SelectCategory/CategoryAuto/CategoryAuto.jsx";
import CategoryWork from "../SelectCategory/CategoryWork/CategoryWork.jsx";
import CategoryHousing from "../SelectCategory/CategoryHousing/CategoryHousing.jsx";
import CategoryServices from "../SelectCategory/CategoryServices/CategoryServices.jsx";
import CategoryAnimals from "../SelectCategory/CategoryAnimals/CategoryAnimals.jsx";
import AnnouncementText from "../AnnouncementText/AnnouncementText.jsx";
import ButtonModalAnnouncement from "../ButtonModalAnnouncement/ButtonModalAnnouncement.jsx";
import CategoryDifferents from "../SelectCategory/CategoryDifferents/CategoryDifferents.jsx";
import CategoryGifts from "../SelectCategory/CategoryGifts/CategoryGifts.jsx";
import {  fetchArticleUpdataAnnouncement } from "../../../../api/articlesAnnouncements-api.js";

export default function UpdataAnnouncement({ marker }) {
  const [idAnnoun, setIdAnnoun] = useState("");
  const [chapter, setChapter] = useState("");
  const [category, setCategory] = useState("");
  const [purchaseSale, setPurchaseSale] = useState("");
  const [text, setText] = useState("");
  // const [photo, setPhoto] = useState("");
  const [objectAll, setObjectAll] = useState({});
  // const mar

  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    const searche = { idAnnoun, chapter, category, purchaseSale, text };
    // console.log(`evt submit`, searche);
    setObjectAll(searche);
    document.formAnnouncement.reset();
      fetchArticleUpdataAnnouncement(searche);
    navigate(`/announcement/done`);
    return;
  };

  return (
    <div className={css.containerUpdataAnnouncement}>
      <h3 className={css.title}>Form updata announcement</h3>
      <form
        className={css.listAddAnnouncement}
        name="formAnnouncement"
        type="submit"
        onSubmit={handleSubmit}
      >
        <FormAddId setIdAnnoun={setIdAnnoun} idAnnoun={idAnnoun} />
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
            marker={marker}
          />
        )}
        {chapter === "work" && (
          <CategoryWork
            set={{ setCategory }}
            category={category}
            marker={marker}
          />
        )}
        {chapter === "housing" && (
          <CategoryHousing
            set={{ setCategory, setPurchaseSale }}
            category={category}
            purchaseSale={purchaseSale}
            marker={marker}
          />
        )}
        {chapter === "services" && (
          <CategoryServices
            setCategory={setCategory}
            category={category}
            marker={marker}
          />
        )}
        {chapter === "animals" && (
          <CategoryAnimals
            setCategory={setCategory}
            category={category}
            marker={marker}
          />
        )}
        {chapter === "differents" && (
          <CategoryDifferents
            set={{ setCategory, setPurchaseSale }}
            category={category}
            purchaseSale={purchaseSale}
            marker={marker}
          />
        )}
        {chapter === "gifts" && (
          <CategoryGifts
            set={{ setCategory, setPurchaseSale }}
            category={category}
            purchaseSale={purchaseSale}
            marker={marker}
          />
        )}
        <AnnouncementText setText={setText} marker={marker} />
        <ButtonModalAnnouncement type="submit" />
      </form>
      {/* {console.log(`objectAll`, objectAll)} */}
      {/* <FormAddPhoto saveFiles={saveFiles} /> */}
    </div>
  );
}
