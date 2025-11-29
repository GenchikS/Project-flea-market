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
import CategoryGarden from "../SelectCategory/CategoryGarden/CategoryGarden.jsx";
// import FormAddPhoto from "../FormAddPhoto/FormAddPhoto.jsx";

export default function AddAnnouncement({ marker, pathTo, setIsModalOpen, setError }) {
  const [idUser, setIdUser] = useState("");
  const [chapter, setChapter] = useState("");
  const [category, setCategory] = useState("");
  const [purchaseSale, setPurchaseSale] = useState("");
  const [price, setPrice] = useState("");
  const [yar, setYar] = useState("");
  const [text, setText] = useState("");

  // const [photo, setPhoto] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    const value = { idUser, chapter, category, purchaseSale, price, text, yar };
    const announcement = await fetchArticleAddAnnouncement(value);
    // console.log(`announcement`, announcement);
    if (announcement.message) {
          setError(announcement.data);
          return navigate(`/admin/announcement/error`);
    }
  
    document.formAnnouncement.reset();
    navigate(`/admin/announcement/done`);
    return;
  };

  return (
    <div className={css.containerAddAnnouncement}>
      <h3 className={css.title}>Форма додавання оголошень</h3>
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
        {chapter === "автомобіль" && (
          <CategoryAuto
            set={{ setCategory, setPurchaseSale, setPrice, setYar }}
            category={category}
            purchaseSale={purchaseSale}
          />
        )}
        {chapter === "робота" && (
          <CategoryWork setCategory={setCategory} category={category} />
        )}
        {chapter === "нерухомість" && (
          <CategoryHousing
            set={{ setCategory, setPurchaseSale }}
            category={category}
            purchaseSale={purchaseSale}
          />
        )}
        {chapter === "сад" && (
          <CategoryGarden
            set={{ setCategory, setPurchaseSale }}
            category={category}
            purchaseSale={purchaseSale}
          />
        )}
        {chapter === "послуги" && (
          <CategoryServices setCategory={setCategory} category={category} />
        )}
        {chapter === "тварини" && (
          <CategoryAnimals setCategory={setCategory} category={category} />
        )}
        {chapter === "різне" && (
          <CategoryDifferents
            set={{ setCategory, setPurchaseSale }}
            category={category}
            purchaseSale={purchaseSale}
          />
        )}
        {chapter === "дарую" && (
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