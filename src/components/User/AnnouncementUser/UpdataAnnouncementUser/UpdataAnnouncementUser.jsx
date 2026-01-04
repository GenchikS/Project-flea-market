import { useState } from "react";
import css from "./UpdataAnnouncementUser.module.css";
import { useNavigate } from "react-router-dom";
import { fetchArticleAddAnnouncement } from "../../../../api/articlesAnnouncements-api.js";
import Chapter from "../../../Announcement/FormAnnouncementData/SelectChapter/Chapter.jsx";
import CategoryAuto from "../../../Announcement/FormAnnouncementData/SelectCategory/CategoryAuto/CategoryAuto.jsx";
import CategoryTechnics from "../../../Announcement/FormAnnouncementData/SelectCategory/CategoryTechnics/CategoryTechnics.jsx";
import CategoryWork from "../../../Announcement/FormAnnouncementData/SelectCategory/CategoryWork/CategoryWork.jsx";
import CategoryHousing from "../../../Announcement/FormAnnouncementData/SelectCategory/CategoryHousing/CategoryHousing.jsx";
import CategoryGarden from "../../../Announcement/FormAnnouncementData/SelectCategory/CategoryGarden/CategoryGarden.jsx";
import CategoryServices from "../../../Announcement/FormAnnouncementData/SelectCategory/CategoryServices/CategoryServices.jsx";
import CategoryAnimals from "../../../Announcement/FormAnnouncementData/SelectCategory/CategoryAnimals/CategoryAnimals.jsx";
import CategoryDifferents from "../../../Announcement/FormAnnouncementData/SelectCategory/CategoryDifferents/CategoryDifferents.jsx";
import CategoryGifts from "../../../Announcement/FormAnnouncementData/SelectCategory/CategoryGifts/CategoryGifts.jsx";
// import AnnouncementText from "../../FormAnnouncementData/AnnouncementText/AnnouncementText.jsx";
// import ButtonModalAnnouncement from "../../FormAnnouncementData/ButtonModalAnnouncement/ButtonModalAnnouncement.jsx";

import AnnouncementText from "../../../Announcement/FormAnnouncementData/AnnouncementText/AnnouncementText.jsx";
import ButtonModalAnnouncement from "../../../Announcement/FormAnnouncementData/ButtonModalAnnouncement/ButtonModalAnnouncement.jsx";
// import CategoryWork from "../../../Announcement/FormAnnouncementData/SelectCategory/CategoryWork/CategoryWork.jsx";


export default function UpdataAnnouncementUser({
  marker,
  pathTo,
  setIsModalOpen,
  setError,
  user,
  setResponseMessage,
}) {
  const [idUser, setIdUser] = useState(user._id);
  const [chapter, setChapter] = useState("");
  const [category, setCategory] = useState("");
  const [purchaseSale, setPurchaseSale] = useState("");
  const [price, setPrice] = useState("");
  const [yar, setYar] = useState("");
  const [text, setText] = useState("");

  // const [photo, setPhoto] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    // console.log(`idUser`, user._id);
    const idUser = user._id;
    event.preventDefault();
    const value = { idUser, chapter, category, purchaseSale, price, text, yar };
    const announcement = await fetchArticleAddAnnouncement(value);
    // console.log(`announcement`, announcement);
    if (announcement.data) {
      setResponseMessage(announcement.message);
    }

    document.formAnnouncement.reset();
    navigate(`/user/announcement/done`);
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
        {chapter === "техніка" && (
          <CategoryTechnics
            set={{ setCategory, setPurchaseSale }}
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
