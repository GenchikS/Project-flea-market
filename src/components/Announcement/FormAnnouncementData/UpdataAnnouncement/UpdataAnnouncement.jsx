import { useState } from "react";
import css from "./UpdataAnnouncement.module.css";
import { useNavigate } from "react-router-dom";
import { FormUpdataId } from "./FormUpdataId/FormUpdataId.jsx";
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

export default function UpdataAnnouncement({ marker, pathTo, setIsModalOpen }) {
  const [idAnnoun, setIdAnnoun] = useState("");
  const [chapter, setChapter] = useState("");
  const [category, setCategory] = useState("");
  const [purchaseSale, setPurchaseSale] = useState("");
  const [text, setText] = useState("");
  // const [photo, setPhoto] = useState("");
  // const [objectAll, setObjectAll] = useState({});
  
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    const searche = { idAnnoun, chapter, category, purchaseSale, text };
    // console.log(`evt submit`, searche);
    document.formAnnouncement.reset();
    fetchArticleUpdataAnnouncement(searche);
    navigate(`/admin/announcement/done`);
    return;
  };

  return (
    <div className={css.containerUpdataAnnouncement}>
      <h3 className={css.title}>Форма оновлення оголошення</h3>
      <form
        className={css.listAddAnnouncement}
        name="formAnnouncement"
        type="submit"
        onSubmit={handleSubmit}
      >
        <FormUpdataId setIdAnnoun={setIdAnnoun} idAnnoun={idAnnoun} />
        <Chapter
          setChapter={setChapter}
          setCategory={setCategory}
          charter={chapter}
          marker={marker}
        />
        {chapter === "автомобіль" && (
          <CategoryAuto
            set={{ setCategory, setPurchaseSale }}
            category={category}
            purchaseSale={purchaseSale}
            marker={marker}
          />
        )}
        {chapter === "робота" && (
          <CategoryWork
            set={{ setCategory }}
            category={category}
            marker={marker}
          />
        )}
        {chapter === "нерухомість" && (
          <CategoryHousing
            set={{ setCategory, setPurchaseSale }}
            category={category}
            purchaseSale={purchaseSale}
            marker={marker}
          />
        )}
        {chapter === "послуги" && (
          <CategoryServices
            setCategory={setCategory}
            category={category}
            marker={marker}
          />
        )}
        {chapter === "тварини" && (
          <CategoryAnimals
            setCategory={setCategory}
            category={category}
            marker={marker}
          />
        )}
        {chapter === "різне" && (
          <CategoryDifferents
            set={{ setCategory, setPurchaseSale }}
            category={category}
            purchaseSale={purchaseSale}
            marker={marker}
          />
        )}
        {chapter === "дарую" && (
          <CategoryGifts
            set={{ setCategory, setPurchaseSale }}
            category={category}
            purchaseSale={purchaseSale}
            marker={marker}
          />
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
