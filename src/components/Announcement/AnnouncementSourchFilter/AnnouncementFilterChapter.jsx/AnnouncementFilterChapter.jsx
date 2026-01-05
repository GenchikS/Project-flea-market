import { useId, useState } from "react";
import css from "./AnnouncementFilterChapter.module.css";
import CategoryAuto from "../../FormAnnouncementData/SelectCategory/CategoryAuto/CategoryAuto.jsx";
import CategoryWork from "../../FormAnnouncementData/SelectCategory/CategoryWork/CategoryWork.jsx";
import CategoryHousing from "../../FormAnnouncementData/SelectCategory/CategoryHousing/CategoryHousing.jsx";
import CategoryServices from "../../FormAnnouncementData/SelectCategory/CategoryServices/CategoryServices.jsx";
import CategoryAnimals from "../../FormAnnouncementData/SelectCategory/CategoryAnimals/CategoryAnimals.jsx";
import CategoryDifferents from "../../FormAnnouncementData/SelectCategory/CategoryDifferents/CategoryDifferents.jsx";
import CategoryGifts from "../../FormAnnouncementData/SelectCategory/CategoryGifts/CategoryGifts.jsx";
import { ButtonUserDate } from "../../../Button/ButtonUserDate.jsx";
import { fetchAnnouncementFilterChapter } from "../../../../api/articlesAnnouncements-api.js";
import CategoryGarden from "../../FormAnnouncementData/SelectCategory/CategoryGarden/CategoryGarden.jsx";
import CategoryAll from "../../FormAnnouncementData/SelectCategory/CategoryAll/CategoryAll.jsx";
import CategoryTechnics from "../../FormAnnouncementData/SelectCategory/CategoryTechnics/CategoryTechnics.jsx";

export default function AnnouncementFilterChapter({
  chapter,
  setChapter,
  setItems,
  sourse,
}) {
  const selectCarterId = useId();
  const [category, setCategory] = useState("");
  const [purchaseSale, setPurchaseSale] = useState("");
  
  const handleChange = (evt) => {
    // console.log(`evt`, evt.target.value);
    setChapter(evt.target.value);
  };

  const handleSubmit = async (evt) => {
    evt.preventDefault();
    // console.log(`chapter`, chapter);
    // console.log(`category`, category);
    // console.log(`purchaseSale`, purchaseSale);
    const response = await fetchAnnouncementFilterChapter({
      chapter: chapter,
      category: category,
      purchaseSale: purchaseSale,
    });
    setItems(response.data);
    // console.log(`response`, response);
    setPurchaseSale("");
    setCategory("");
    setChapter("");
    document.formAnnouncement.reset();
  };
  return (
    <div className={css.containerChapter}>
      <form
        className={css.listAddAnnouncement}
        name="formAnnouncement"
        type="submit"
        onSubmit={handleSubmit}
      >
        <label className={css.label} htmlFor={selectCarterId}>
          оберіть категорію:
        </label>
        <select
          className={css.selectChapter}
          id={selectCarterId}
          name={chapter}
          onChange={handleChange}
        >
          <option className={css.option} value="всі">
            всі категорії
          </option>
          <option className={css.option} value="автомобіль">
            автомобіль
          </option>
          <option className={css.option} value="робота">
            робота
          </option>
          <option className={css.option} value="нерухомість">
            нерухомість
          </option>
          <option className={css.option} value="техніка">
            техніка
          </option>
          <option className={css.option} value="тварини">
            тварини
          </option>
          <option className={css.option} value="сад">
            сад та город
          </option>
          <option className={css.option} value="послуги">
            послуги
          </option>
          <option className={css.option} value="різне">
            різне
          </option>
          <option className={css.option} value="дарую">
            дарую
          </option>
        </select>
        {chapter === "всі" && <CategoryAll setCategory={setCategory} />}
        {chapter === "автомобіль" && (
          <CategoryAuto
            set={{ setCategory, setPurchaseSale }}
            category={category}
            purchaseSale={purchaseSale}
            sourse={sourse}
            marker={true}
          />
        )}
        {chapter === "робота" && (
          <CategoryWork
            setCategory={setCategory}
            category={category}
            marker={true}
          />
        )}
        {chapter === "нерухомість" && (
          <CategoryHousing
            set={{ setCategory, setPurchaseSale }}
            category={category}
            purchaseSale={purchaseSale}
            // sourse={sourse}
            marker={true}
          />
        )}
        {chapter === "техніка" && (
          <CategoryTechnics
            setPurchaseSale={setPurchaseSale}
            category={category}
            purchaseSale={purchaseSale}
            marker={true}
          />
        )}
        {chapter === "сад" && (
          <CategoryGarden
            set={{ setCategory, setPurchaseSale }}
            category={category}
            marker={true}
          />
        )}
        {chapter === "тварини" && (
          <CategoryAnimals
            setCategory={setCategory}
            category={category}
            marker={true}
          />
        )}
        {chapter === "послуги" && (
          <CategoryServices
            setCategory={setCategory}
            category={category}
            marker={true}
          />
        )}
        {chapter === "різне" && (
          <CategoryDifferents
            set={{ setCategory, setPurchaseSale }}
            purchaseSale={purchaseSale}
            marker={true}
          />
        )}
        {chapter === "дарую" && (
          <CategoryGifts
            set={{ setCategory, setPurchaseSale }}
            purchaseSale={purchaseSale}
            marker={true}
          />
        )}
        <ButtonUserDate type="submit" value="search">
          Search
        </ButtonUserDate>
      </form>
    </div>
  );
}