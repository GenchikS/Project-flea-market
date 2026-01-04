import { useEffect, useState } from "react";
import css from "./UpdataAnnouncementUser.module.css";
import { useNavigate } from "react-router-dom";
import {  fetchArticleAnnouncementId, fetchArticleUpdataAnnouncement } from "../../../../api/articlesAnnouncements-api.js";
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
import AnnouncementText from "../../../Announcement/FormAnnouncementData/AnnouncementText/AnnouncementText.jsx";
import ButtonModalAnnouncement from "../../../Announcement/FormAnnouncementData/ButtonModalAnnouncement/ButtonModalAnnouncement.jsx";
import { PriceAnnouncement } from "../../../Announcement/FormAnnouncementData/SelectCategory/PriceAnnouncement/PriceAnnouncement.jsx";

export default function UpdataAnnouncementUser({
  marker,
  pathTo,
  setIsModalOpen,
  idAnnouncement,
  user,
  setResponseMessage,
  setError,
}) {
  // const [idUser, setIdUser] = useState(user._id);
  const [chapter, setChapter] = useState("");
  const [category, setCategory] = useState("");
  const [purchaseSale, setPurchaseSale] = useState("");
  const [price, setPrice] = useState("");
  const [yar, setYar] = useState("");
  const [text, setText] = useState("");
  const [loadig, setLoading] = useState();
  // const [photo, setPhoto] = useState("");

  const navigate = useNavigate();

  // console.log("idAnnouncement", idAnnouncement);

  useEffect(() => {
    async function featchUpdata() {
      try {
        setLoading(true);
        setError(false);
        const response = await fetchArticleAnnouncementId(idAnnouncement);
        // console.log(`response`, response.data.data[0]);
        setCategory(response.data.data[0].category);
        setChapter(response.data.data[0].chapter);
        setPurchaseSale(response.data.data[0].purchaseSale);
      } catch (error) {
        setError(true);
      }
    }
    featchUpdata()
  }, []);

  const handleSubmit = async (event) => {
    // console.log(`idUser`, user._id);
    // const idUser = user._id;
    event.preventDefault();
     const announcement = await fetchArticleUpdataAnnouncement({
      idAnnoun: idAnnouncement,
      chapter: chapter,
      category: category,
      purchaseSale: purchaseSale,
      price: price,
      yar: yar,
      text: text,
    });
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
      <h3 className={css.title}>Форма редагування оголошеня</h3>
      <p className={css.markerRed}>*</p>
      <ul className={css.listTextAnnoncement}>
        {purchaseSale && (
          <li>
            <p className={css.listPurchaseSale}>{purchaseSale}</p>
          </li>
        )}
        <li>
          <p>Категорія: {chapter}</p>
        </li>
        {category && (
          <li>
            <p>Тип: {category}</p>
          </li>
        )}
        {yar && (
          <li>
            <p>Рік випуску: {yar}</p>
          </li>
        )}
      </ul>
      <form
        className={css.listAddAnnouncement}
        name="formAnnouncement"
        type="submit"
        onSubmit={handleSubmit}
      >
      {price && <PriceAnnouncement setPrice={setPrice} marker={marker} />}
        <AnnouncementText setText={setText} marker={marker}/>
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
